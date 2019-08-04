// array for select1
//var arr1 = ["Абхазия", "Австралия", "Австрия", "Азербайджан", "Аландские острова"];

var arr1 = [ ];

var arr = []; // array for select2

var startUser = document.getElementById("startUser");
var stopUser = document.getElementById("stopUser");

var tfield = document.getElementById("tfield");
var time = document.getElementById("time");

//var titleStat = document.getElementById("titleStatistics");
var stat = document.getElementById("showStatistics");
var h = document.getElementById("history");
var x = document.getElementById("demo1");
var tf = document.getElementById("attempt");
var tc = document.getElementById("timeCount");
var gc = document.getElementById("graphicCount");
var delay = 10000;
var ran_user, // for Timeout function
        ran_reset,
        inner, cnt = 0;
var ini = 0;
var r;      // random index of 'arr' array
var randomAttemps = [];
var index = -1;
// -------------- for statistics ----------------------
var line = 0; // file statistics.js    table line
var init = 0;  // file statistics.js   set header only one time
var answer;   // set answer user. If equal random result will be 'GOOD' else 'ERROR'
var result;  //  
//--------------- life score errors -------------------------
var attemp0 = document.getElementById("attemp0");
var attemp1 = document.getElementById("attemp1");
var attemp2 = document.getElementById("attemp2");

var life = document.getElementById("lifes");
var score = document.getElementById("score");
var error = document.getElementById("error");
var lifesCnt = 10, scoresCnt = 0, errorsCnt = 0;


function start_user()
{
    // clearAll();

    if (ini === 0)
    {
        timedCount();
    }

    index++;

    ran_user = setTimeout(function()
    {
        r = Math.floor((Math.random() * arr.length));
        x.innerHTML = arr[r];
        // display or not display country name tooltips
        setCountryNameTooltip();
        bindBackgroundImage(x);
        // h.innerHTML += x.innerHTML + "  " + r + "<br>";
        randomAttemps[index] = arr[r];
    }, 50);

    showContent();
}

function stop_user()
{
    clearTimeout(ran_user);
    x.innerHTML = "";
//    h.innerHTML = "";
    tf.value = "";
    stopCount();
    ini = 0;
    // reset time counter
    c = 1;
    tc.innerHTML = "";
    hideContent();
}

function showContent()
{
    x.style.display = "block";
    tfield.style.display = "block";
    time.style.display = "block";
}

function hideContent()
{
    x.style.display = "none";
    tfield.style.display = "none";
    time.style.display = "none";
}

stopUser.disabled = true;

function disabledStartUser()
{
    startUser.disabled = true;
    stopUser.disabled = false;
}

function disabledStopUser()
{
    startUser.disabled = false;
    stopUser.disabled = true;
}

function getVal() {
    return tf.value;
}
function getAnswer()
{
    answer = tf.value;
    return answer.toString();
}
function getResult()
{
    if (getAnswer().match(arr[r]))
        result = "OK";  // OK 
    else
        result = "ERR";  // NOK

    if (nextAttempt == 1) //
        result = "EMPTY";

    return result;
}
//----------------------------------            
function setLifesAndErrors()
{
    if (getVal() != arr[r])
    {

        lifesCnt--;
        life.innerHTML = lifesCnt;

        errorsCnt++;
        error.innerHTML = errorsCnt;

        setTimeout(function() {
            //  life.style.fontSize = "32px"; 
            attemp0.style.background = "orangered";
            // error.style.fontSize = "32px";

            attemp2.style.background = "orangered";
            //  attemp2.style.paddingLeft = "90px";
        }, 10);
        setTimeout(function() {
            life.style.fontSize = "18px";
            attemp0.style.background = "#ccff00";

            error.style.fontSize = "18px";
            attemp2.style.background = "#ccff00";
            // attemp2.style.paddingLeft = "140px";
        }, 500);

        if (lifesCnt == 0)
        {
            stop_user();
            stopCount();
            resetLifesErrorsScores();
            alert("game is finished !!! ");
        }

    }
    else {
        increaseScores();
    }
}
//------------- score -------------            
function increaseScores()
{
    scoresCnt++;
    score.innerHTML = scoresCnt;
    var tt = setTimeout(function() {
        // score.style.fontSize = "32px"; 
        attemp1.style.background = "green";
    }, 10);
    var ttt = setTimeout(function() {
        score.style.fontSize = "18px";
        attemp1.style.background = "#ccff00";
    }, 500);
    //clearTimeout(tt);
}
function resetLifesErrorsScores()
{
    lifesCnt = 5;
    scoresCnt = 0;
    errorsCnt = 0;
    life.innerHTML = lifesCnt;
    score.innerHTML = scoresCnt;
    error.innerHTML = errorsCnt;
}
//------------------------- key 'Enter' ---------------------------------------
function checkEnter()
{
    if (event)
    {
        if (event.keyCode == 13)
        {
            if (getVal() == arr[r])
            {
                //  alert("OK: " + getVal() + "  " + arr[r]); 
                getAnswer();
                getResult();
                myStatistics();// add statistics

                stop_user();
                start_user();

                increaseScores(); // score ++;

                scrollLineStatistics(); // from file: statistics.js
            }
            else
            {
                //  alert("NOK: " + arr[r]);

                getAnswer();
                getResult();
                myStatistics();// add statistics

                stop_user();
                start_user();

                setLifesAndErrors();

                scrollLineStatistics(); // from file: statistics.js
            }
        }
    }
}
// ------------------------------- button NEXT >> ------------------------------
var nextAttempt = 0;

