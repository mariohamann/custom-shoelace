import '../../../dist/leonardo.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<ld-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <ld-mutation-observer></ld-mutation-observer> `);

    expect(el).to.exist;
  });
});
