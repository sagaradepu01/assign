
$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var tshirtColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + tshirtColor + ']').addClass('active');
      $(this).addClass('active');
  });
 
});