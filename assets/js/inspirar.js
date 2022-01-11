$(document).ready(function() {
  $('#c1, #c0').slick({
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    asNavFor: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "20px",
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#c2, #c3').slick({
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "20px",
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
