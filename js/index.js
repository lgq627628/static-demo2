$(function(){
	$(".top_right ul li a").hover(function(){
		var width=$(this).width();
		var left=$(this).position().left;
		$(this).css("color","white");
		$(".top_right .bai a").css("color","#c2d5eb");
		$(".border").stop(true).animate({width:width+28+"px",left:left-82+"px"},300)
	},function(){
		$(this).css("color","#c2d5eb");
		$(".top_right .bai a").css("color","#fff");
		$(".border").stop(true).animate({width:"50px",left:"-10px"},300)
	});
	var index=0;
	var height="";
	var time=new Date();
	$(".center_left ul li").click(function(){
			$(this).addClass("on").siblings("li").removeClass("on");
			height=$(window).height();
			index=$(this).index();
			$("html,body").animate({scrollTop:index*height},500);
	})
	$(document).mousewheel(function(){
		if(new Date()-time>400){
			time=new Date();
			var gdt=arguments[1];
			if(gdt<0){
				index++;
				if(index>3)index=0;
			}else{
				index--;
				if(index<0)index=3;
			}
			height=$(window).height();
			$(".center_left ul li").eq(index).addClass("on").siblings("li").removeClass("on");
			$("html,body").animate({scrollTop:index*height},450);
		}
	})
})
