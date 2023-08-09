import '../../../dist/leonardo.js';
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test.js';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LdChangeEvent from '../../events/ld-change.js';
import type LdRadio from '../radio/radio.js';
import type LdRadioGroup from './radio-group.js';

describe('<ld-radio-group>', () => {
  describe('validation tests', () => {
    it('should be invalid initially when required and no radio is checked', async () => {
      const radioGroup = await fixture<LdRadioGroup>(html`
        <ld-radio-group required>
          <ld-radio value="1"></ld-radio>
          <ld-radio value="2"></ld-radio>
        </ld-radio-group>
      `);

      expect(radioGroup.checkValidity()).to.be.false;
    });

    it('should become valid when an option is checked', async () => {
      const radioGroup = await fixture<LdRadioGroup>(html`
        <ld-radio-group required>
          <ld-radio value="1"></ld-radio>
          <ld-radio value="2"></ld-radio>
        </ld-radio-group>
      `);

      radioGroup.value = '1';
      await radioGroup.updateComplete;

      expect(radioGroup.checkValidity()).to.be.true;
    });

    it(`should be valid when required and one radio is checked`, async () => {
      const el = await fixture<LdRadioGroup>(html`
        <ld-radio-group label="Select an option" value="1" required>
          <ld-radio name="option" value="1">Option 1</ld-radio>
          <ld-radio name="option" value="2">Option 2</ld-radio>
          <ld-radio name="option" value="3">Option 3</ld-radio>
        </ld-radio-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when required and no radios are checked`, async () => {
      const el = await fixture<LdRadioGroup>(html`
        <ld-radio-group label="Select an option" required>
          <ld-radio name="option" value="1">Option 1</ld-radio>
          <ld-radio name="option" value="2">Option 2</ld-radio>
          <ld-radio name="option" value="3">Option 3</ld-radio>
        </ld-radio-group>
      `);

      expect(el.checkValidity()).to.be.false;
    });

    it(`should be valid when required and a different radio is checked`, async () => {
      const el = await fixture<LdRadioGroup>(html`
        <ld-radio-group label="Select an option" value="3" required>
          <ld-radio name="option" value="1">Option 1</ld-radio>
          <ld-radio name="option" value="2">Option 2</ld-radio>
          <ld-radio name="option" value="3">Option 3</ld-radio>
        </ld-radio-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when custom validity is set`, async () => {
      const el = await fixture<LdRadioGroup>(html`
        <ld-radio-group label="Select an option">
          <ld-radio name="option" value="1">Option 1</ld-radio>
          <ld-radio name="option" value="2">Option 2</ld-radio>
          <ld-radio name="option" value="3">Option 3</ld-radio>
        </ld-radio-group>
      `);

      el.setCustomValidity('Error');

      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const radioGroup = await fixture<LdRadioGroup>(html`
        <ld-radio-group value="1" required>
          <ld-radio value="1"></ld-radio>
          <ld-radio value="2"></ld-radio>
        </ld-radio-group>
      `);
      const secondRadio = radioGroup.querySelectorAll('ld-radio')[1];

      expect(radioGroup.checkValidity()).to.be.true;
      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-valid')).to.be.true;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      await secondRadio.updateComplete;

      expect(radioGroup.checkValidity()).to.be.true;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const radioGroup = await fixture<LdRadioGroup>(html`
        <ld-radio-group required>
          <ld-radio value="1"></ld-radio>
          <ld-radio value="2"></ld-radio>
        </ld-radio-group>
      `);
      const secondRadio = radioGroup.querySelectorAll('ld-radio')[1];

      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-valid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      radioGroup.value = '';
      await radioGroup.updateComplete;

      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <ld-radio-group required>
            <ld-radio value="1"></ld-radio>
            <ld-radio value="2"></ld-radio>
          </ld-radio-group>
        </form>
      `);
      const radioGroup = el.querySelector<LdRadioGroup>('ld-radio-group')!;

      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-valid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should show a constraint validation error when setCustomValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <ld-radio-group value="1">
            <ld-radio id="radio-1" name="a" value="1"></ld-radio>
            <ld-radio id="radio-2" name="a" value="2"></ld-radio>
          </ld-radio-group>
          <ld-button type="submit">Submit</ld-button>
        </form>
      `);
      const button = form.querySelector('ld-button')!;
      const radioGroup = form.querySelector<LdRadioGroup>('ld-radio-group')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      radioGroup.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();

      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });
  });
});

describe('when resetting a form', () => {
  it('should reset the element to its initial value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <ld-radio-group value="1">
          <ld-radio value="1"></ld-radio>
          <ld-radio value="2"></ld-radio>
        </ld-radio-group>
        <ld-button type="reset">Reset</ld-button>
      </form>
    `);
    const button = form.querySelector('ld-button')!;
    const radioGroup = form.querySelector('ld-radio-group')!;
    radioGroup.value = '2';

    await radioGroup.updateComplete;
    setTimeout(() => button.click());

    await oneEvent(form, 'reset');
    await radioGroup.updateComplete;

    expect(radioGroup.value).to.equal('1');
  });
});

describe('when submitting a form', () => {
  it('should submit the correct value when a value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <ld-radio-group name="a" value="1">
          <ld-radio id="radio-1" value="1"></ld-radio>
          <ld-radio id="radio-2" value="2"></ld-radio>
          <ld-radio id="radio-3" value="3"></ld-radio>
        </ld-radio-group>
        <ld-button type="submit">Submit</ld-button>
      </form>
    `);
    const button = form.querySelector('ld-button')!;
    const radio = form.querySelectorAll('ld-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);

      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    radio.click();
    button.click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(formData!.get('a')).to.equal('2');
  });

  it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <div>
        <form id="f">
          <ld-button type="submit">Submit</ld-button>
        </form>
        <ld-radio-group form="f" name="a" value="1">
          <ld-radio id="radio-1" value="1"></ld-radio>
          <ld-radio id="radio-2" value="2"></ld-radio>
          <ld-radio id="radio-3" value="3"></ld-radio>
        </ld-radio-group>
      </div>
    `);
    const form = el.querySelector('form')!;
    const formData = new FormData(form);

    expect(formData.get('a')).to.equal('1');
  });
});

describe('when a size is applied', () => {
  it('should apply the same size to all radios', async () => {
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group size="large">
        <ld-radio id="radio-1" value="1"></ld-radio>
        <ld-radio id="radio-2" value="2"></ld-radio>
      </ld-radio-group>
    `);
    const [radio1, radio2] = radioGroup.querySelectorAll('ld-radio')!;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });

  it('should apply the same size to all radio buttons', async () => {
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group size="large">
        <ld-radio-button id="radio-1" value="1"></ld-radio-button>
        <ld-radio-button id="radio-2" value="2"></ld-radio-button>
      </ld-radio-group>
    `);
    const [radio1, radio2] = radioGroup.querySelectorAll('ld-radio-button')!;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });

  it('should update the size of all radio buttons when size changes', async () => {
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group size="small">
        <ld-radio-button id="radio-1" value="1"></ld-radio-button>
        <ld-radio-button id="radio-2" value="2"></ld-radio-button>
      </ld-radio-group>
    `);
    const [radio1, radio2] = radioGroup.querySelectorAll('ld-radio-button')!;

    expect(radio1.size).to.equal('small');
    expect(radio2.size).to.equal('small');

    radioGroup.size = 'large';
    await radioGroup.updateComplete;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });
});

