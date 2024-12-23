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
    
    onmouseover="this.src='img/obsession_pink_model.png';"
    onmouseout="this.src='img/fwee_obsession_pink.png';" alt="퓌 옵세션 핑크틴트">

    */

});

