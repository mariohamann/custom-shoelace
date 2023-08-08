import '../../../dist/leonardo.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<ld-carousel-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <ld-carousel-item></ld-carousel-item> `);

    expect(el).to.exist;
  });

  it('should pass accessibility tests', async () => {
    // Arrange
    const el = await fixture(html` <div role="list"><ld-carousel-item></ld-carousel-item></div> `);

    // Assert
    await expect(el).to.be.accessible();
  });
});
