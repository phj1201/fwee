//index.js

$(document).ready(function () {
    //header-bottom (drop-down 메뉴)

    $('.header-bottom .gnb li').hover(function () {

        //mouseenter
        $(this).find('.lnb').stop().fadeIn();

    }, function () {

        $('.lnb').stop().fadeOut();

    });



            //함수 최초호출!
            //fadeSlide();

            //2. 3초 간격으로 함수 호출 (자동실행)
            setInterval(fadeSlide, 3000);

            //3. 마우스를 올렸을 때 자동실행 멈춤
            //mouseover, mouseout
            //mouseenter, mouseleave

            var autoCall; //인터벌용 변수
            autoCall = setInterval(fadeSlide, 3000);

            $('.viewer').mouseover(function(){
                //인터벌 제거 - 멈춤
                clearInterval(autoCall);
            }).mouseout(function(){
                //인터벌 재가동
                autoCall = setInterval(fadeSlide,3000)
            }); 


        });

    
        //fadeSlide 함수 만들기
        function fadeSlide() {

            //1번 슬라이드
            var firstSlide = $('.slider li').first();

            //2번 (다음) 슬라이드
            var nextSlide = firstSlide.next();
            nextSlide.hide().addClass('active').fadeIn(800, function () {
                //다음을 위한 준비
                //1번 슬라이드를 맨뒤로 이동
                firstSlide.appendTo('.viewer');
                $('.viewer').append(firstSlide);

                //첫번째 슬라이드의 z-index 제거
                firstSlide.removeClass('active');

            });

        }



});

