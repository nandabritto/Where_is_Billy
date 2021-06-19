$(function() {
    var hamburger = document.getElementById('hamburger');
    
    $(hamburger).click(function() {
      $(this).toggleClass('is-active');
    })
  })