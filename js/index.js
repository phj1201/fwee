//index.js

$(document).ready(function () {

    //con1 마우스 호버시 사진 변환

    // $('.product-card .box img').mouseenter(function (){
    //     $(this).attr('src').replace('.png', '_model.png');
    // }).mouseleave(function (){
    //     $(this).attr('src', $(this).attr('src').replace('_model.png', '.png')); 
    // });

    //con2 모델이미지 자동 fade slide - 제품 이미지 변환
    var autoCall;
    autoCall = setInterval(fadeSlide, 3000);

    $('.viewer').mouseover(function () {
        clearInterval(autoCall);
    }).mouseout(function () {
        autoCall = setInterval(fadeSlide, 3000);
    });

    function fadeSlide() {
        var firstSlide = $('.viewer .slider').first();
        var nextSlide = firstSlide.next();

        nextSlide.hide().addClass('active').fadeIn(800, function () {
            $('.slider li').append(firstSlide);
            firstSlide.removeclass('active');
        });
    }

    //con3 이벤트 호버 시 des 나옴

    $('.con3 .evt-wrap .evt-box').mouseover(function () {
        $('.con3 .evt-wrap .evt-box .des').show();
    }).mouseout(function () {
        $('.con3 .evt-wrap .evt-box .des').hide();
    });

    //con4 릴스 이전/다음 버튼 클릭시 slide

    $(function () {

        //초기
        $('.next-btn .left').click(function () {
            //slide(false);
            slide(0);
        });

        $('.next-btn .right').click(function () {
            //slide(true);
            slide(1);
            change(); //함수 호출
        });

    });

    function slide(direction) {

        if (direction) {
            //before(), after() 적용시
            $('.reels-box .shorts').first().insertAfter($('.reels-box .shorts').last());

        } else {
            //이전 이동 - 맨 뒤의 li를 맨 앞으로 이동
            $('.reels-box .shorts').last().insertBefore($('.reels-box .shorts').first());

        }

    }
});

