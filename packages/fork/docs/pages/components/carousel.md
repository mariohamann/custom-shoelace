---
meta:
  title: Carousel
  description: Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
layout: component
---

```html:preview
<ld-carousel pagination navigation mouse-dragging loop>
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>
```

```jsx:react
import { LdCarousel, LdCarouselItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdCarousel pagination mouse-dragging>
      <LdCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </LdCarouselItem>
    </LdCarousel>
  </>
);
```

## Examples

### Pagination

Use the `pagination` attribute to show the total number of slides and the current slide as a set of interactive dots.

```html:preview
<ld-carousel pagination>
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>
```

```jsx:react
import { LdCarousel, LdCarouselItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdCarousel pagination>
    <LdCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </LdCarouselItem>
  </LdCarousel>
);
```

### Navigation

Use the `navigation` attribute to show previous and next buttons.

```html:preview
<ld-carousel navigation>
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>
```

```jsx:react
import { LdCarousel, LdCarouselItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdCarousel navigation>
    <LdCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </LdCarouselItem>
  </LdCarousel>
);
```

### Looping

By default, the carousel will not advanced beyond the first and last slides. You can change this behavior and force the carousel to "wrap" with the `loop` attribute.

```html:preview
<ld-carousel loop navigation pagination>
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>
```

```jsx:react
import { LdCarousel, LdCarouselItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdCarousel loop navigation pagination>
    <LdCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </LdCarouselItem>
  </LdCarousel>
);
```

### Autoplay

The carousel will automatically advance when the `autoplay` attribute is used. To change how long a slide is shown before advancing, set `autoplay-interval` to the desired number of milliseconds. For best results, use the `loop` attribute when autoplay is enabled. Note that autoplay will pause while the user interacts with the carousel.

```html:preview
<ld-carousel autoplay loop pagination>
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>
```

```jsx:react
import { LdCarousel, LdCarouselItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdCarousel autoplay loop pagination>
    <LdCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </LdCarouselItem>
  </LdCarousel>
);
```

### Mouse Dragging

The carousel uses [scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) to position slides at various snap positions. This allows users to scroll through the slides very naturally, especially on touch devices. Unfortunately, desktop users won't be able to click and drag with a mouse, which can feel unnatural. Adding the `mouse-dragging` attribute can help with this.

This example is best demonstrated using a mouse. Try clicking and dragging the slide to move it. Then toggle the switch and try again.

```html:preview
<div class="mouse-dragging">
  <ld-carousel pagination>
    <ld-carousel-item>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </ld-carousel-item>
    <ld-carousel-item>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </ld-carousel-item>
    <ld-carousel-item>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </ld-carousel-item>
    <ld-carousel-item>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </ld-carousel-item>
    <ld-carousel-item>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </ld-carousel-item>
  </ld-carousel>

  <ld-divider></ld-divider>

  <ld-switch>Enable mouse dragging</ld-switch>
</div>

<script>
  const container = document.querySelector('.mouse-dragging');
  const carousel = container.querySelector('ld-carousel');
  const toggle = container.querySelector('ld-switch');

  toggle.addEventListener('ld-change', () => {
    carousel.toggleAttribute('mouse-dragging', toggle.checked);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { LdCarousel, LdCarouselItem, LdDivider, LdSwitch } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <LdCarousel navigation mouseDragging={isEnabled}>
        <LdCarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </LdCarouselItem>
        <LdCarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </LdCarouselItem>
        <LdCarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </LdCarouselItem>
        <LdCarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </LdCarouselItem>
        <LdCarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </LdCarouselItem>
      </LdCarousel>

      <LdDivider></LdDivider>

      <LdSwitch checked={isEnabled} onLdInput={() => setIsEnabled(!isEnabled)}>
        Enable mouse dragging
      </LdSwitch>
    </>
  );
};
```

### Multiple Slides Per View

The `slides-per-page` attribute makes it possible to display multiple slides at a time. You can also use the `slides-per-move` attribute to advance more than once slide at a time, if desired.

