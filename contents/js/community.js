$(document).ready(function(){

    $('.box').hide();
    $('.box').slice(0,4).show();

    $('.btn-more').on('click',function(evt){

        evt.preventDefault();
        var hBox = $('.box:hidden').length;
        if (hBox === 0) {
            alert('마지막 내용입니다!');
            return false;
        }

        $('.box:hidden').slice(0,2).slideDown();
        
        var offTop = $(this).offset().top;
        $('html, body').animate({
            scrollTop : offTop
        }, 1600);
 
    })

}) //loadmore click()