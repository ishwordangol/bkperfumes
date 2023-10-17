// $(window).scroll(function () {
//   var sticky = $("#navbar"),
//     scroll = $(window).scrollTop();

//   if (scroll >= 100)
//     sticky.addClass("navbar-solid");
//   else sticky.removeClass("navbar-solid");
// });

$(".slick-slider").slick({
  autoplay: false,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1280,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1440,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".qtyadd").click(function () {
  var th = $(this).closest(".qtywrap").find(".qtycount");
  th.val(+th.val() + 1);
});
$(".qtysub").click(function () {
  var th = $(this).closest(".qtywrap").find(".qtycount");
  if (th.val() > 1) th.val(+th.val() - 1);
});

$(".expansionlist > a").on("click", function (e) {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).siblings(".expansioncontent").slideUp(200);
    $(".expansionlist > a .iconbox")
      .removeClass("icon-chevron-up")
      .addClass("icon-chevron-down");
  } else {
    $(".expansionlist > a .iconbox")
      .removeClass("icon-chevron-up")
      .addClass("icon-chevron-down");
    $(this).find(".iconbox").removeClass("icon-chevron-down").addClass("icon-chevron-up");
    $(".expansionlist > a").removeClass("active");
    $(this).addClass("active");
    $(".expansioncontent").slideUp(200);
    $(this).siblings(".expansioncontent").slideDown(200);
  }
  e.preventDefault();
});


$("select").niceSelect();

$(".drawer-toggle").click(function () {
  var targetDrawer = $("#" + $(this).data("target"));

  // Close all open drawers except the one being opened
  $(".drawer").not(targetDrawer).removeClass("drawer-open");

  // Toggle the open class for the clicked drawer
  targetDrawer.toggleClass("drawer-open");
});

$('.promocode-button').click(function () {
  // Toggle the visibility of the content div
  $('.promocode-content').toggleClass('hidden');
  // Toggle the icon
  $('.promocode-container').toggleClass('expanded');
});

