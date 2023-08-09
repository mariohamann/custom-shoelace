import '../../../dist/leonardo.js';
import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { clickOnElement, moveMouseOnElement } from '../../internal/test.js';
import { queryByTestId } from '../../internal/test/data-testid-helpers.js';
import { resetMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LdAlert from './alert.js';
import type LdIconButton from '../icon-button/icon-button.js';

const getAlertContainer = (alert: LdAlert): HTMLElement => {
  return alert.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
};

const expectAlertToBeVisible = (alert: LdAlert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display).not.to.equal('none');
  expect(style.visibility).not.to.equal('hidden');
  expect(style.visibility).not.to.equal('collapse');
};

const expectAlertToBeInvisible = (alert: LdAlert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display, 'alert should be invisible').to.equal('none');
};

const expectHideAndAfterHideToBeEmittedInCorrectOrder = async (alert: LdAlert, action: () => void | Promise<void>) => {
  const hidePromise = oneEvent(alert, 'ld-hide');
  const afterHidePromise = oneEvent(alert, 'ld-after-hide');
  let afterHideHappened = false;
  oneEvent(alert, 'ld-after-hide').then(() => (afterHideHappened = true));

  action();

  await hidePromise;
  expect(afterHideHappened).to.be.false;

  await afterHidePromise;
  expectAlertToBeInvisible(alert);
};

const expectShowAndAfterShowToBeEmittedInCorrectOrder = async (alert: LdAlert, action: () => void | Promise<void>) => {
  const showPromise = oneEvent(alert, 'ld-show');
  const afterShowPromise = oneEvent(alert, 'ld-after-show');
  let afterShowHappened = false;
  oneEvent(alert, 'ld-after-show').then(() => (afterShowHappened = true));

  action();

  await showPromise;
  expect(afterShowHappened).to.be.false;

  await afterShowPromise;
  expectAlertToBeVisible(alert);
};

const getCloseButton = (alert: LdAlert): LdIconButton | null | undefined =>
  alert.shadowRoot?.querySelector<LdIconButton>('[part="close-button"]');

