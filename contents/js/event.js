$(document).ready(function(){

    $('.event').hide();
    $('.event').slice(0,2).show();

    $('.btn-more').on('click',function(evt){

        evt.preventDefault();
        var hBox = $('.event:hidden').length;
        if (hBox === 0) {
            alert('마지막 내용입니다!');
            return false;
        }

        $('.event:hidden').slice(0,2).slideDown();
        
        var offTop = $(this).offset().top;
        $('html, body').animate({
            scrollTop : offTop
        }, 1500);
 
    })

}) //loadmore click()
