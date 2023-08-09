import '../../../dist/leonardo.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<ld-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <ld-popup></ld-popup> `);

    expect(el).to.exist;
  });
});