function nextButton()
{
    nextAttempt = 1;

    getAnswer();
    getResult();
    myStatistics();// add statistics

    stop_user();
    start_user();

    nextAttempt = 0;

    scrollLineStatistics(); // from file: statistics.js

    setTimeout(function() {
        attemp0.style.background = "lightgray";
        attemp1.style.background = "lightgray";
        attemp2.style.background = "lightgray";
    }, 10);
    setTimeout(function() {
        life.style.fontSize = "18px";
        attemp0.style.background = "#ccff00";

        score.style.fontSize = "18px";
        attemp1.style.background = "#ccff00";

        error.style.fontSize = "18px";
        attemp2.style.background = "#ccff00";
    }, 500);
}
//-------------------------------- button ENTER --------------------------------
function enterFromButton()
{
    if (getVal() == arr[r])
    {
        // alert("OK: " + getVal() + "  " + arr[r]);

        getAnswer();
        getResult();
        myStatistics();// add statistics

        stop_user();
        start_user();

        increaseScores(); // score ++;

        scrollLineStatistics(); // from file: statistics.js
    }
    else
    {
        //  alert("NOK: " + arr[r]);

        getAnswer();
        getResult();
        myStatistics();// add statistics

        stop_user();
        start_user();

        setLifesAndErrors();

        scrollLineStatistics(); // from file: statistics.js
    }
}
// ------------------------------ TIME counter ---------------------------------
var c = 1;
var t;
var timer_is_on = 0;

function timedCount() {
    gCount[c].style.display = "block";
    tc.innerHTML = c;
    c = c + 1;
    if (c == 12) {
        c = 1;
        stop_user();
        ini++;// block function 'timedCount()' in function 'start_user()'
        start_user();
        resetGraphicTimer();

        // avoid 'undefined' in td 'Random' when time is finished
        randomAttemps[index] = arr[r];
        //  alert(getResult());
        getResult();
        myStatistics(); // add statistics

        setLifesAndErrors();
    }

    t = setTimeout(function() {
        timedCount()
    }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
    c = 0;
    resetGraphicTimer();
}
// 
var gCount = document.getElementsByClassName("gCount");
for (i = 0; i < gCount.length; i++)
{
    gCount[i].style.float = "left";
    gCount[i].style.width = "28px";
    gCount[i].style.height = "28px";
    gCount[i].style.marginLeft = "3px";
    gCount[i].style.background = "orange";
    gCount[i].style.borderRadius = "5px 5px 5px 5px";
    gCount[i].style.display = "none";
}

function resetGraphicTimer()
{
    for (i = 0; i < gCount.length; i++)
    {
        gCount[i].style.display = "none";
    }
}
//-----------------------------Time Helper ------------------------------------
var turnListener = 0;

function addListenerCounter()
{
    if (!turnListener)
    {
        tf.addEventListener("keydown", decreaseGraphicTimeCounter);
        turnListener = 1;
    } else
    {
        tf.removeEventListener("keydown", decreaseGraphicTimeCounter);
        turnListener = 0;
    }
}

function decreaseGraphicTimeCounter()
{
    c--;
    if (c <= 0)
        c = 0;
    gCount[c].style.display = "none";

}
//----------------------------- Tooltip Country --------------------------------
var tooltip = false;
function setCountryNameTooltip()
{
    if(tooltip) {
        x.style.fontSize = "22px";
    }
    else {
        x.style.fontSize = "0px";
    }
}

function allow_block_Tooltip()
{
    if(tooltip) 
        tooltip = false;
    else 
        tooltip = true;
    
}
//----------------------------- Zoom -------------------------------------------
var currentZoom = 1.0;
var fsize = 26;

$(document).ready(function() {
    $('#plus').click(
            function() {
                $('#demo1').animate({'zoom': currentZoom += .1,
                    'fontSize': '+=5px'
                            // 'marginLeft':  '-=10px' 
                }, 'slow');
            })
    $('#minus').click(
            function() {
                $('#demo1').animate({'zoom': currentZoom -= .1,
                    'fontSize': '-=5px'
                }, 'slow');
            })
    $('#reset').click(
            function() {
                currentZoom = 1.0
                $('#demo1').animate({'zoom': 1,
                    'fontSize': '=26px'
                }, 'slow');
            })
});
// --------------------------- STATISTICS ---------------------------------------
var show_stat = 0;
function showAndHideStatistics()
{
    if (!show_stat)
    {
        stat.style.display = "block";
        show_stat = 1;
    } else
    {
        stat.style.display = "none";
        show_stat = 0;
    }
}

function animationCloseOpen()
{
    if (!show_stat)
    {
        firstClick();
        show_stat = 1;
    } else
    {
        secondClick();
        show_stat = 0;
    }
}

function createStatistics()
{
    showAndHideStatistics();
}
