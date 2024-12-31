/* 

.left-box  .img-box  왼 > 오 펼쳐짐
.left-box .des 서서히 나타나기 (delay, fadeIn)

.right-box .img-box 오 > 왼 펼쳐짐
.right-box .des 서서히 나타나기

스크롤시 내리면서 내용이 나타나는 효과

*/

$ (function () {

    var Rbox = $('.right-box');
    var Lbox = $('.left-box');

    Rbox.find('.img-box').animate({
       width: '640px'
    }, 800, function () {
        Rbox.find('.des').fadeIn(600);
    }); 

    Lbox.find('.img-box').animate({
        //width: '50%'
       width: '640px'
    }, 800, function () {
        Lbox.find('.des').fadeIn(600);
    }); 

});

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log(scTop);

    var winHeight = $(this).height();
    console.log('브라우저 화면의 높이: ' + winHeight);

    var gap = Math.ceil(winHeight * 0.9);
    console.log('기준간격: ' + gap);

    //3번 카드
    var box3pos = $('.last').offset().top - gap;
    console.log('3번 박스 등장 기준값: ' + box3pos);

    if (scTop > box3pos) {
        $('.last').find('.img-box').animate({
            width: '640px'
        }, 800, function () {
            $(this).next().fadeIn(600);
        });
    }

});
