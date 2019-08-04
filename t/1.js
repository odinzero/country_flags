var active = true;
var zalicz = false;
var s = false;
setTimeout("init()", 8000);
function include(file) {
    var head = document.getElementsByTagName('head').item(0);
    var old = document.getElementById('lastLoadedCmds');
    if (old)
        head.removeChild(old);
    script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    script.id = 'lastLoadedCmds';
    void(head.appendChild(script));
}
function init() {
    if (s == false)
    {
        s = true;
        var progress = document.getElementById('progress');
        var progressBar = document.getElementById('progressBar');
        start_timer(progress, progressBar);
    }
}
function start_timer(progress, progressBar) {
    var wf = 0;
    var wo = 0;
    var lwf = 1;
    var t = 0;
    var e = t;
    var handle = setInterval(function() {
        var w = window;
        var d = document;
        if ($.browser.opera) {
            var opversion = window.opera.version();
            if (opversion < 15) {
                lwf = 1;
            } else {
                $(w).focus(function() {
                    wo = 1
                }).blur(function() {
                    wo = 0
                });
                if (wo == 0)
                    $(d).focus(function() {
                        wo = 1
                    }).blur(function() {
                        wo = 0
                    });
                lwf = ((typeof w.hasFocus != 'undefined' ? w.hasFocus() : wo) ? 1 : 0);
            }
        } else {
            lwf = ((typeof d.hasFocus != 'undefined' ? d.hasFocus() : wf) ? 1 : 0);
        }
        if (window.active && lwf == 1) {
            if (t == waits) {
                zalicz = true;
                clearInterval(handle);
                remove_bar();
            } else {
                show_bar(progressBar);
                t += 1;
                e = 282 / waits;
                add_percentage(progress, e, t);
            }
        }
    }, 1000);
}
function show_bar(progressBar) {
    progressBar.style.display = "block";
    document.getElementById('timer_l').style.display = "block";
    document.getElementById('opis_timer').style.display = "block";
}
function remove_bar() {
    progressBar.style.display = "none";
    document.getElementById('captcha').style.display = "block";
    document.getElementById('timer_sukces').style.display = "none";
    document.getElementById('timer_l').style.display = "none";
    document.getElementById('opis_timer').style.display = "none";
}
function add_percentage(progress, size, sec) {
    progress.style.background = "url(lib/bg_cover.gif)";
    progress.style.left = Math.round(size * sec) + "px";
    progress.innerHTML = Math.round((100 / waits) * sec, 2) + "%";
    document.getElementById('timer_l').innerHTML = waits - sec;
}