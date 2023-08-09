---
meta:
  title: Carousel Item
  description: A carousel item represent a slide within a carousel.
layout: component
---

```html:preview
<ld-carousel pagination>
  <ld-carousel-item>
    <img
      alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
      src="/assets/examples/carousel/field.jpg"
    />
  </ld-carousel-item>
  <ld-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
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
        alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
        src="/assets/examples/carousel/field.jpg"
      />
    </LdCarouselItem>
    <LdCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
        src="/assets/examples/carousel/valley.jpg"
      />
    </LdCarouselItem>
  </LdCarousel>
);
```

:::tip
Additional demonstrations can be found in the [carousel examples](/components/carousel).
:::
