$(document).ready(
    function () {
        $(".nav-link").css(
            "color",
            "white"
        );
    }
);



var throttledparallax = _.throttle(() => { 
    parallax();
}, 10);

function parallax() {

    console.log("In parallax");
    var wScroll = $(document).scrollTop();
    var winHeight = $(window).height();

    var buoypos = document.getElementById("el").getBoundingClientRect();
    
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    $(".caption").css(
        "transform", "translate(0px, " + wScroll / 3 + "%)"
    );
    $(".parallax").css(
        "transform",
        "translate(0px, " + -wScroll / 20 + "%)"
    );

    var scrollpercent = (buoypos.top / winHeight) * 100;

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
        $("#nav").addClass("shrink");
        $(".progress-container").css(
                "display",
                "block"
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
        $("#nav").removeClass("shrink");
        $(".progress-container").css(
            "display",
            "none"
        );
    }
}

window.addEventListener('scroll', throttledparallax);