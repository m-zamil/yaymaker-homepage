//initialize slider
new Glide(".glide", {
    type: "carousel",
    gap: 15,
    autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 1,
    peek:    { 
      before: 0, after: 50 
    },
  
  }).mount();