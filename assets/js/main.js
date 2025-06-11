/* Mobile Menu */
$(document).ready(function () {
  $("#menu-open").click(function () {
    $(".mobile-menu").toggleClass("open");
    $(".body-overlay").toggleClass("open");
    $("body").toggleClass("no-scroll"); // Toggle body scroll
  });

  $("#menu-close").click(function () {
    $(".mobile-menu").toggleClass("open");
    $(".body-overlay").toggleClass("open");
    $("body").toggleClass("no-scroll"); // Toggle body scroll
  });

  // Close menu when overlay is clicked
  $(".body-overlay").click(function () {
    $(".menu-icon").removeClass("open");
    $(".mobile-menu").removeClass("open");
    $(this).removeClass("open");
    $("body").removeClass("no-scroll"); // Re-enable body scroll
  });
});

/* Fix header to top */
$(document).ready(function () {
  const header = $("header");
  const headerHeight = header.outerHeight();

  $(window).scroll(function () {
    if ($(window).scrollTop() > headerHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
});

/* Home Page Slider */
$(document).ready(function () {
  const swiper = new Swiper(".home-swiper", {
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "slide",
  });
});
