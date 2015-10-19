$(function(){
    var $win = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $win.scroll(function(){
            // scroll the background at var speed
            //the yPos is a negative value becaz we're scrolling it up!
            var yPos = - ($win.scrollTop() / $bgobj.data('speed'));
            //put together the final background position
            var coords = '50%'+ yPos + 'px';
            //move the background
            $bgobj.css({backgroundPosition: coords});

        });
    });
});
