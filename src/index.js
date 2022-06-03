import("./assets/css/style-starter.css");
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import("./assets/js/modernizr.custom.js");
import "slick-carousel";
import $ from "jquery";
import "bootstrap";

$(document).ready(function () {
  $(".slick-slider-home").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
  });
  $(".slick-testimonial").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    centerMode: true,
    arrows: false,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          autoplay: false,
          pauseOnHover: true,
          pauseOnFocus: true,
          centerMode: true,
          arrows: false,
          // centerPadding: "40px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          autoplay: false,
          pauseOnHover: true,
          pauseOnFocus: true,
          centerMode: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

          dots: false,
          autoplay: false,
          pauseOnHover: true,
          pauseOnFocus: true,
          centerMode: true,
          arrows: false,

          centerPadding: "40px",

          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".slick-testimonial").on(
    "beforeChange",
    function (event, slick, direction) {
      $("#v1").get(0).pause();
      $("#v2").get(0).pause();
      $("#v3").get(0).pause();
      $("#v4").get(0).pause();
      $("#v5").get(0).pause();
    }
  );
});

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 80) {
    $("#site-header").addClass("nav-fixed");
  } else {
    $("#site-header").removeClass("nav-fixed");
  }
});

//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
  $("header").toggleClass("active");
});
$(document).on("ready", function () {
  if ($(window).width() > 991) {
    $("header").removeClass("active");
  }
  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $("header").removeClass("active");
    }
  });
});

$(function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("noscroll");
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
$("#movetop").click(function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
