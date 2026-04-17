$(function() {
    //Header
    $('header .menu nav li').hover(function(){
        $('header').addClass('focus');
        var objMenu = $(this).find('.depth');
        var objMenuHeight = objMenu.outerHeight();
        objMenu.css('display' , 'flex');
        $('header').stop().animate({'height' : objMenuHeight + 65});
        $('header .util .buttons .drop_list').hide();
        $('header .util .drop-select .option_wrap ').hide();
    },
    function(){
        $('header').removeClass('focus');
        $('header').stop().animate({'height' : 65});
        $(this).find('.depth').css('display' , 'none');
    });
    $('header .menu nav .depth').hover(function(){
        $(this).prev('a').addClass('on');
    },function(){
        $(this).prev('a').removeClass('on');
    });
    //Header >Drop Select
    $('header .drop-select .value').click(function(){
        $(this).toggleClass('focus');
        $(this).next('.option_wrap').stop().slideToggle();
    });
    $('header .drop-select .option_wrap').hover(function(){
        $(this).stop().slideDown();
        $(this).prev('.value').addClass('focus');
    },function(){
        $(this).stop().slideUp();
        $(this).prev('.value').removeClass('focus');
    });
    //Header > Button
    $('header .util button.type_icon').click(function(){
        $(this).next('.drop_list').stop().slideToggle();
    });
    //Content > 최근 본 메뉴
    $('.container .recentMenu > h6').click(function(){
        if($(this).hasClass('close')){
            $(this).removeClass('close');
            $('.pageLayout').removeClass('full');
            $('.container').removeClass('column');
            $(this).next('.list').show();
        }else{
            $(this).addClass('close');
            $('.pageLayout').addClass('full');
            $('.container').addClass('column');
            $(this).next('.list').hide();
        }
    });
    //Content > 조회검색
    $('.typeSearch button.folding').click(function(){
        var thisBox = $(this).parents('.typeSearch')
        var inputFieldObj = thisBox.find('.inputField');
        if($(this).hasClass('close')){
            $(this).removeClass('close');
            inputFieldObj.stop().slideDown();
            thisBox.removeClass('close');
        }else{
            $(this).addClass('close');
            inputFieldObj.stop().slideUp();
            thisBox.addClass('close');
        }
    });
});