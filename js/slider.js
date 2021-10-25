$(function(){
  $('.slider').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 10000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 3, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1, //画面幅767px以下でスライド1枚表示
          autoplay: true,
          autoplaySpeed: 4000, //「オプション名: 値」の形式で書く
          infinite: true,　　　　//スライドのループ
          pauseOnHover: false,
          arrows: true,
          prevArrow: '<button class="slide-arrow prev-arrow">＜</button>',
          nextArrow: '<button class="slide-arrow next-arrow">＞</button>',
          adaptiveHeight:true,
          swipe: true,
          verticalSwiping: false,
          speed: 1000
        }
      }
    ]
  });
});