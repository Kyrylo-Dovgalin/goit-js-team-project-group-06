import Glide from '@glidejs/glide';

export const glide = new Glide('.glide', {
    type: 'carousel',
  startAt: 0,
  perView: 8,
  autoplay: 2500,
  hoverpause: true,
  bound: true,
  animationDuration: 1000,
  animationTimingFunc: 'linear',
  keyboard: true,
  touchRatio: 0.1,
  swipeThreshol: false,
  gap: 15,
  breakpoints: {
    2000: {
      perView: 8,
    },
    1280: {
      perView: 7,
    },
    1023: {
      perView: 5,
    },
  },
  });
