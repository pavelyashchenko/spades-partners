 // Fixed header
const fixedHeader = () => {
	$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $(".header__desktop, .header__mobile").addClass("is-fixed")
    } else {
      $(".header__desktop, .header__mobile").removeClass("is-fixed")
    }
  });
};

// Burger menu mobile
const mobileMenu = () => {
	$(".header__burger-button .plates").on("click", function() {
    $(".header__mobile").toggleClass("is-active");
    $("body").toggleClass("scroll-block");
  });
};

(function () {
  // wow
	new WOW().init();

  // iziModal
  $(".modal").iziModal({
    transitionIn: 'fadeInDown',
    bodyOverflow: true
  });

  fixedHeader();
  mobileMenu();
})();