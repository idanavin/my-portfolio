define(function (require) {
  const anime = require('../node_modules/animejs/lib/anime.min.js');
  

  $( ".svg1" ).load( "assets/idan.svg", function() {
    
    const svgPath = document.querySelectorAll('.path');
  
    console.log(svgPath);
    const svgText = anime({
      targets: svgPath,
      loop: false,
      direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (el, i) => { return i * 500 }
    });
  });
  $(document).ready(function(){
  });
  
});
