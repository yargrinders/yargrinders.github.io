function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
ibg();

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__menu').click(function(){
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(document).ready(function(){
  $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight:false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:1500,
      responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:false
            }
          }
      ]
  });
});