$('.slider').slick({ //{}を入れる
    autoplay: true,
    autoplaySpeed: 100, //「オプション名: 値」の形式で書く
	  infinite: true,　　　　//スライドのループ
	  pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow sp_only">＜</button>',
    nextArrow: '<button class="slide-arrow next-arrow sp_only">＞</button>',
    adaptiveHeight:true,
    swipe: true,
    verticalSwiping: false,
    speed: 1000
  });