"use strict";

// function scrollMenu(){
//   if($(window).scrollTop() > 120){
//     $(".gototop").fadeIn();
//   }
//   else{
//     $('.gototop').fadeOut();
//   }
// }
// scrollMenu();
// $(window).on("scroll", function(){
//   scrollMenu();
// });
/*
var scrollDown = 0;
$(window).scroll(function (event) {
  var up = $(this).scrollTop();

  if (up > scrollDown) {
    $(".header").removeClass("l-active");
    $(".down-menu").removeClass("l-active");
    $(".gototop").addClass("l-active");
    $(".main-content-wrap").addClass("l-active");
  } else {
    $(".header").addClass("l-active");
    $(".down-menu").addClass("l-active");
    $(".gototop").removeClass("l-active");
    $(".main-content-wrap").removeClass("l-active");
  }

  scrollDown = up;
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".header").addClass("l-hide");
    $(".down-menu").addClass("l-hide");
  } else {
    $(".header").removeClass("l-hide");
    $(".down-menu").removeClass("l-hide");
  }
});
$(".gototop").click(function () {
  $("html,body").animate({
    scrollTop: $("html").offset().top
  });
}); // 圖片延遲載入

jQuery(function () {
  imagesLoaded('body', function () {
    jQuery('#loading').fadeOut(2000);
  });
}());

$(".menu-toggle").click(function (e) {
  e.preventDefault();
  $("#sidebar").toggleClass("toggled");
});
/*
//# sourceMappingURL=all.js.map
