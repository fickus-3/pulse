$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src = "../img/icons/arrow_left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src = "../img/icons/arrow_right.png"> </button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });