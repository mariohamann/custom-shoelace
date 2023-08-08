import '../../../dist/leonardo.js';
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test.js';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form.js';
import sinon from 'sinon';
import type LdOption from '../option/option.js';
import type LdSelect from './select.js';

describe('<ld-select>', () => {
  describe('accessibility', () => {
    it('should pass accessibility tests when closed', async () => {
      const select = await fixture<LdSelect>(html`
        <ld-select label="Select one">
          <ld-option value="option-1">Option 1</ld-option>
          <ld-option value="option-2">Option 2</ld-option>
          <ld-option value="option-3">Option 3</ld-option>
        </ld-select>
      `);
      await expect(select).to.be.accessible();
    });

    it('should pass accessibility tests when open', async () => {
      const select = await fixture<LdSelect>(html`
        <ld-select label="Select one">
          <ld-option value="option-1">Option 1</ld-option>
          <ld-option value="option-2">Option 2</ld-option>
          <ld-option value="option-3">Option 3</ld-option>
        </ld-select>
      `);

      await select.show();

      await expect(select).to.be.accessible();
    });
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select disabled>
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    expect(el.displayInput.disabled).to.be.true;
  });

  it('should show a placeholder when no options are selected', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select placeholder="Select one">
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select one');
  });

  it('should show a placeholder when no options are selected and multiple is set', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select placeholder="Select a few" multiple>
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select a few');
  });

  it('should not allow selection when the option is disabled', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select value="option-1">
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2" disabled>Option 2</ld-option>
      </ld-select>
    `);
    const disabledOption = el.querySelector('ld-option[disabled]')!;

    await el.show();
    await clickOnElement(disabledOption);
    await el.updateComplete;

    expect(el.value).to.equal('option-1');
  });

  it('should focus the select when clicking on the label', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select label="Select One">
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('ld-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit ld-change when the value is changed with the mouse', async () => {
      const el = await fixture<LdSelect>(html`
        <ld-select value="option-1">
          <ld-option value="option-1">Option 1</ld-option>
          <ld-option value="option-2">Option 2</ld-option>
          <ld-option value="option-3">Option 3</ld-option>
        </ld-select>
      `);
      const secondOption = el.querySelectorAll<LdOption>('ld-option')[1];
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('ld-change', changeHandler);
      el.addEventListener('ld-input', inputHandler);

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-2');
    });

    it('should emit ld-change and ld-input when the value is changed with the keyboard', async () => {
      const el = await fixture<LdSelect>(html`
        <ld-select value="option-1">
          <ld-option value="option-1">Option 1</ld-option>
          <ld-option value="option-2">Option 2</ld-option>
          <ld-option value="option-3">Option 3</ld-option>
        </ld-select>
      `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('ld-change', changeHandler);
      el.addEventListener('ld-input', inputHandler);

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: ' ' }); // open the dropdown
      await aTimeout(500); // wait for the dropdown to open
      await sendKeys({ press: 'ArrowDown' }); // move selection to the second option
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // move selection to the third option
      await el.updateComplete;
      await sendKeys({ press: 'Enter' }); // commit the selection
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-3');
    });

    it('should not emit ld-change or ld-input when the value is changed programmatically', async () => {
      const el = await fixture<LdSelect>(html`
        <ld-select value="option-1">
          <ld-option value="option-1">Option 1</ld-option>
          <ld-option value="option-2">Option 2</ld-option>
          <ld-option value="option-3">Option 3</ld-option>
        </ld-select>
      `);

      el.addEventListener('ld-change', () => expect.fail('ld-change should not be emitted'));
      el.addEventListener('ld-input', () => expect.fail('ld-input should not be emitted'));
      el.value = 'option-2';

      await el.updateComplete;
    });

    it('should emit ld-change and ld-input with the correct validation message when the value changes', async () => {
      const el = await fixture<LdSelect>(html`
        <ld-select required>
          <ld-option value="option-1">Option 1</ld-option>
          <ld-option value="option-2">Option 2</ld-option>
          <ld-option value="option-3">Option 3</ld-option>
        </ld-select>
      `);
      const option2 = el.querySelectorAll('ld-option')[1];
      const handler = sinon.spy((event: CustomEvent) => {
        if (el.validationMessage) {
          expect.fail(`Validation message should be empty when ${event.type} is emitted and a value is set`);
        }
      });

      el.addEventListener('ld-change', handler);
      el.addEventListener('ld-input', handler);

      await clickOnElement(el);
      await aTimeout(500);
      await clickOnElement(option2);
      await el.updateComplete;

      expect(handler).to.be.calledTwice;
    });
  });

  it('should open the listbox when any letter key is pressed with ld-select is on focus', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select>
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;

    el.focus();
    await sendKeys({ press: 'r' });
    await el.updateComplete;

    expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the listbox when ctrl + R is pressed with ld-select is on focus', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select>
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;

    el.focus();
    await sendKeys({ down: 'Control' });
    await sendKeys({ press: 'r' });
    await sendKeys({ up: 'Control' });
    await el.updateComplete;
    expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <ld-select>
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </form>
      `);
      const select = el.querySelector<LdSelect>('ld-select')!;
      expect(select.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <ld-select required>
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </form>
      `);
      const select = el.querySelector<LdSelect>('ld-select')!;
      expect(select.checkValidity()).to.be.false;
    });

    it('should focus on the displayInput when constraint validation occurs', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <ld-select required>
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </form>
      `);
      const select = el.querySelector<LdSelect>('ld-select')!;
      el.requestSubmit();
      expect(select.shadowRoot!.activeElement).to.equal(select.displayInput);
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<LdSelect>(html`
        <ld-select label="Select one" required value="option-1">
          <ld-option value="option-1">Option 1</ld-option>
          <ld-option value="option-2">Option 2</ld-option>
          <ld-option value="option-3">Option 3</ld-option>
        </ld-select>
      `);
      const secondOption = el.querySelectorAll('ld-option')[1]!;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<LdSelect>(html`
        <ld-select label="Select one" required>
          <ld-option value="option-1">Option 1</ld-option>
          <ld-option value="option-2">Option 2</ld-option>
          <ld-option value="option-3">Option 3</ld-option>
        </ld-select>
      `);
      const secondOption = el.querySelectorAll('ld-option')[1]!;

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      el.value = '';
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <ld-select required>
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </form>
      `);
      const select = el.querySelector<LdSelect>('ld-select')!;

      expect(select.hasAttribute('data-required')).to.be.true;
      expect(select.hasAttribute('data-optional')).to.be.false;
      expect(select.hasAttribute('data-invalid')).to.be.true;
      expect(select.hasAttribute('data-valid')).to.be.false;
      expect(select.hasAttribute('data-user-invalid')).to.be.false;
      expect(select.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <ld-select name="a" value="option-1">
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('option-1');
    });

    it('should serialize its name and value in FormData when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <ld-select name="a" value="option-2 option-3" multiple>
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.getAll('a')).to.include('option-2');
      expect(formData.getAll('a')).to.include('option-3');
    });

    it('should serialize its name and value in JSON', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <ld-select name="a" value="option-1">
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </form>
      `);
      const json = serialize(form);
      expect(json.a).to.equal('option-1');
    });

    it('should serialize its name and value in JSON when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <ld-select name="a" value="option-2 option-3" multiple>
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </form>
      `);
      const json = serialize(form);
      expect(JSON.stringify(json)).to.equal(JSON.stringify({ a: ['option-2', 'option-3'] }));
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <ld-button type="submit">Submit</ld-button>
          </form>
          <ld-select form="f" name="a" value="option-1">
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('option-1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <ld-select value="option-1">
            <ld-option value="option-1">Option 1</ld-option>
            <ld-option value="option-2">Option 2</ld-option>
            <ld-option value="option-3">Option 3</ld-option>
          </ld-select>
          <ld-button type="reset">Reset</ld-button>
        </form>
      `);
      const resetButton = form.querySelector('ld-button')!;
      const select = form.querySelector('ld-select')!;

      select.value = 'option-3';
      await select.updateComplete;
      expect(select.value).to.equal('option-3');

      setTimeout(() => clickOnElement(resetButton));
      await oneEvent(form, 'reset');
      await select.updateComplete;
      expect(select.value).to.equal('option-1');
    });
  });

  it('should update the display label when an option changes', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select value="option-1">
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;
    const option = el.querySelector('ld-option')!;

    expect(displayInput.value).to.equal('Option 1');

    option.textContent = 'updated';
    await oneEvent(option, 'slotchange');
    await el.updateComplete;

    expect(displayInput.value).to.equal('updated');
  });

  it('should emit ld-focus and ld-blur when receiving and losing focus', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select value="option-1">
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const focusHandler = sinon.spy();
    const blurHandler = sinon.spy();

    el.addEventListener('ld-focus', focusHandler);
    el.addEventListener('ld-blur', blurHandler);

    el.focus();
    await el.updateComplete;
    el.blur();
    await el.updateComplete;

    expect(focusHandler).to.have.been.calledOnce;
    expect(blurHandler).to.have.been.calledOnce;
  });

  it('should emit ld-clear when the clear button is clicked', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select value="option-1" clearable>
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const clearHandler = sinon.spy();
    const clearButton = el.shadowRoot!.querySelector('[part~="clear-button"]')!;

    el.addEventListener('ld-clear', clearHandler);
    await el.show();
    await clickOnElement(clearButton);
    await el.updateComplete;

    expect(clearHandler).to.have.been.calledOnce;
  });

  it('should emit ld-change and ld-input when a tag is removed', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select value="option-1 option-2 option-3" multiple>
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;
    const removeButton = tag.shadowRoot!.querySelector('[part~="remove-button"]')!;

    el.addEventListener('ld-change', changeHandler);
    el.addEventListener('ld-input', inputHandler);

    await clickOnElement(removeButton);
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
  });

  it('should emit ld-show, ld-after-show, ld-hide, and ld-after-hide events when the listbox opens and closes', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select value="option-1">
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('ld-show', showHandler);
    el.addEventListener('ld-after-show', afterShowHandler);
    el.addEventListener('ld-hide', hideHandler);
    el.addEventListener('ld-after-hide', afterHideHandler);

    await el.show();
    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;

    await el.hide();
    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should have rounded tags when using the pill attribute', async () => {
    const el = await fixture<LdSelect>(html`
      <ld-select value="option-1 option-2" multiple pill>
        <ld-option value="option-1">Option 1</ld-option>
        <ld-option value="option-2">Option 2</ld-option>
        <ld-option value="option-3">Option 3</ld-option>
      </ld-select>
    `);
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;

    expect(tag.hasAttribute('pill')).to.be.true;
  });

  runFormControlBaseTests('ld-select');
});
