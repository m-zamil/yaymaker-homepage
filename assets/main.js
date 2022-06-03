window.onload = function () {
  //initialize slider
  new Glide(".glide", {
    type: "carousel",
    gap: 10,
    autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 1,
    peek: {
      before: 0,
      after: 50,
    },
    breakpoints: {
      19200: {
        perView: 2,
        peek: {
          before: 0,
          after: 70,
        },
        gap: 20,
      },
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
    gap: 10,
    // autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 1,
    peek: {
      before: 0,
      after: 50,
    },
    direction: "rtl",
    breakpoints: {
      19200: {
        perView: 2,
        peek: {
          before: 0,
          after: 70,
        },
        gap: 20,
      },

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
    gap: 10,
    autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 1,
    peek: {
      before: 0,
      after: 50,
    },
    breakpoints: {
      19200: {
        perView: 3,
        peek: {
          before: 0,
          after: 0,
        },
        gap: 0,
      },

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
