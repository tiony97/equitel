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

/* Pay with equity tabs */
$(function () {
  $("#pay-tabs .tab-link").on("click", function () {
    const tabId = $(this).data("tab");

    // Change active tab text styling
    $("#pay-tabs .tab-link").removeClass("active");
    $(this).addClass("active");

    // Smooth transition between contents
    $("#pay-tabs .tab-content.active").fadeOut(200, function () {
      $(this).removeClass("active");
      const newContent = $("#" + tabId);
      newContent.fadeIn(300).addClass("active");
    });
  });
});

/*Eazzy Loans Tabs */
$(document).ready(function () {
  $(".loan-actions .btn").on("click", function () {
    // Handle button styles
    $(".loan-actions .btn").removeClass("active primary").addClass("outline");
    $(this).addClass("active primary").removeClass("outline");

    // Handle tab content
    const targetTab = "#tab-" + $(this).data("tab");
    $(".loan-steps").hide(); // Hide all
    $(targetTab).fadeIn(); // Show selected
  });
});

/* PesaLinkchange */
$(document).ready(function () {
  $(".pesalink-actions .btn").on("click", function () {
    // Update button styles
    $(".pesalink-actions .btn")
      .removeClass("active primary")
      .addClass("outline");
    $(this).addClass("active primary").removeClass("outline");

    // Show the correct tab
    const target = "#tab-" + $(this).data("tab");
    $(".pesalink-steps").hide();
    $(target).fadeIn();
  });
});
