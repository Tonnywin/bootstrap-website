/**
 * Created by 文朝希 on 2017/6/12.
 */
(function () {
    //导航条
    var banner = $(".banner");
    var banInner = $(".banner-inner");
    var banIndicators =$(".banner-indicators");
    var imgLength = banner.find(".item").length;
    var index = banInner.find(".active").index();
    var isHover = false;
    if($(window).width()>768){
        $(".navbar-collapse").find("ul").children("li").hover(function () {
            $(this).css("background","#723c8e").find(".selebox").finish().slideDown();
        },function () {
            $(this).css("background","none").find(".selebox").finish().slideUp();
        });
    }else{
        $(".navbar-collapse").children("ul").children("li").click(function () {
            $(this).toggleClass("hover").find(".selebox").slideToggle();
        });
    }

    //轮流导播图
    banInner.find(".active").animate({opacity:1});
    banIndicators.find("li").click(function () {
        index = $(this).index();
        imgAnimate();
        dotAnimate();
    });
    banner.find(".left").click(function () {
        index--;
        imgAnimate();
        dotAnimate();
    });
    banner.find(".right").click(function () {
        index++;
        imgAnimate();
        dotAnimate();
    });
    banner.hover(function () {
        isHover = true;
    },function () {
        isHover = false;
    });
    setInterval(function () {
        if(!isHover){
            index++;
            imgAnimate();
            dotAnimate();
        }
    },2000);
    function imgAnimate() {
        if(index < 0){
            index= imgLength - 1;
        }else if(index >imgLength -1){
            index = 0;
        }
        banInner.find(".active").animate({"opacity":0},1000).css("display","none");
        banInner.find(".item").eq(index).css("display","block").animate({"opacity":1},1000);

        banInner.find(".active").removeClass("active");
        banner.find(".item").eq(index).addClass("active");
    }
    function dotAnimate() {
        banIndicators.find(".active").removeClass("active");
        banIndicators.find("li").eq(index).addClass("active");
    }

})();