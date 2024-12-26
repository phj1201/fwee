//index.js

$(document).ready(function () {

    //con1 마우스 호버시 사진 변환

    $('.product-card .box').mouseenter(function (){
        $(this).find('img').attr('src', )
    }).mouseleave(function (){
        $(this).find('img').attr('src', )
    });

    //con2 모델이미지 자동 fade slide - 제품 이미지 변환
        var autoCall;
        autoCall = setInterval(fadeSlide,3000);

        $('.viewer').mouseover(function(){
            clearInterval(autoCall);
        }).mouseout(function(){
            autoCall = setInterval(fadeSlide, 3000);
        });

        function fadeSlide (){
            var firstSlide = $('.viewer .slide').first();
            var nextSlide = firstSlide. next();

            nextSlide.hide().addClass('active').fadeIn(800, function (){
                $('.viewer').append(firstSlide);
                firstSlide.removeclass('active');
            });
        }

    //con3 이벤트 더보기 버튼 클릭시 - event.html로 이동

        $('.look-box .txt-more').click(function () {
            $('.look-box .txt-more a')
        });

    //con4 릴스 이전/다음 버튼 클릭시 slide

        $('.reels-box .shorts').
});

