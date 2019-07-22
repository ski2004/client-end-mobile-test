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
var scrollDown = 0;
$(window).scroll(function (event) {
  var up = $(this).scrollTop();

  if (up > scrollDown) {
    $(".header").removeClass("active");
    $(".down-menu").removeClass("l-active");
    $(".gototop").addClass("active");
    $(".main-content-wrap").addClass("active");
  } else {
    $(".header").addClass("active");
    $(".down-menu").addClass("l-ctive");
    $(".gototop").removeClass("active");
    $(".main-content-wrap").removeClass("active");
  }

  scrollDown = up;
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".header").addClass("hide");
    $(".down-menu").addClass("l-hide");
  } else {
    $(".header").removeClass("hide");
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
//# sourceMappingURL=all.js.map