describe('<ld-alert>', () => {
  let clock: sinon.SinonFakeTimers | null = null;

  afterEach(async () => {
    clock?.restore();
    await resetMouse();
  });

  it('renders', async () => {
    const alert = await fixture<LdAlert>(html`<ld-alert open>I am an alert</ld-alert>`);

    expectAlertToBeVisible(alert);
  });

  it('is accessible', async () => {
    const alert = await fixture<LdAlert>(html`<ld-alert open>I am an alert</ld-alert>`);

    await expect(alert).to.be.accessible();
  });

  describe('alert visibility', () => {
    it('should be visible with the open attribute', async () => {
      const alert = await fixture<LdAlert>(html`<ld-alert open>I am an alert</ld-alert>`);

      expectAlertToBeVisible(alert);
    });

    it('should not be visible without the open attribute', async () => {
      const alert = await fixture<LdAlert>(html` <ld-alert>I am an alert</ld-alert>`);

      expectAlertToBeInvisible(alert);
    });

    it('should emit ld-show and ld-after-show when calling show()', async () => {
      const alert = await fixture<LdAlert>(html` <ld-alert>I am an alert</ld-alert>`);

      expectAlertToBeInvisible(alert);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.show());
    });

    it('should emit ld-hide and ld-after-hide when calling hide()', async () => {
      const alert = await fixture<LdAlert>(html` <ld-alert open>I am an alert</ld-alert>`);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => alert.hide());
    });

    it('should emit ld-show and ld-after-show when setting open = true', async () => {
      const alert = await fixture<LdAlert>(html` <ld-alert>I am an alert</ld-alert> `);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => {
        alert.open = true;
      });
    });

    it('should emit ld-hide and ld-after-hide when setting open = false', async () => {
      const alert = await fixture<LdAlert>(html` <ld-alert open>I am an alert</ld-alert> `);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        alert.open = false;
      });
    });
  });

  describe('close button', () => {
    it('shows a close button if the alert has the closable attribute', () => async () => {
      const alert = await fixture<LdAlert>(html` <ld-alert open closable>I am an alert</ld-alert> `);
      const closeButton = getCloseButton(alert);

      expect(closeButton).to.be.visible;
    });

    it('clicking the close button closes the alert', () => async () => {
      const alert = await fixture<LdAlert>(html` <ld-alert open closable>I am an alert</ld-alert> `);
      const closeButton = getCloseButton(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clickOnElement(closeButton!);
      });
    });
  });

  describe('toast', () => {
    const getToastStack = (): HTMLDivElement | null => document.querySelector<HTMLDivElement>('.ld-toast-stack');

    const closeRemainingAlerts = async (): Promise<void> => {
      const toastStack = getToastStack();
      if (toastStack?.children) {
        for (const element of toastStack.children) {
          await (element as LdAlert).hide();
        }
      }
    };

    beforeEach(async () => {
      await closeRemainingAlerts();
    });

    it('can be rendered as a toast', async () => {
      const alert = await fixture<LdAlert>(html`<ld-alert>I am an alert</ld-alert>`);

      expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.toast());
      const toastStack = getToastStack();
      expect(toastStack).to.be.visible;
      expect(toastStack?.firstChild).to.be.equal(alert);
    });

    it('resolves only after being closed', async () => {
      const alert = await fixture<LdAlert>(html`<ld-alert closable>I am an alert</ld-alert>`);

      const afterShowEvent = oneEvent(alert, 'ld-after-show');
      let toastPromiseResolved = false;
      alert.toast().then(() => (toastPromiseResolved = true));

      await afterShowEvent;
      expect(toastPromiseResolved).to.be.false;

      const closePromise = oneEvent(alert, 'ld-after-hide');
      const closeButton = getCloseButton(alert);
      clickOnElement(closeButton!);

      await closePromise;
      await aTimeout(0);

      expect(toastPromiseResolved).to.be.true;
    });

    const expectToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).not.to.be.null;
    };

    const expectNoToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).to.be.null;
    };

    const openToast = async (alert: LdAlert): Promise<void> => {
      const openPromise = oneEvent(alert, 'ld-after-show');
      alert.toast();
      await openPromise;
    };

    const closeToast = async (alert: LdAlert): Promise<void> => {
      const closePromise = oneEvent(alert, 'ld-after-hide');
      const closeButton = getCloseButton(alert);
      await clickOnElement(closeButton!);
      await closePromise;
      await aTimeout(0);
    };

    it('deletes the toast stack after the last alert is done', async () => {
      const container = await fixture<HTMLElement>(html`<div>
        <ld-alert data-testid="alert1" closable>alert 1</ld-alert>
        <ld-alert data-testid="alert2" closable>alert 2</ld-alert>
      </div>`);

      const alert1 = queryByTestId<LdAlert>(container, 'alert1');
      const alert2 = queryByTestId<LdAlert>(container, 'alert2');

      await openToast(alert1!);

      expectToastStack();

      await openToast(alert2!);

      expectToastStack();

      await closeToast(alert1!);

      expectToastStack();

      await closeToast(alert2!);

      expectNoToastStack();
    });
  });

  describe('timer controlled closing', () => {
    it('closes after a predefined amount of time', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<LdAlert>(html` <ld-alert open duration="3000">I am an alert</ld-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after mouse-over', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<LdAlert>(html` <ld-alert open duration="3000">I am an alert</ld-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(1000);

      await moveMouseOnElement(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after opening', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<LdAlert>(html` <ld-alert duration="3000">I am an alert</ld-alert>`);

      expectAlertToBeInvisible(alert);

      clock.tick(1000);

      const afterShowPromise = oneEvent(alert, 'ld-after-show');
      alert.show();
      await afterShowPromise;

      clock.tick(2999);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });
  });

  describe('alert variants', () => {
    const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];

    variants.forEach(variant => {
      it(`adapts to the variant: ${variant}`, async () => {
        const alert = await fixture<LdAlert>(html`<ld-alert variant="${variant}" open>I am an alert</ld-alert>`);

        const alertContainer = getAlertContainer(alert);
        expect(alertContainer).to.have.class(`alert--${variant}`);
      });
    });
  });
});
