

//$("#statist").click(function()   // button in event_tester("","");

function  firstClick()
{
    $("#showStatistics").animate({
        opacity: 1,
        width: "400px",
        height: "400px"
    }, 2000, function() {
        // Animation complete.
        $("#showStatistics").animate({
            opacity: 1
        }, 1000);
    });
}


function  secondClick()
{
    $("#showStatistics").animate({
        opacity: 0,
        width: "0px",
        height: "0px"
    }
    , 2000, function() {
        // Animation complete.
        $("#showStatistics").animate({
            // opacity: 0
//            width: "toggle",
//            height: "toggle"
        }, 1000);
    }
    );
}

//----------------------- BUTTON: 'Show All Pages' -----------------------------
// BUTTON: 'Show All Pages' file: showAllpages.js
function  firstClick_ShowAllPages()
{
    $("#div_showAllPages").animate({
        opacity: 1,
        top: "310px"
    }, 500, function() {
        // Animation complete.
        $("#div_showAllPages").animate({}, 1000);
    });

    $("#div_AllButtonPages").animate({
        opacity: 1,
        top: "350px"
    }, 500, function() {
        // Animation complete.
        $("#div_AllButtonPages").animate({}, 1000);
    });
}

// BUTTON: 'Show All Pages' file: showAllpages.js
function  secondClick_ShowAllPages()
{
    $("#div_showAllPages").animate({
        opacity: 1,
        top: "350px"
    }
    , 500, function() {
        // Animation complete.
        $("#div_showAllPages").animate({}, 1000);
    }
    );

    $("#div_AllButtonPages").animate({
        opacity: 1,
        top: "390px"
    }, 500, function() {
        // Animation complete.
        $("#div_AllButtonPages").animate({}, 1000);
    });
}

// 
function shh()
{
    
    // decrease height of statisctics
    $("#showStatistics").animate({
        height: "400px"
    }, 1000, function() {
        // Animation complete.
        $("#showStatistics").animate({ }, 1000);
    });
    
    pages.style.display = "inline";
    pages.style.left = "-250px";
     
    $("#pages_id").animate({
        //opacity: 1
        left: "1px"
    }, 2000, function() {
        // Animation complete.
        $("#pages_id").animate({}, 1000);
    });
    
}

function shh1()
{
    $("#showStatistics").animate({
        height: "500px"
    }, 1000, function() {
        // Animation complete.
        $("#showStatistics").animate({ }, 1000);
    });
}

//----------------------- for file statisticsMenu.js ---------------------------

function animateBody()
{
     $("#transparentDiv").animate({
        opacity: 0.2,
        backgroundColor: '#400101'
    }, 3000, function() {
        // Animation complete.
        $("#transparentDiv").animate({ }, 1000);
    });
}

function notAnimateBody()
{
     $("#transparentDiv").animate({
        opacity: 1,
        backgroundColor: '#400101'
    }, 2200, function() {
        // Animation complete.
        $("#transparentDiv").animate({ }, 1000);
    });
}

// move statisticsMenu : statisticsMenu.js
function opacityStatMenu()
{
    setPositionElementInCenter(div_StatisticMenu);
    
     $("#div_statMenu").animate({
       //top: setPositionElementInCenter(div_StatisticMenu).y
         opacity: 1
    }, 2000, function() {
        // Animation complete.
        $("#div_statMenu").animate({ }, 1000);
    });
}

// move statisticsMenu from center browser : statisticsMenu.js
function moveStatMenuToCenter()
{
     $("#div_statMenu").animate({
       //top: setPositionElementInCenter(div_StatisticMenu).y
         top: "-200px"
    }, 2000, function() {
        // Animation complete.
        $("#div_statMenu").animate({
         opacity: 0
    }, 1000);
    });
    
    //div_StatisticMenu.style.opacity = 0;
}

//------------------------------ button 'MENU' ---------------------------------
function firstClick_mainMenu()
{
     $("#Menu").animate({
         left: "0px"
    }, 2000, function() {
        // Animation complete.
        $("#Menu").animate({ }, 1000);
    });
}

function secondClick_mainMenu()
{
     $("#Menu").animate({
         left: "-200px"
    }, 2000, function() {
        // Animation complete.
        $("#Menu").animate({ }, 1000);
    });
}