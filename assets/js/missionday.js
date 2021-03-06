// MISSION DAY JS
//
// by geryy
// <3 besmurf.de
//---------------------


$(document).ready(function() {

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    $('.lang-dropdown a').on('click', function (e) {
        e.preventDefault();
        setCookie('lang', $(this).data('lang'));
        window.location.reload();
    });

    // Mission List Script

	$('#mName li').on('mouseenter mouseleave', function (e) {
        var curClass = $(this).attr("class"); //take class
        if (e.type == "mouseenter") {
            $("#" + curClass).addClass("active"); //use class name to get the mission id in second list
        } else {
            $("#" + curClass).removeClass("active");
        }
    });

    $('.mission-badge').on('mouseenter mouseleave', function (e) {
        var curClass = $(this).attr("id"); //take class
        if (e.type == "mouseenter") {
            $("." + curClass).addClass("on"); //use class name to get the mission id in second list
        } else {
            $("." + curClass).removeClass("on");
        }
    });

}); // end ready
