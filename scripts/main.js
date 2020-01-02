define(function (require) {
  const anime = require('../node_modules/animejs/lib/anime.min.js');
  
  const animate = function() {
    const svgPath = document.querySelectorAll('.path');
    
    const svgText = anime({
      targets: svgPath,
      loop: false,
      direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (el, i) => { return i * 500 },
      complete: function() {
        svgPath.forEach(function (e) {
          e.parentElement.style.transition = 'all 0.5s ease-in';
          e.parentElement.style.fill = 'white';
        });     
      }
    });
  }

  $( ".svg1" ).load( "./assets/idan.svg", function() {
    $( ".svg2" ).load( "./assets/sub.svg", function() {
      animate();
    });
  });
  // $( ".svg2" ).load( "./assets/sub.svg", function() {
  //   animate();
  // });

  
});
