$(document).ready(
    function () {
        $(".nav-link").css(
            "color",
            "white"
        );
        $("#sendmail").css("background-color", "gray");
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

$("#sendmail").click(
    function() {
        var msg = $("#mailbody").val();
        
        if(msg.length >= 100) {
            var senderemail = $("#senderemail").val();

            msg = senderemail + " : " + msg;

            if(senderemail == "") {
                senderemail = "lifesamd@gmail.com";
            }

            if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(senderemail)) {
                console.log("Sending...");
                Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "lifesamd@gmail.com",
                    Password : "550d9b36-4a6a-410a-904b-a9f09d708b3d",
                    To : 'dutta.sam.d@gmail.com',
                    From : "lifesamd@gmail.com",
                    Subject : "Message via website.",
                    Body : msg
                });
                console.log("Sent.");

                $('#myModal').modal('show');
                $("#sendmail").attr("disabled", true);
                $("#mailbody").val('');
            } else {
                $('#wrongemail').modal('show');
            }
        }

        return false;  
    }
);

$("#mailbody").on('input',
    function() {
        var message = $(this).val();

        if(message.length < 100) {
            console.log(message.length + " is less than 100");
            $("#charcount").show();
            $("#sendmail").attr("disabled", true);
            $("#sendmail").css("background-color", "gray");
            $("#charcount").text(message.length + " of minimum 100 characters");
        } else {
            $("#charcount").hide();
            $("#sendmail").attr("disabled", false);;
        }
    }
); 