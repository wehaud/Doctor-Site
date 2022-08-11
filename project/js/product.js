$(document).ready(function() {

  var content = $('.for-hidding'),
  button = $(":button");

  function checkWidth() {
    var width = $('body').innerWidth();

      if(width < 1000) {
        content.addClass('invisible');
        $(button).click(function () {
          var parent = $(this).parent();
            if ($(parent).find(content).hasClass("invisible")) {
              $(parent).find(content).stop().slideDown("slow");
              $(parent).find(content).removeClass("invisible");
            }      
            else {
              $(parent).find(content).stop().slideUp("slow");
              $(parent).find(content).addClass("invisible");
            }
        });
      }
      else {
        content.removeClass('none');
        $(":button").css("cursor", "default");
      }
  }

  checkWidth();

  $(window).resize(function(){
    checkWidth();
  });

});