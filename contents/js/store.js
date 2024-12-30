/* 

.left-box  .img-box  왼 > 오 펼쳐짐
.left-box .des 서서히 나타나기 (delay, fadeIn)

.right-box .img-box 오 > 왼 펼쳐짐
.right-box .des 서서히 나타나기

스크롤시 내리면서 내용이 나타나는 효과

*/

    $(document).ready(function () {

        $('.con2 .left-box').find('.img-box').animate({
            width:'50%'
        }, 800, function (){
            $('.left-box').find('.des').fadeIn(600);
        });

        $('.con2 .right-box').find('.img-box').animate({
            width:'50%'
        }, 800, function (){
            $('.right-box').find('.des').fadeIn(600);
        });

    });
    