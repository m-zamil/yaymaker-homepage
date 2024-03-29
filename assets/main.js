window.onload = function () {
  //initialize slider
  new Glide(".glide0", {
    type: "carousel",
    gap: 20,
    autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 2,
    peek: {
      before: 0,
      after: 70,
    },
    breakpoints: {
      960: {
        perView: 1,
        peek: {
          before: 0,
          after: 50,
        },
        gap: 15,
      },
    },
  }).mount();

  //initialize slider
  new Glide(".glide1", {
    type: "carousel",
    gap: 20,
    autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 2,
    peek: {
      before: 0,
      after: 70,
    },
    direction: "rtl",
    breakpoints: {
      960: {
        perView: 1,
        peek: {
          before: 0,
          after: 50,
        },
        gap: 15,
      },
    },
  }).mount();

  //initialize slider
  new Glide(".glideTopexp", {
    type: "carousel",
    gap: 0,
    autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 3,
    peek: {
      before: 0,
      after: 0,
    },
    breakpoints: {
      960: {
        perView: 1.3,
        peek: {
          before: 0,
          after: 0,
        },
        gap: 0,
      },
    },
  }).mount();
};
