import '../../../dist/leonardo.js';
import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import type LdAnimation from './animation.js';

describe('<ld-animation>', () => {
  const boxToAnimate = html`<div style="width: 10px; height: 10px;" data-testid="animated-box"></div>`;

  it('renders', async () => {
    const animationContainer = await fixture<LdAnimation>(html`<ld-animation>${boxToAnimate}</ld-animation>`);

    expect(animationContainer).to.exist;
  });

  it('is accessible', async () => {
    const animationContainer = await fixture<LdAnimation>(html`<ld-animation>${boxToAnimate}</ld-animation>`);

    await expect(animationContainer).to.be.accessible();
  });

  describe('animation start', () => {
    it('does not start the animation by default', async () => {
      const animationContainer = await fixture<LdAnimation>(
        html`<ld-animation name="bounce" easing="ease-in-out" duration="10">${boxToAnimate}</ld-animation>`
      );
      await aTimeout(0);

      expect(animationContainer.play).to.be.false;
    });

    it('emits the correct event on animation start', async () => {
      const animationContainer = await fixture<LdAnimation>(
        html`<ld-animation name="bounce" easing="ease-in-out" duration="10">${boxToAnimate}</ld-animation>`
      );

      const startPromise = oneEvent(animationContainer, 'ld-start');
      animationContainer.play = true;
      return startPromise;
    });
  });

  it('emits the correct event on animation end', async () => {
    const animationContainer = await fixture<LdAnimation>(
      html`<ld-animation name="bounce" easing="ease-in-out" duration="1">${boxToAnimate}</ld-animation>`
    );

    const endPromise = oneEvent(animationContainer, 'ld-finish');
    animationContainer.iterations = 1;
    animationContainer.play = true;
    return endPromise;
  });

  it('can be finished by hand', async () => {
    const animationContainer = await fixture<LdAnimation>(
      html`<ld-animation name="bounce" easing="ease-in-out" duration="1000">${boxToAnimate}</ld-animation>`
    );

    const endPromise = oneEvent(animationContainer, 'ld-finish');
    animationContainer.iterations = 1;
    animationContainer.play = true;

    await aTimeout(0);

    animationContainer.finish();
    return endPromise;
  });

  it('can be cancelled', async () => {
    const animationContainer = await fixture<LdAnimation>(
      html`<ld-animation name="bounce" easing="ease-in-out" duration="1">${boxToAnimate}</ld-animation>`
    );
    let animationHasFinished = false;
    oneEvent(animationContainer, 'ld-finish').then(() => (animationHasFinished = true));
    const cancelPromise = oneEvent(animationContainer, 'ld-cancel');
    animationContainer.play = true;

    await aTimeout(0);
    animationContainer.cancel();

    await cancelPromise;
    expect(animationHasFinished).to.be.false;
  });
});
