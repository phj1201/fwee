$(function (){
    
    $('.card-box').mouseover(function (){
        $('.card-box img').attr('src', '../contents/img/brand/brandid_con1_aft.jpg').show().fadeIn();
    }).mouseout(function (){
        $('.card-box img').attr('src', '../contents/img/brand/brandid_con1_bfe.jpg').fadeOut()
    });
});