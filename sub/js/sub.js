//hamBtn
$(function () {
    var w = $(window).width()
    $(window).resize(function () {
        w = $(window).width();
        if (w > 767) {
            $(".loginBtn").css("display", "block");
        } else if(w < 767) {
            $(".loginBtn").css("display", "block");
        }
    })
   
    var cNum = 0;

    $(".hamBtn").click(function () {
		if ($(this).hasClass("active")) {
			$(".navWrap").stop().animate({
				"left": "-100%"
			}, 500);
			$(".navBg").css("display", "none");
			$(this).removeClass("active")
		} else {
			$(".navWrap").stop().animate({
				"left": 0
			}, 500);
			$(".navBg").css("display", "block");
			$(this).addClass("active")
		}

	})

    $("#nav>li").click(function () {
        $(this).find(".sub").stop().slideToggle();
        $(this).siblings().children(".sub").stop().slideUp();
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");

    })

})
