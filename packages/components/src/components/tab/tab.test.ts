import '../../../dist/leonardo.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type LdIconButton from '../icon-button/icon-button';
import type LdTab from './tab';
import type LdTabGroup from '../tab-group/tab-group';

describe('<ld-tab>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<LdTab>(html`
      <ld-tab-group>
        <ld-tab slot="nav">Test</ld-tab>
      </ld-tab-group>
    `);
    await expect(el).to.be.accessible();
  });

  it('should render default tab', async () => {
    const el = await fixture<LdTab>(html` <ld-tab>Test</ld-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('role')).to.equal('tab');
    expect(el.getAttribute('aria-disabled')).to.equal('false');
    expect(el.getAttribute('aria-selected')).to.equal('false');
    expect(base.getAttribute('tabindex')).to.equal('0');
    expect(base.getAttribute('class')).to.equal(' tab ');
    expect(el.active).to.equal(false);
    expect(el.closable).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should disable tab by attribute', async () => {
    const el = await fixture<LdTab>(html` <ld-tab disabled>Test</ld-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.disabled).to.equal(true);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab tab--disabled ');
    expect(base.getAttribute('tabindex')).to.equal('-1');
  });

  it('should set active tab by attribute', async () => {
    const el = await fixture<LdTab>(html` <ld-tab active>Test</ld-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.active).to.equal(true);
    expect(el.getAttribute('aria-selected')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab tab--active ');
    expect(base.getAttribute('tabindex')).to.equal('0');
  });

  it('should set closable by attribute', async () => {
    const el = await fixture<LdTab>(html` <ld-tab closable>Test</ld-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const closeButton = el.shadowRoot!.querySelector('[part~="close-button"]');

    expect(el.closable).to.equal(true);
    expect(base.getAttribute('class')).to.equal(' tab tab--closable ');
    expect(closeButton).not.to.be.null;
  });

  describe('focus', () => {
    it('should focus inner div', async () => {
      const el = await fixture<LdTab>(html` <ld-tab>Test</ld-tab> `);

      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(base);
    });
  });

  describe('blur', () => {
    it('should blur inner div', async () => {
      const el = await fixture<LdTab>(html` <ld-tab>Test</ld-tab> `);

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe('closable', () => {
    it('should emit close event when the close button is clicked', async () => {
      const tabGroup = await fixture<LdTabGroup>(html`
        <ld-tab-group>
          <ld-tab slot="nav" panel="general" closable>General</ld-tab>
          <ld-tab slot="nav" panel="custom" closable>Custom</ld-tab>
          <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
          <ld-tab-panel name="custom">This is the custom tab panel.</ld-tab-panel>
        </ld-tab-group>
      `);
      const closeButton = tabGroup
        .querySelectorAll('ld-tab')[0]!
        .shadowRoot!.querySelector<LdIconButton>('[part~="close-button"]')!;

      const handleClose = sinon.spy();
      const handleTabShow = sinon.spy();

      tabGroup.addEventListener('ld-close', handleClose, { once: true });
      // The ld-tab-show event shouldn't be emitted when clicking the close button
      tabGroup.addEventListener('ld-tab-show', handleTabShow);

      closeButton.click();
      await closeButton?.updateComplete;

      expect(handleClose.called).to.equal(true);
      expect(handleTabShow.called).to.equal(false);
    });
  });
});