describe('when the value changes', () => {
  it('should emit ld-change when toggled with the arrow keys', async () => {
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group>
        <ld-radio id="radio-1" value="1"></ld-radio>
        <ld-radio id="radio-2" value="2"></ld-radio>
      </ld-radio-group>
    `);
    const firstRadio = radioGroup.querySelector<LdRadio>('#radio-1')!;
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    radioGroup.addEventListener('ld-change', changeHandler);
    radioGroup.addEventListener('ld-input', inputHandler);
    firstRadio.focus();
    await sendKeys({ press: 'ArrowRight' });
    await radioGroup.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(radioGroup.value).to.equal('2');
  });

  it('should emit ld-change and ld-input when clicked', async () => {
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group>
        <ld-radio id="radio-1" value="1"></ld-radio>
        <ld-radio id="radio-2" value="2"></ld-radio>
      </ld-radio-group>
    `);
    const radio = radioGroup.querySelector<LdRadio>('#radio-1')!;
    setTimeout(() => radio.click());
    const event = (await oneEvent(radioGroup, 'ld-change')) as LdChangeEvent;
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should emit ld-change and ld-input when toggled with spacebar', async () => {
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group>
        <ld-radio id="radio-1" value="1"></ld-radio>
        <ld-radio id="radio-2" value="2"></ld-radio>
      </ld-radio-group>
    `);
    const radio = radioGroup.querySelector<LdRadio>('#radio-1')!;
    radio.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(radioGroup, 'ld-change')) as LdChangeEvent;
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should not emit ld-change or ld-input when the value is changed programmatically', async () => {
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group value="1">
        <ld-radio id="radio-1" value="1"></ld-radio>
        <ld-radio id="radio-2" value="2"></ld-radio>
      </ld-radio-group>
    `);

    radioGroup.addEventListener('ld-change', () => expect.fail('ld-change should not be emitted'));
    radioGroup.addEventListener('ld-input', () => expect.fail('ld-input should not be emitted'));
    radioGroup.value = '2';
    await radioGroup.updateComplete;
  });

  it('should relatively position content to prevent visually hidden scroll bugs', async () => {
    //
    // See https://github.com/leonardo-design-system/leonardo/issues/1380
    //
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group value="1">
        <ld-radio id="radio-1" value="1"></ld-radio>
      </ld-radio-group>
    `);

    const formControl = radioGroup.shadowRoot!.querySelector('.form-control')!;
    const visuallyHidden = radioGroup.shadowRoot!.querySelector('.visually-hidden')!;

    expect(getComputedStyle(formControl).position).to.equal('relative');
    expect(getComputedStyle(visuallyHidden).position).to.equal('absolute');
  });

  /**
   * @see https://github.com/leonardo-design-system/leonardo/issues/1361
   * This isn't really possible to test right now due to importing "leonardo.js" which
   * auto-defines all of our components up front. This should be tested if we ever split
   * to non-auto-defining components and not auto-defining for tests.
   */
  it.skip('should sync up radios and radio buttons if defined after radio group', async () => {
    // customElements.define("ld-radio-group", LdRadioGroup)
    //
    // const radioGroup = await fixture<LdRadioGroup>(html`
    //   <ld-radio-group value="1">
    //     <ld-radio id="radio-1" value="1"></ld-radio>
    //     <ld-radio id="radio-2" value="2"></ld-radio>
    //   </ld-radio-group>
    // `);
    //
    // await aTimeout(1)
    //
    // customElements.define("ld-radio-button", LdRadioButton)
    //
    // expect(radioGroup.querySelector("ld-radio")?.getAttribute("aria-checked")).to.equal("false")
    //
    // await aTimeout(1)
    //
    // customElements.define("ld-radio", LdRadio)
    //
    // await aTimeout(1)
    //
    // expect(radioGroup.querySelector("ld-radio")?.getAttribute("aria-checked")).to.equal("true")
  });

  runFormControlBaseTests('ld-radio-group');
});
