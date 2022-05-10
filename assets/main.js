//initialize slider
new Glide(".glide", {
    type: "carousel",
    gap: 10,
    autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 1,
    peek:    { 
      before: 0, after: 50 
    },
    breakpoints: {
         1600: {
             perView: 2,
             peek:    { 
              before: 0, after: 70,
            },
            gap:20,

           },
           960:{
             perView:1,
             peek:    { 
              before: 0, after: 50 
            },
            gap:15
           }
    },
  
  }).mount();

  //initialize slider
new Glide(".glide1", {
  type: "carousel",
  gap: 10,
  autoplay: 4000,
  hoverpause: true,
  keyboard: true,
  perView: 1,
  peek:    { 
    before: 0, after: 50 
  },
  direction:"rtl",
  breakpoints: {
       1600: {
           perView: 2,
           peek:    { 
            before: 0, after: 70,
          },
          gap:20,

         },
         960:{
           perView:1,
           peek:    { 
            before: 0, after: 50 
          },
          gap:15
         }
  },

}).mount();