import '../../../dist/leonardo.js';
import { expect, fixture, html } from '@open-wc/testing';
import type LdMenuLabel from './menu-label';

describe('<ld-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<LdMenuLabel>(html` <ld-menu-label>Test</ld-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
