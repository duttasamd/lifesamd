var throttledparallax = _.throttle(() => { 
    parallax();
}, 1);

var isnavsolid = false;
var iscaptionblack = false;


function parallax() {

    console.log("In parallax");
    var wScroll = $(document).scrollTop();
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / winHeight;

    console.log(scrollPercent);

    $(".caption").css(
        "transform",
        "translateY(" + -scrollPercent * 50 + "vh)"
    );

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    if (scrollPercent > 0.30) {
        if(!iscaptionblack) {
            $(".caption").css(
                "color",
                "black"
            );
            iscaptionblack = true;
        }

        if(scrollPercent > 0.40 && !isnavsolid) {
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
            isnavsolid = true;
            $(".progress-container").css(
                "display",
                "block"
            );
        }
        
    } 
    if(scrollPercent < 0.40) {
        if(scrollPercent < 0.30 && iscaptionblack) {
            $(".caption").css(
                "color",
                "white"
            );
            iscaptionblack = false;
        }

        if(isnavsolid) {
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
            isnavsolid = false;
            $(".progress-container").css(
                "display",
                "none"
            );
        }
    }
}

window.addEventListener('scroll', throttledparallax);