```html:preview
<ld-carousel navigation pagination slides-per-page="2" slides-per-move="2">
  <ld-carousel-item style="background: var(--ld-color-red-200);">Slide 1</ld-carousel-item>
  <ld-carousel-item style="background: var(--ld-color-orange-200);">Slide 2</ld-carousel-item>
  <ld-carousel-item style="background: var(--ld-color-yellow-200);">Slide 3</ld-carousel-item>
  <ld-carousel-item style="background: var(--ld-color-green-200);">Slide 4</ld-carousel-item>
  <ld-carousel-item style="background: var(--ld-color-blue-200);">Slide 5</ld-carousel-item>
  <ld-carousel-item style="background: var(--ld-color-violet-200);">Slide 6</ld-carousel-item>
</ld-carousel>
```

{% raw %}

```jsx:react
import { LdCarousel, LdCarouselItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdCarousel navigation pagination slidesPerPage={2} slidesPerMove={2}>
    <LdCarouselItem style={{ background: 'var(--ld-color-red-200)' }}>Slide 1</LdCarouselItem>
    <LdCarouselItem style={{ background: 'var(--ld-color-orange-200)' }}>Slide 2</LdCarouselItem>
    <LdCarouselItem style={{ background: 'var(--ld-color-yellow-200)' }}>Slide 3</LdCarouselItem>
    <LdCarouselItem style={{ background: 'var(--ld-color-green-200)' }}>Slide 4</LdCarouselItem>
    <LdCarouselItem style={{ background: 'var(--ld-color-blue-200)' }}>Slide 5</LdCarouselItem>
    <LdCarouselItem style={{ background: 'var(--ld-color-violet-200)' }}>Slide 6</LdCarouselItem>
  </LdCarousel>
);
```

{% endraw %}

### Adding and Removing Slides

The content of the carousel can be changed by adding or removing carousel items. The carousel will update itself automatically.

```html:preview
<ld-carousel class="dynamic-carousel" pagination navigation>
  <ld-carousel-item style="background: var(--ld-color-red-200)">Slide 1</ld-carousel-item>
  <ld-carousel-item style="background: var(--ld-color-orange-200)">Slide 2</ld-carousel-item>
  <ld-carousel-item style="background: var(--ld-color-yellow-200)">Slide 3</ld-carousel-item>
</ld-carousel>

<div class="carousel-options">
  <ld-button id="dynamic-add">Add slide</ld-button>
  <ld-button id="dynamic-remove">Remove slide</ld-button>
</div>

<style>
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    gap: var(--ld-spacing-x-small);
    margin-top: var(--ld-spacing-large);
  }

  .dynamic-carousel ld-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--ld-font-size-2x-large);
  }
</style>

<script>
  (() => {
    const dynamicCarousel = document.querySelector('.dynamic-carousel');
    const dynamicAdd = document.querySelector('#dynamic-add');
    const dynamicRemove = document.querySelector('#dynamic-remove');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    let colorIndex = 2;

    const addSlide = () => {
      const slide = document.createElement('ld-carousel-item');
      const color = colors[++colorIndex % colors.length];
      slide.innerText = `Slide ${dynamicCarousel.children.length + 1}`;
      slide.style.setProperty('background', `var(--ld-color-${color}-200)`);
      dynamicCarousel.appendChild(slide);
      dynamicRemove.disabled = false;
    };

    const removeSlide = () => {
      const slide = dynamicCarousel.children[dynamicCarousel.children.length - 1];
      const numSlides = dynamicCarousel.querySelectorAll('ld-carousel-item').length;

      if (numSlides > 1) {
        slide.remove();
        colorIndex--;
      }

      dynamicRemove.disabled = numSlides - 1 <= 1;
    };

    dynamicAdd.addEventListener('click', addSlide);
    dynamicRemove.addEventListener('click', removeSlide);
  })();
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdCarousel, LdCarouselItem } from '@shoelace-style/leonardo/dist/react';

const css = `
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    margin-top: var(--ld-spacing-large);
  }

  .dynamic-carousel ld-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--ld-font-size-2x-large);
  }
