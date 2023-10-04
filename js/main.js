$(function(){
  $('#open').on('click', function(){
    $('.sp-nav-menu').addClass('active');
  });

  $('#close').on('click', function(){
    $('.sp-nav-menu').removeClass('active');
  });


  $('.faq-list__a').hide();
  $('.faq-list__q').on('click', function(){
    $(this).next('.faq-list__a').slideToggle();
    $(this).toggleClass('active');
  });







});