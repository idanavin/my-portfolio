define(function (require) {

    $( ".links" ).load( "pages/menu.html", function() {

        var $menu = $('.Menu-list'),
            $item = $('.Menu-list-item'),
            w = $(window).width(), //window width
            h = $(window).height(), //window height
            w1 = $(".links").width(),
            h1 = $(".links").height();
            console.log(w, h, w1, h1);
            
        
        $('.links').on('mousemove', function (e) {
            var offsetX = 0.5 - e.pageX / w1, //cursor position X
                offsetY = 0.5 - e.pageY / h1, //cursor position Y
                dy = e.pageY - h1 / 2, //@h/2 = center of poster
                dx = e.pageX - w1 / 2, //@w/2 = center of poster
                theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
                angle = theta * 180 / Math.PI - 90, //convert rad in degrees
                offsetPoster = $menu.data('offset'),
                transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform
    
            //get angle between 0-360
            if (angle < 0) {
                angle = angle + 360;
            }
    
            //poster transform
            $menu.css('transform', transformPoster);
    
            //parallax for each layer
            $item.each(function () {
                var $this = $(this),
                    offsetLayer = $this.data('offset') || 0,
                    transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';
    
                $this.css('transform', transformLayer);
            });
        });
    });

});