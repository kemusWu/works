// JavaScript Document

// TOP按鈕滑動效果
$(function(){
	
	$(".to_top").click(function(){

		$("html,body").animate({scrollTop:0},900);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});

// 離開頂端頁才出現TOP按鈕
 $(".to_top").fadeOut();
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".page1-about").offset().top){
            $(".to_top").fadeIn();
        }else{
            $(".to_top").fadeOut();
        }
    });