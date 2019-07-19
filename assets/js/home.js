$(document).ready(
    function () {
        $(".nav-link").css(
            "color",
            "white"
        );
    }
);

$(window).scroll(
    function () {
        var wScroll = $(document).scrollTop();
        var winHeight = $(window).height();

        var buoypos = document.getElementById("el").getBoundingClientRect();
        

        $(".caption").css(
            "transform", "translate(0px, " + wScroll / 3 + "%)"
        );
        $(".parallax").css(
            "transform",
            "translate(0px, " + -wScroll / 20 + "%)"
        );

        var scrollpercent = (buoypos.top / winHeight) * 100;
        console.log(scrollpercent);
        if (scrollpercent < 9) {
            $(".navbar-brand").css(
                "color",
                "darkslategray"
            );
            $(".nav-link").css(
                "color",
                "darkslategray"
            );
            $(".fas.fa-bars").css(
                "color",
                "darkslategray"
            );
        } else {
            $(".navbar-brand").css(
                "color",
                "white"
            );
            $(".nav-link").css(
                "color",
                "white"
            );
            $(".fas.fa-bars").css(
                "color",
                "white"
            );
        }
    }
);