`;

const App = () => {
  const [slides, setSlides] = useState(['#204ed8', '#be133d', '#6e28d9']);
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

  const addSlide = () => {
    setSlides([...slides, getRandomColor()]);
  };

  const removeSlide = () => {
    setSlides(slides.slice(0, -1));
  };

  return (
    <>
      <LdCarousel className="dynamic-carousel" pagination navigation>
        {slides.map((color, i) => (
          <LdCarouselItem style={{ background: colors[i % colors.length }}>
            Slide {i}
          </LdCarouselItem>
        ))}
      </LdCarousel>

      <div className="carousel-options">
        <LdButton onClick={addSlide}>Add slide</LdButton>
        <LdButton onClick={removeSlide}>Remove slide</LdButton>
      </div>

      <style>{css}</style>
    </>
  );
};
```

{% endraw %}

### Vertical Scrolling

Setting the `orientation` attribute to `vertical` will render the carousel in a vertical layout. If the content of your slides vary in height, you will need to set amn explicit `height` or `max-height` on the carousel using CSS.

```html:preview
<ld-carousel class="vertical" pagination orientation="vertical">
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>
<style>
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
</style>
```

```jsx:react
import { LdCarousel, LdCarouselItem } from '@shoelace-style/leonardo/dist/react';

const css = `
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
`;

const App = () => (
  <>
    <LdCarousel className="vertical" loop pagination orientation="vertical">
      <LdCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </LdCarouselItem>
    </LdCarousel>
    <style>{css}</style>
  </>
);
```

### Aspect Ratio

Use the `--aspect-ratio` custom property to customize the size of the carousel's viewport.

```html:preview
<ld-carousel class="aspect-ratio" navigation pagination style="--aspect-ratio: 3/2;">
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>

<ld-divider></ld-divider>

<ld-select label="Aspect ratio" name="aspect" value="3/2">
  <ld-option value="1/1">1/1</ld-option>
  <ld-option value="3/2">3/2</ld-option>
  <ld-option value="16/9">16/9</ld-option>
</ld-select>

<script>
  (() => {
    const carousel = document.querySelector('ld-carousel.aspect-ratio');
    const aspectRatio = document.querySelector('ld-select[name="aspect"]');

    aspectRatio.addEventListener('ld-change', () => {
      carousel.style.setProperty('--aspect-ratio', aspectRatio.value);
    });
  })();
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdCarousel, LdCarouselItem, LdDivider, LdSelect, LdOption } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [aspectRatio, setAspectRatio] = useState('3/2');

  return (
    <>
      <LdCarousel className="aspect-ratio" navigation pagination style={{ '--aspect-ratio': aspectRatio }}>
        <LdCarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </LdCarouselItem>
        <LdCarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </LdCarouselItem>
        <LdCarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </LdCarouselItem>
        <LdCarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </LdCarouselItem>
        <LdCarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </LdCarouselItem>
      </LdCarousel>

      <LdDivider />

      <LdSelect
        label="Aspect ratio"
        name="aspect"
        value={aspectRatio}
        onLdChange={event => setAspectRatio(event.target.value)}
      >
        <LdOption value="1 / 1">1 / 1</LdOption>
        <LdOption value="3 / 2">3 / 2</LdOption>
        <LdOption value="16 / 9">16 / 9</LdOption>
      </LdSelect>

      <style>{css}</style>
    </>
  );
};
```

{% endraw %}

### Scroll Hint

Use the `--scroll-hint` custom property to add inline padding in horizontal carousels and block padding in vertical carousels. This will make the closest slides slightly visible, hinting that there are more items in the carousel.

```html:preview
<ld-carousel class="scroll-hint" pagination style="--scroll-hint: 10%;">
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdCarousel, LdCarouselItem, LdDivider, LdRange } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdCarousel className="scroll-hint" pagination style={{ '--scroll-hint': '10%' }}>
      <LdCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </LdCarouselItem>
      <LdCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </LdCarouselItem>
    </LdCarousel>
  </>
);
```

{% endraw %}

### Gallery Example

