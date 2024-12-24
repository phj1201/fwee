//index.js

$(document).ready(function () {
    //header-bottom (drop-down 메뉴)

    $('.header-bottom .gnb li').hover(function () {

        //mouseenter
        $(this).find('.lnb').stop().fadeIn();

    }, function () {

        $('.lnb').stop().fadeOut();

    });

    //mouseenter/leave 사진이미지 변환

    //hover한 부분의 img 파일 찾기
    //hover한 부분의 img 주소값 src 가져오기

    /* $('.product-card .box').mouseenter(function () {
        $(this).find('img').attr('src', 'img' + '_model.png').stop();
    }).mouseleave(function () {
        $(this).find('img').attr('src', 'black');
    }); */

});

