$(function () {
    var sNum = 0;
    var mainIcon = $(".mainIcon>li");

    mainIcon.on("click", function () {
        sNum = $(this).index();
        moveBanner();
    })

    function moveBanner() {
        mainIcon.eq(sNum).addClass("active").siblings().removeClass("active");
        $(".banner").stop().animate({
            "margin-left": -sNum * 100 + "%"
        }, 1000)

    }
    var w = $(window).width();
    $(window).resize(function () {
        w = $(window).width();
        if (w >= 767) {
            $(".loginBtn").css("display", "none");
        } else if (w < 767) {
            $(".loginBtn").css("display", "block");
        }
    })

    //hamBtn
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

    });
    $("#nav>li").click(function () {
        $(this).find(".sub").stop().slideToggle();
        $(this).siblings().children(".sub").stop().slideUp();
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");

    });

    $(".prBox > li").click(function () {
        var sNum = $(this).index();
        $(".prBoxSub >li").eq(sNum).addClass("active").siblings().removeClass("active");
    });

    //visual
    var banner = $(".banner>li");
    //버튼 저장할 변수
    var mainIcon = $(".mainIcon>li");
    //현재 보여지는 배너가 몇번째 배너인지를 체크해줄 변수
    var cNum = 0;
    //버튼을 클릭하면 해당하는 배너가 오른쪽으로 나오기
    var sNum = 0;

    mainIcon.on("click", function () {
        //선택된 버튼이 몇번째 버튼인지를 체크할 변수
        sNum = $(this).index();

        if (cNum == sNum) return; //return 이벤트된 동작을 안하겠다. 아래 스크립트를 실행하지 않고 끝남

        //선택된 버튼에 색상 변경 active class
        mainIcon.removeClass("active");
        $(this).addClass("active");

        //        $(this).addClass("active").siblings().removeClass("active");
        //현재 화면에서 보이는 배너는 왼쪽으로 나가기(-100%로 나가야되는거는 현재화면이여야한다)
        var prevBanner = banner.eq(cNum);
        prevBanner.stop().animate({
            "left": "-100%"
        }, 500)

        //선택된 버튼에 해당하는 배너가 오른쪽에서 화면으로 나오도록
        var nextBanner = banner.eq(sNum);
        nextBanner.css("left", "100%").stop().animate({
            "left": 0
        }, 500)

        //현재 보여지는 화면의 순서를 변경하기
        cNum = sNum;
    })


})
