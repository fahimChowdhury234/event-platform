(function ($) {
  "use strict";

  //Preloader
  $(window).on("load", function (event) {
    $(".proloader").delay(500).fadeOut(500);
  });
  /*------------------------------------
                   Color Switcher
    --------------------------------------*/

  // Show and hide color-switcher
  // $(".color-switcher .switcher-button").on('click', function() {
  //     $(".color-switcher").toggleClass("show-color-switcher", "hide-color-switcher", 300);
  // });

  // Color Skins
  $("a.color").on("click", function () {
    var title = $(this).attr("title");
    $("#style-colors").attr(
      "href",
      "assets/css/switcher/skin-" + title + ".css"
    );
    return false;
  });

  //open Sidebar in mobile
  $(".sidebar-menu").on("click", function () {
    $(this).toggleClass("open");
    $(".sidebar").toggleClass("open");
  });
  $(".upload-option-btn").on("click", function () {
    $(this).toggleClass("open");
    $(".upload-btn-wrapper").toggleClass("open");
  });

  //Read more content Toggle
  $(".read-more").click(function () {
    $(this).prev().slideToggle();
    if ($(this).text() == "+ Read More") {
      $(this).text("- Read Less");
    } else {
      $(this).text("+ Read More");
    }
  });

  //Open Uder dropdown menu
  $(".user-option").on("click", function () {
    $(".user-option-menu").toggleClass("open");
  });
  //dropdown Option
  $(".chat-more-option").on("click", function () {
    $(this).find(".chat_option").toggleClass("open");
  });
  //Poll form  open
  $(".create-poll button.vtb-btn").on("click", function () {
    $(".poll-form").toggleClass("open");
  });
  $(".poll_opt_two").on("click", function () {
    $(".poll-form").removeClass("open");
  });
  //dateslot select
  $(".dt_slot").on("click", function () {
    $(this).toggleClass("selected");
    $(this)
      .parent(".item")
      .parent(".owl-item")
      .siblings()
      .find(".dt_slot")
      .removeClass("selected");
  });
  //time select
  $(".timeslot-item").on("click", function () {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
  });
  //Dayslot select
  $(".daytime-slot-item").on("click", function () {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
  });

  //leaderboard sidebar
  $(".leaderboard").on("click", function () {
    $(".lb-sidebar").toggleClass("open");
    if ($(".cv-sidebar").hasClass("open")) {
      $(".cv-sidebar").removeClass("open");
    }
  });
  $(".search-popup").on("click", function () {
    $(".lb-searchbox").addClass("open");
  });
  $(".close-search-popup").on("click", function () {
    $(".lb-searchbox").removeClass("open");
  });
  $(".close-cv").on("click", function () {
    if ($(".cv-sidebar").hasClass("open")) {
      $(".cv-sidebar").removeClass("open");
    }
  });
  //Briefcase sidebar
  $(".briefcase").on("click", function () {
    $(".bf-sidebar").toggleClass("open");
    // if ($('.bf-sidebar').hasClass('open')) {
    //     $('.bf-sidebar').removeClass('open')
    // }
  });
  $(".close-bf").on("click", function () {
    if ($(".bf-sidebar").hasClass("open")) {
      $(".bf-sidebar").removeClass("open");
    }
  });
  //Notification sidebar
  $(".notification").on("click", function () {
    $(".nf-sidebar").toggleClass("open");
  });
  $(".close-nf").on("click", function () {
    if ($(".nf-sidebar").hasClass("open")) {
      $(".nf-sidebar").removeClass("open");
    }
  });

  //Mobile Dropdown in Profile Dashboard
  $(".mobile-dropdown span").on("click", function () {
    $(".mobile-dropdown ul").toggleClass("open");
  });
  //My Note Dropdown in Profile Dashboard
  $(".my-note-dropdown span").on("click", function () {
    $(this).parent().toggleClass("open");
  });
  // $('.close-search-popup').on('click', function() {
  //     $('.lb-searchbox').removeClass('open');
  // });
  //Conversation sidebar
  $(".conversation").on("click", function () {
    $(".cv-sidebar").toggleClass("open");
    if ($(".lb-sidebar").hasClass("open")) {
      $(".lb-sidebar").removeClass("open");
    }
  });
  //Chair Selection sidebar
  $(".ch_list_v1 li, .ch_list_v2 li").on("click", function () {
    $(this).toggleClass("selected");
  });
  //Filter active sidebar
  $(".filter_content ul li a").on("click", function () {
    $(this).toggleClass("active");
    $(this).parent().siblings().find("a").removeClass("active");
  });
  //Filter active sidebar
  $(".timeline_comment").on("click", function () {
    $(this)
      .parent(".timeline-option")
      .parent(".timeline-body")
      .find(".timeline-more")
      .slideToggle();
  });
  //Filter active sidebar
  $(".report-btn").on("click", function () {
    $(".report-popup").toggleClass("open");
    $(".body_overlay").addClass("open");
  });
  $(".report-popup-header button").on("click", function () {
    $(".report-popup").removeClass("open");
    $(".body_overlay").removeClass("open");
  });

  //Feedback Icon Color Change
  $(".feedback-button label").on("click", function () {
    $(this).toggleClass("checked");
  });

  //Filter active sidebar
  $(".delete-btn").on("click", function () {
    $(".delete-popup").toggleClass("open");
    $(".body_overlay").addClass("open");
  });
  $(".report-popup-header button").on("click", function () {
    $(".delete-popup").removeClass("open");
    $(".body_overlay").removeClass("open");
  });
  $(".report-btn").on("click", function () {
    if ($(".delete-popup").hasClass("open")) {
      $(".delete-popup").removeClass("open");
    }
  });
  $(".delete-btn").on("click", function () {
    if ($(".report-popup").hasClass("open")) {
      $(".report-popup").removeClass("open");
    }
  });

  $(".close-cv").on("click", function () {
    $(".cv-sidebar").removeClass("open");
  });
  $(".close-search-popup").on("click", function () {
    $(".cv-searchbox").removeClass("open");
  });

  //Create Poll Slider
  $(".create_poll").on("click", function () {
    $(".poll_form").slideToggle();
  });

  //Create Poll Slider
  $(".doc-msg").on("click", function () {
    $(this).parent(".doc-icon").find(".doc-field").toggleClass("open");
  });

  //TimeZone Dropdown
  $(".timezone_btn").on("click", function () {
    $(".timezone-dropdown").toggleClass("open");
  });

  /*=========================
      OwlCarousel START
    ===========================*/
  $(document).ready(function () {
    if ($(window).width() < 768) {
      startCarousel();
    } else {
      $(".del_contact-slider").addClass("off");
    }
  });

  $(window).resize(function () {
    if ($(window).width() < 768) {
      startCarousel();
    } else {
      stopCarousel();
    }
  });

  function startCarousel() {
    $(".del_contact-slider").owlCarousel({
      items: 2,
      nav: true,
      navText: [
        '<img src="assets/img/left-arrow-9.svg">',
        '<img src="assets/img/right-arrow-9.svg">',
      ],
      dot: false,
      autoplayTimeout: 2000,
      loop: false,
      margin: 4,
      smartSpeed: 450,
      responsiveClass: true,
      // responsive: {
      //     0: {
      //         items: 1,
      //         nav: false,
      //         dot: true

      //     },
      //     767: {
      //         items: 1,
      //         nav: false,
      //         dot: true

      //     },
      //     1000: {
      //         items: 1,

      //     }
      // }
    });
  }

  function stopCarousel() {
    var owl = $(".del_contact-slider");
    owl.trigger("destroy.owl.carousel");
    owl.addClass("off");
  }

  // Testimonial Slider
  $(".banner-slider").owlCarousel({
    items: 1,
    nav: true,
    dot: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    loop: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    margin: 0,
    smartSpeed: 1050,
  });

  // Testimonial Slider
  $(".video-slider").owlCarousel({
    nav: true,
    dot: false,
    autoplayTimeout: 2000,
    loop: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    margin: 10,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        margin: 8,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  //Gallery Slider
  $(".gallery-slider").owlCarousel({
    items: 5,
    nav: true,
    dot: false,
    center: false,
    autoplayTimeout: 2000,
    loop: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    margin: 15,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        margin: 8,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
    },
  });

  //RP Slider
  $(".rp-slider").owlCarousel({
    items: 5,
    nav: true,
    dot: false,
    center: false,
    autoplayTimeout: 2000,
    loop: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    margin: 15,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        margin: 8,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
    },
  });
  //Reception feature slider
  $(".rc_feature-slider").owlCarousel({
    nav: true,
    dot: false,
    center: false,
    autoplayTimeout: 2000,
    loop: false,
    navText: [
      '<img src="assets/img/rc-arrow-1.svg">',
      '<img src="assets/img/rc-arrow-1.svg">',
    ],
    margin: 18,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 8,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
      1400: {
        items: 2,
      },
    },
  });
  $(".rc_exh-one").owlCarousel({
    items: 3,
    nav: true,
    dot: false,
    center: false,
    autoplayTimeout: 2000,
    loop: false,
    navText: [
      '<img src="assets/img/rc-arrow-1.svg">',
      '<img src="assets/img/rc-arrow-1.svg">',
    ],
    margin: 18,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        margin: 10,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  });

  //Date Slider

  $(".date-slider").owlCarousel({
    items: 5,
    nav: true,
    dot: false,
    center: false,
    autoplayTimeout: 2000,
    loop: true,
    mouseDrag: false,
    navText: [
      '<img src="assets/img/left-arrow.svg">',
      ' <img src="assets/img/right-arrow.svg">',
    ],
    margin: 15,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        margin: 8,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });
  $(".date-slider_two").owlCarousel({
    items: 8,
    nav: true,
    dot: false,
    center: false,
    autoplayTimeout: 2000,
    loop: true,
    mouseDrag: false,
    navText: [
      '<img src="assets/img/left-arrow.svg">',
      ' <img src="assets/img/right-arrow.svg">',
    ],
    margin: 15,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
        margin: 8,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 6,
      },
      1300: {
        items: 8,
      },
    },
  });
  //logo Slider
  $(".logo-slider").owlCarousel({
    items: 1,
    nav: true,
    dot: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    loop: true,
    navText: [
      '<img src="assets/img/left-arrow.svg">',
      '<img src="assets/img/right-arrow.svg">',
    ],
    margin: 0,
    smartSpeed: 1050,
  });
  // Custom Tab js
  // $('.tab-menu li a').on('click', function() {
  //     var target = $(this).attr('data-rel');
  //     $('.tab-menu li a').removeClass('active');
  //     $(this).addClass('active');
  //     $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
  //     return false;
  // });

  // Popup Video js
  $(".play-yt").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    preloader: true,
  });

  //Gallery popup js
  // $('.gallery-item ').magnificPopup({
  //     type: 'image',
  //     mainClass: 'mfp-with-zoom',
  //     gallery: {
  //         enabled: true
  //     },

  //     zoom: {
  //         enabled: true,

  //         duration: 500, // duration of the effect, in milliseconds
  //         easing: 'ease-in-out', // CSS transition easing function

  //         opener: function(openerElement) {

  //             return openerElement.is('img') ? openerElement : openerElement.find('img');
  //         }
  //     }

  // });
  // Nice select
  $("select").niceSelect();
  // Textarea word Counter
  $("textarea").keyup(function () {
    var characterCount = $(this).val().length,
      current = $("#current"),
      maximum = $("#maximum"),
      theCount = $("#the-count");

    current.text(characterCount);
  });

})(jQuery);
