$(document).ready(function(){

    $('.card').hide();
    $('.card').slice(0,6).show();

    $('.btn-more').on('click',function(evt){

        evt.preventDefault();
        var hBox = $('.card:hidden').length;
        if (hBox === 0) {
            alert('마지막 내용입니다!');
            return false;
        }

        $('.card:hidden').slice(0,3).slideDown();
        
        var offTop = $(this).offset().top;
        $('html, body').animate({
            scrollTop : offTop
        }, 1600);
 
    })

}) //loadmore click()