import '../../../dist/leonardo.js';
import { expect, fixture, html } from '@open-wc/testing';
import type LdRadio from './radio';
import type LdRadioGroup from '../radio-group/radio-group';

describe('<ld-radio>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<LdRadioGroup>(html`
      <ld-radio-group value="1">
        <ld-radio id="radio-1" value="1"></ld-radio>
        <ld-radio id="radio-2" value="2" disabled></ld-radio>
      </ld-radio-group>
    `);
    const radio1 = radioGroup.querySelector<LdRadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<LdRadio>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
