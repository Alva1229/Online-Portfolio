//Menu Hamburger and Overlay
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });
  
   $(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        $('#toggle').toggleClass('active');
        $('#overlay').toggleClass('open');
    });
});

//Sticky Nav
$('.header').sticky();


$('.header').sticky({
  topSpacing: 0,
  getWidthFrom: '.main-wrapper',
  responsiveWidth: true
});























