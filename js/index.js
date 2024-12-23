//index.js

//header-bottom (drop-down 메뉴)


$(document).ready(function () {

    $('.header-bottom .gnb li').hover(function () {

        //mouseenter
        $(this).find('.lnb').stop().fadeIn();

    }, function () {

        $('.lnb').stop().fadeOut();

    });

});