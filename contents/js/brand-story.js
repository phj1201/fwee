$(function (){
    $('.cap1').mouseover(function (){
        $('.cap1 .img1').show().fadeIn()
    }).mouseout(function (){
        $('.cap1 .img1').hide().fadeOut()
    });

    $('.cap2').mouseover(function (){
        $('.cap2 .img2').show().fadeIn()
    }).mouseout(function (){
        $('.cap2 .img2').hide().fadeOut()
    });

    $('.cap3').mouseover(function (){
        $('.cap3 .img3').show().fadeIn()
    }).mouseout(function (){
        $('.cap3 .img3').hide().fadeOut()
    });
});
