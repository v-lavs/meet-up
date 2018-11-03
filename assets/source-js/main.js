jQuery(document).ready(function () {

  //mob menu
  var nav = jQuery ('.header-menu');
  jQuery('.btn-burger').click(function (e) {
    e.preventDefault();
    nav.addClass('open');
  });

  jQuery('.btn-close').click(function (e) {
    e.preventDefault();
    nav.removeClass('open');
  });

//coutdawn

  var countDownDate = new Date("Feb 19, 2019 23:07:05").getTime();

  var daysTag = document.getElementById("days");
  var hoursTag = document.getElementById("hours");
  var minutesTag = document.getElementById("minutes");
  var secondsTag = document.getElementById("seconds");

  var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysTag.innerHTML = days;
    hoursTag.innerHTML = hours;
    minutesTag.innerHTML = minutes;
    secondsTag.innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);

  //accordeon
  jQuery('.panel-heading').click(function (e) {
    e.preventDefault();
    jQuery(this).toggleClass('open').next().slideToggle();
  });

  //header scroll
  var scrolled;
  window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 100){
      jQuery(".header-site").css({"background": "#373737"})
    }
    if(100 > scrolled){
      jQuery(".header-site").css({"background": "transparent"})
    }
  };

//  scrolling
  jQuery("#menu").on("click","a", function (e) {
    e.preventDefault();
    var id  = jQuery(this).attr('href'),
      top = jQuery(id).offset().top;
    jQuery('body,html').animate({scrollTop: top}, 3000);
  });

});



