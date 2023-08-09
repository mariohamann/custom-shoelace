import '../../../dist/leonardo.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LdMenuItem from './menu-item';

describe('<ld-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<LdMenuItem>(html`
      <ld-menu>
        <ld-menu-item>Item 1</ld-menu-item>
        <ld-menu-item>Item 2</ld-menu-item>
        <ld-menu-item>Item 3</ld-menu-item>
        <ld-divider></ld-divider>
        <ld-menu-item type="checkbox" checked>Checked</ld-menu-item>
        <ld-menu-item type="checkbox">Unchecked</ld-menu-item>
      </ld-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<LdMenuItem>(html` <ld-menu-item>Test</ld-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<LdMenuItem>(html` <ld-menu-item disabled>Test</ld-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<LdMenuItem>(html` <ld-menu-item>Test</ld-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<LdMenuItem>(html` <ld-menu-item>Text</ld-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<LdMenuItem>(html`
      <ld-menu>
        <ld-menu-item inert>Item 1</ld-menu-item>
        <ld-menu-item>Item 2</ld-menu-item>
        <ld-menu-item>Item 3</ld-menu-item>
      </ld-menu>
    `);
    const item1 = menu.querySelector('ld-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });
});
