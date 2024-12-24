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

    /* 
        $('.product-card .box img').mouseenter (function(){
            $(this).attr('src', '')
        });
    
    */

   
});

