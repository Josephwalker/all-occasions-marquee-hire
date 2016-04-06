$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


$(function() {   
    $('.nav__button').on('click', function(e) {
      $('.nav').toggleClass("nav--active");
      e.preventDefault();
    });
});


$(function() {   
    $('.nav__item').on('click', function(e) {
      $('.nav').toggleClass("nav--active");
      e.preventDefault();
    });
});