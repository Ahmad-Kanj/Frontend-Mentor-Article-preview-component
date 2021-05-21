$(document).ready(function () {
  $(window).resize(function () {
    $(".triangle").hide();
    $(".share").hide();
    $(".shareButton").removeClass("colorToggle");
    $(".shareButton").find("img").removeClass("shareToggle");
  });
  $(".triangle").hide();
  $(".share").hide();
  $(".shareButton").click(function () {
    if ($(window).width() > 1150) {
      $(".triangle").fadeToggle(200);
      $(".share").fadeToggle(200);
      $(".shareButton").toggleClass("colorToggle");
      $(".shareButton").find("img").toggleClass("shareToggle");
    }
    if ($(window).width() < 1150) {
      $(".shareButton").fadeToggle(1);
      $(".profile").toggle();
      $(".share").toggle(1);
      $(".share").toggleClass("reset");
    }
  });
});
