$(document).ready(function () {
  $(window).on("orientationchange", function () {
    if ($(window).width() > 1150) {
      $(".triangle").hide();
      $(".share").hide();
      $(".shareButton").removeClass("colorToggle");
      $(".shareButton").find("img").removeClass("shareToggle");
      $(".profile").show();
      $(".shareButton").show();
      $(".share").removeClass("reset");
      $(".shareButton2").hide();
    }
  });

  $(window).resize(function () {
    if ($(window).width() > 1150) {
      $(".triangle").hide();
      $(".share").hide();
      $(".shareButton").removeClass("colorToggle");
      $(".shareButton").find("img").removeClass("shareToggle");
      $(".profile").show();
      $(".shareButton").show();
      $(".share").removeClass("reset");
      $(".shareButton2").hide();
    }
  });

  $(".triangle").hide();
  $(".share").hide();

  $(".shareButton, .shareButton2").click(function () {
    if ($(window).width() > 1150) {
      $(".triangle").fadeToggle(200);
      $(".share").fadeToggle(200);
      $(".shareButton").toggleClass("colorToggle");
      $(".shareButton").find("img").toggleClass("shareToggle");
    }
    if ($(window).width() < 1150) {
      $(".shareButton2").show(1);
      $(".shareButton").show(1);
      $(".profile").toggle();
      $(".share").toggle(1);
      $(".share").toggleClass("reset");
    }
  });
});
