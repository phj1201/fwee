//common.js

$(document).ready(function (){
    $('.header-bottom .gnb li').hover(function () {
        //mouseenter
        $(this).find('.lnb').stop().fadeIn();
    }, function () {
        $('.lnb').stop().fadeOut();
    });
});