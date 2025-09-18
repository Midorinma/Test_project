$(document).ready(function(){
    $('.images_slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: true,
         dots:true,
         accessibility: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      
    });
  });
  $(document).ready(function(){
    $('.slider_image_instagram').slick({
       slidesToShow: 5,
        arrows:true,
        infinite:false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
         responsive:[
           {
               breakpoint: 1024,
              settings: {
               slidesToShow: 4,
                 slidesToScroll: 4,
                infinite: false,
                 dots: false,
                 arrows:false
              }
             },
             {
               breakpoint: 767,
              settings: {
               slidesToShow: 2,
                 slidesToScroll: 2,
                infinite: false,
                 dots: false,
                 arrows:false
              }
             }
          ]
    });
  });
function showBtnid2(){
  document.getElementById('id02').style.display='block';
}
function showBtnid1(){
  document.getElementById('id01').style.display='block';
}