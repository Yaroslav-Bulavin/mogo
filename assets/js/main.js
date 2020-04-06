$(document).ready(function() {

   var   header = $("#header"),
         introH = $("#intro").innerHeight(),
         scrollOffset = $(window).scrollTop();

   checkScroll(scrollOffset);

   $(window).on("scroll", function () {

      scrollOffset = $(this).scrollTop();
      checkScroll(scrollOffset);
   });

   function checkScroll(scrollOffset) {
      if( scrollOffset >= introH ){
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   }

   // Smooth scroll
   $("[data-scroll]").on("click", function(event) {
      event.preventDefault();
      var $this = $(this),
          blockId = $this.data('scroll'),
          blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");
      $("html,body").animate({
         scrollTop: blockOffset }, 500);
   });

   // Nav toggle
   $("#nav-toggle").on("click", function (event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
   });

   $(".nav_link").on("click", function () {
      $("#nav").toggleClass("active");
      $(".nav-toggle").toggleClass("active");
   });

   // Accordion

   $(".accordion_item").on("click", function(){
      if ($(this).hasClass("active")){

         $(this).removeClass("active");
         $(this).addClass("disable");
      }
      else {
         $(".accordion_item").removeClass("active");
         $(".accordion_item").addClass("disable");

         $(this).removeClass("disable");
         $(this).addClass("active");
      }
   });

   // Slider
   $("[data-slider]").slick({
      infinite: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1

   });

});