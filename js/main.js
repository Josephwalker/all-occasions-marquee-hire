$(function() {   
    $('.nav__button').on('click', function(e) {
      $('.nav__list').toggleClass("nav--active");
      e.preventDefault();
    });
});
