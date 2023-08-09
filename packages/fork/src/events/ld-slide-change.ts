import type LdCarouselItem from '../components/carousel-item/carousel-item';

type LdSlideChangeEvent = CustomEvent<{ index: number; slide: LdCarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-slide-change': LdSlideChangeEvent;
  }
}

export default LdSlideChangeEvent;
