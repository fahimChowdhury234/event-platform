(function ($) {
  ("use strict");

  //dropdown Option
  $(".barBtn").on("click", function () {
    $(this).find(".bar").toggleClass("displayin");
  });
  $(".surveyBtn").on("click", function () {
    $(this).find(".survey").toggleClass("tabin");
  });

  // app webapp user////
  //dropdown Option
  $(".tdBtn").on("click", function () {
    $(this).find(".iconslider").toggleClass("displayin");
  });

  //spaker dropdown Option
  $(".spakerBtn").on("click", function () {
    $(this).find(".spaker").toggleClass("displayin");
  });
  //logo, app banner,website banner,community banner dropdown Option
  $(".logoBtn").on("click", function () {
    $(this).find(".logo").toggleClass("displayin");
  });

  //sponsors select sponsors
  $(".selectBtn").on("click", function () {
    $(this).find(".select").toggleClass("displayin");
  });
  //sponsors select sponsors-1gco-3 file
  $(".sponsorsBtn").on("click", function () {
    $(this).find(".sponsors").toggleClass("displayin");
  });
})(jQuery);
