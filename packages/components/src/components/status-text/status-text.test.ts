import '../../../dist/leonardo.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<ld-status-text>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <ld-status-text></ld-status-text> `);

    expect(el).to.exist;
  });
});
