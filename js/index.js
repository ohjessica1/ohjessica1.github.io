
$(document).ready(function(){
    $(window).scroll(function(){
        /** console.log($(window).scrollTop()); **/
        let scroll = $(window).scrollTop();
        if(scroll > 300){
            $('.header-area').addClass('active');
            $('.logo').addClass('active');
        }else{
            $('.header-area').removeClass('active');
            $('.logo').removeClass('active');
        }
    });
    var swiper = new Swiper(".firstSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        mousewheel: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".sec4Button .swiper-button-next",
        prevEl: ".sec4Button .swiper-button-prev",
        },
    });
    var swiper = new Swiper(".secondSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    //햄버거버튼
        $('#hamburger').click(function(){
            $('#hamburger').toggleClass('active');
            $('nav').toggleClass('active');
            if($('#hamburger').hasClass('active')){
                $('body').css({'overflow-y':'hidden'});
                console.log('메뉴on');
            }else{
                $('body').css({'overflow-y':'scroll'});
                console.log('메뉴off');
            }
        });
    //스크롤바
        $(window).scroll(function(){
            if($(window).scrollTop() > 500){
                $('.header-area').addClass('active');
            }else{
                $('.header-area').removeClass('active');
            }
        });
});



