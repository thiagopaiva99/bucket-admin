$(function() {
    $('html, body').on('click', ($el) => {
      if ( $el.target == document.documentElement ){
        $('html').removeClass('open-sidebar')
        $('.search').removeClass('active')
      }
    })
  
    $('.js-open-sidebar').on('click', () => {
      $('html').addClass('open-sidebar')
    })

    $('.header-profile-item-search').on('click', () => {
      $('.search').addClass('active')
    })

    $('.menu-item').on('click', function(){
      $('.menu-item').removeClass('active')
      $(this).addClass('active')
    })
})