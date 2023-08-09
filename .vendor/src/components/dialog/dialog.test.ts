import '../../../dist/leonardo.js';
// cspell:dictionaries lorem-ipsum
import { aTimeout, elementUpdated, expect, fixture, html, waitUntil } from '@open-wc/testing';
import { LitElement } from 'lit';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LdDialog from './dialog';

describe('<ld-dialog>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<LdDialog>(html`
      <ld-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ld-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<LdDialog>(
      html` <ld-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ld-dialog> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit ld-show and ld-after-show when calling show()', async () => {
    const el = await fixture<LdDialog>(html`
      <ld-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ld-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('ld-show', showHandler);
    el.addEventListener('ld-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit ld-hide and ld-after-hide when calling hide()', async () => {
    const el = await fixture<LdDialog>(html`
      <ld-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ld-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('ld-hide', hideHandler);
    el.addEventListener('ld-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit ld-show and ld-after-show when setting open = true', async () => {
    const el = await fixture<LdDialog>(html`
      <ld-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ld-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('ld-show', showHandler);
    el.addEventListener('ld-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit ld-hide and ld-after-hide when setting open = false', async () => {
    const el = await fixture<LdDialog>(html`
      <ld-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ld-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('ld-hide', hideHandler);
    el.addEventListener('ld-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should not close when ld-request-close is prevented', async () => {
    const el = await fixture<LdDialog>(html`
      <ld-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ld-dialog>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part~="overlay"]')!;

    el.addEventListener('ld-request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<LdDialog>(html` <ld-dialog><input /></ld-dialog> `);
    const input = el.querySelector('input')!;
    const initialFocusHandler = sinon.spy((event: Event) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('ld-initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });

  it('should close when pressing Escape', async () => {
    const el = await fixture<LdDialog>(html` <ld-dialog open></ld-dialog> `);
    const hideHandler = sinon.spy();

    el.addEventListener('ld-hide', hideHandler);

    await sendKeys({ press: 'Escape' });
    await waitUntil(() => hideHandler.calledOnce);

    expect(el.open).to.be.false;
  });

  // https://github.com/leonardo-design-system/leonardo/issues/1382
  it('should properly cycle through tabbable elements when ld-dialog is used in a shadowRoot', async () => {
    class AContainer extends LitElement {
      get dialog() {
        return this.shadowRoot?.querySelector('ld-dialog');
      }

      openDialog() {
        this.dialog?.show();
      }

      render() {
        return html`
          <h1>Dialog Example</h1>
          <ld-dialog label="Dialog" class="dialog-overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <label><input type="checkbox" />A</label>
            <label><input type="checkbox" />B</label>
            <button>Button</button>
          </ld-dialog>

          <ld-button @click=${this.openDialog}>Open Dialog</ld-button>
        `;
      }
    }

    if (!window.customElements.get('a-container')) {
      window.customElements.define('a-container', AContainer);
    }

    const testCase = await fixture(html`
      <div>
        <a-container></a-container>

        <p>
          Open the dialog, then use <kbd>Tab</kbd> to cycle through the inputs. Focus should be trapped, but it reaches
          things outside the dialog.
        </p>
      </div>
    `);

    const container = testCase.querySelector('a-container');

    if (!container) {
      throw Error('Could not find <a-container> element.');
    }

    await elementUpdated(container);
    const dialog = container.shadowRoot?.querySelector('ld-dialog');

    if (!dialog) {
      throw Error('Could not find <ld-dialog> element.');
    }

    const closeButton = dialog.shadowRoot?.querySelector('ld-icon-button');
    const checkbox1 = dialog.querySelector("input[type='checkbox']");
    const checkbox2 = dialog.querySelectorAll("input[type='checkbox']")[1];
    const button = dialog.querySelector('button');

    // Opens modal.
    const openModalButton = container.shadowRoot?.querySelector('ld-button');

    if (openModalButton) openModalButton.click();

    // Test tab cycling
    await pressTab();

    expect(container.shadowRoot?.activeElement).to.equal(dialog);
    expect(dialog.shadowRoot?.activeElement).to.equal(closeButton);

    await pressTab();
    expect(container.shadowRoot?.activeElement).to.equal(checkbox1);

    await pressTab();
    expect(container.shadowRoot?.activeElement).to.equal(checkbox2);

    await pressTab();
    expect(container.shadowRoot?.activeElement).to.equal(button);

    await pressTab();
    expect(dialog.shadowRoot?.activeElement).to.equal(closeButton);

    await pressTab();
    expect(container.shadowRoot?.activeElement).to.equal(checkbox1);

    // Test Shift+Tab cycling

    // I found these timeouts were needed for WebKit locally.
    await aTimeout(10);
    await sendKeys({ down: 'Shift' });
    await aTimeout(10);

    await pressTab();
    expect(dialog.shadowRoot?.activeElement).to.equal(closeButton);

    await pressTab();
    expect(container.shadowRoot?.activeElement).to.equal(button);

    await pressTab();
    expect(container.shadowRoot?.activeElement).to.equal(checkbox2);

    await pressTab();
    expect(container.shadowRoot?.activeElement).to.equal(checkbox1);

    await pressTab();
    expect(dialog.shadowRoot?.activeElement).to.equal(closeButton);

    // End shift+tab cycling
    await sendKeys({ up: 'Shift' });
  });
});

// We wait 50ms just to give the browser some time to figure out the current focus.
// 50 was the magic number I found locally :shrug:
async function pressTab() {
  await aTimeout(50);
  await sendKeys({ press: 'Tab' });
  await aTimeout(50);
}