The carousel has a robust API that makes it possible to extend and customize. This example syncs the active slide with a set of thumbnails, effectively creating a gallery-style carousel.

```html:preview
<ld-carousel class="carousel-thumbnails" navigation loop>
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </ld-carousel-item>
</ld-carousel>

<div class="thumbnails">
  <div class="thumbnails__scroller">
    <img alt="Thumbnail by 1" class="thumbnails__image active" src="/assets/examples/carousel/mountains.jpg" />
    <img alt="Thumbnail by 2" class="thumbnails__image" src="/assets/examples/carousel/waterfall.jpg" />
    <img alt="Thumbnail by 3" class="thumbnails__image" src="/assets/examples/carousel/sunset.jpg" />
    <img alt="Thumbnail by 4" class="thumbnails__image" src="/assets/examples/carousel/field.jpg" />
    <img alt="Thumbnail by 5" class="thumbnails__image" src="/assets/examples/carousel/valley.jpg" />
  </div>
</div>

<style>
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--ld-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--ld-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }
</style>

<script>
  {
    const carousel = document.querySelector('.carousel-thumbnails');
    const scroller = document.querySelector('.thumbnails__scroller');
    const thumbnails = document.querySelectorAll('.thumbnails__image');

    scroller.addEventListener('click', e => {
      const target = e.target;

      if (target.matches('.thumbnails__image')) {
        const index = [...thumbnails].indexOf(target);
        carousel.goToSlide(index);
      }
    });

    carousel.addEventListener('ld-slide-change', e => {
      const slideIndex = e.detail.index;

      [...thumbnails].forEach((thumb, i) => {
        thumb.classList.toggle('active', i === slideIndex);
        if (i === slideIndex) {
          thumb.scrollIntoView({
            block: 'nearest'
          });
        }
      });
    });
  }
</script>
```

```jsx:react
import { useRef } from 'react';
import { LdCarousel, LdCarouselItem, LdDivider, LdRange } from '@shoelace-style/leonardo/dist/react';

const css = `
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--ld-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--ld-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }
`;

const images = [
  {
    src: '/assets/examples/carousel/mountains.jpg',
    alt: 'The sun shines on the mountains and trees (by Adam Kool on Unsplash'
  },
  {
    src: '/assets/examples/carousel/waterfall.jpg',
    alt: 'A waterfall in the middle of a forest (by Thomas Kelly on Unsplash'
  },
  {
    src: '/assets/examples/carousel/sunset.jpg',
    alt: 'The sun is setting over a lavender field (by Leonard Cotte on Unsplash'
  },
  {
    src: '/assets/examples/carousel/field.jpg',
    alt: 'A field of grass with the sun setting in the background (by Sapan Patel on Unsplash'
  },
  {
    src: '/assets/examples/carousel/valley.jpg',
    alt: 'A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash'
  }
];

const App = () => {
  const carouselRef = useRef();
  const thumbnailsRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const thumbnails = Array.from(thumbnailsRef.current.querySelectorAll('.thumbnails__image'));

    thumbnails[currentSlide]..scrollIntoView({
      block: 'nearest'
    });
  }, [currentSlide]);

  const handleThumbnailClick = (index) => {
    carouselRef.current.goToSlide(index);
  }

  const handleSlideChange = (event) => {
    const slideIndex = e.detail.index;
    setCurrentSlide(slideIndex);
  }

  return (
    <>
      <LdCarousel className="carousel-thumbnails" navigation loop onLdSlideChange={handleSlideChange}>
        {images.map({ src, alt }) => (
          <LdCarouselItem>
            <img
              alt={alt}
              src={src}
            />
          </LdCarouselItem>
        )}
      </LdCarousel>

      <div class="thumbnails">
        <div class="thumbnails__scroller">
          {images.map({ src, alt }, i) => (
            <img
              alt={`Thumbnail by ${i + 1}`}
              className={`thumbnails__image ${i === currentSlide ? 'active' : ''}`}
              onCLick={() => handleThumbnailClick(i)}
              src={src}
            />
          )}
        </div>
      </div>
      <style>{css}</style>
    </>
  );
};
```
