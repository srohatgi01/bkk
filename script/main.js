// To toggle side menu
const iconMenu = document.querySelector(".menu__toggler");
const menu = document.querySelector(".menu");
const toCloseLink1 = document.querySelector(".toCloseLink1");
const toCloseLink2 = document.querySelector(".toCloseLink2");
const toCloseLink3 = document.querySelector(".toCloseLink3");
const toCloseLink4 = document.querySelector(".toCloseLink4");
const toCloseLink5 = document.querySelector(".toCloseLink5");
const toCloseLink6 = document.querySelector(".toCloseLink6");
const toCloseLink7 = document.querySelector(".toCloseLink7");

iconMenu.addEventListener("click", function() {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});

toCloseLink1.addEventListener("click", function() {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

toCloseLink2.addEventListener("click", function() {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

toCloseLink3.addEventListener("click", function() {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

toCloseLink4.addEventListener("click", function() {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

toCloseLink5.addEventListener("click", function() {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

toCloseLink6.addEventListener("click", function() {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

toCloseLink7.addEventListener("click", function() {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
});
// AOS Initialize
AOS.init();

//Scroll Reveal
ScrollReveal().reveal(".aboutUs");
ScrollReveal().reveal(".gandhi", { delay: 300 });
ScrollReveal().reveal(".quoteEng", { delay: 500 });
ScrollReveal().reveal(".quoteHin", { delay: 500 });
ScrollReveal().reveal(".cols");

//Scroll Spy
const navbar = document.querySelector(".menu");
const logo = document.querySelector(".fixed-center-logo");
const downarrow1 = document.querySelector(".downArrow");
const scrollspy = new VanillaScrollspy(navbar);
const scrollspy2 = new VanillaScrollspy(logo);
const scrollspy3 = new VanillaScrollspy(downarrow1);
scrollspy.init();
scrollspy2.init();
scrollspy3.init();

// To change Header Colors
$(document).ready(function() {
  $(window).scroll(function() {
    var light_pos = $("#aboutUs").offset().top;
    var light_height = $("#aboutUs").height();
    var light_pos1 = $("#gallery").offset().top;
    var light_height1 = $("#gallery").height();
    var menu_pos = $(".color-logo").offset().top;
    //var menu_height = $(".color-logo").height();
    var menu_pos = $(".menuButton-wrapper").offset().top;
    //var menu_height = $(".menuButton-wrapper").height();
    var menu_pos = $(".menuButton").offset().top;
    //var menu_height = $(".menuButton").height();
    var menu_pos = $(".menuButton").offset().top;
    //var menu_height = $(".menuButton").height();
    var scroll = $(window).scrollTop();
    console.log("light", light_pos);
    console.log("menu", menu_pos);
    console.log("scroll", scroll);

    if (
      (menu_pos > light_pos && menu_pos < light_pos + light_height) ||
      (menu_pos > light_pos1 && menu_pos < light_pos1 + light_height1)
    ) {
      $(".color-logo").addClass("menu_black");
      $(".menuButton-wrapper").addClass("black-border-color");
      $(".menuButton").addClass("black-border-color");
      $(".serving-dish").addClass("black-dish");
      $(".color-logo").removeClass("menu_white");
      $(".menuButton-wrapper").removeClass("white-border-color");
      $(".menuButton").removeClass("white-border-color");
      $(".serving-dish").removeClass("white-dish");
    } else {
      $(".color-logo").removeClass("menu_black");
      $(".color-logo").addClass("menu_white");
      $(".menuButton-wrapper").addClass("white-border-color");
      $(".menuButton").addClass("white-border-color");
      $(".menuButton-wrapper").removeClass("black-border-color");
      $(".menuButton").removeClass("black-border-color");
      $(".serving-dish").removeClass("black-dish");
      $(".serving-dish").addClass("white-dish");
    }
  });
});

// Slick
$(document).ready(function() {
  $(".tm-body").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    focusOnSelect: true,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px"
        }
      }
    ]
  });
});

//Actual Menu size FancyBox

var width_of_viewport = $("#banner").width();

if (width_of_viewport <= "600") {
  $("#ex1").css({ height: "500px" });
  $("#franchise").css({ height: "450px" });
  $("#add-roshanpura").css({ height: "auto" });
}
