
var sMenu = document.getElementById("statMenu");
var div_StatisticMenu = null; // DIV for statistics 'Menu' BUTTTON
var showAndHide_menu = 0; // 1 and 0
var initMenu = 0;  // set menu only one time
var div_pageStatistics, div_graphStatistics, div_lineStatistics;
var allow_pageStat = true, allow_graphStat = false, allow_lineStat = false;

function createDivForStatistics( )
{
    div_StatisticMenu = document.createElement("DIV");
    div_StatisticMenu.style.position = "absolute";
    //div_StatisticMenu.style.left = "1px";
    div_StatisticMenu.style.width = "390px";
    div_StatisticMenu.style.height = "140px";
    setPositionElementInCenter(div_StatisticMenu);
    // div_StatisticMenu.style.top = "-100px";
    div_StatisticMenu.style.fontFamily = "Arial";
    div_StatisticMenu.style.background = "#66ff66";
    div_StatisticMenu.style.border = "2px solid #ffccff";
    div_StatisticMenu.style.borderRadius = "4px 4px";
    div_StatisticMenu.style.boxShadow = "0 0 10px #000000";
    div_StatisticMenu.setAttribute("id", "div_statMenu");

    var name1 = document.createTextNode("Lines");
    var name2 = document.createTextNode("Pages");
    var name3 = document.createTextNode("Graphics");

    div_lineStatistics = createDiv_(div_lineStatistics, div_StatisticMenu, 1);
    div_pageStatistics = createDiv_(div_pageStatistics, div_StatisticMenu, 2);
    div_graphStatistics = createDiv_(div_graphStatistics, div_StatisticMenu, 3);

    div_lineStatistics.appendChild(name1);
    div_pageStatistics.appendChild(name2);
    div_graphStatistics.appendChild(name3);

    eventClick(div_lineStatistics, 1);
    eventClick(div_pageStatistics, 2);
    eventClick(div_graphStatistics, 3);

    document.body.appendChild(div_StatisticMenu);
}

function createDiv_(elmt, parent, number)
{
    elmt = document.createElement("DIV");
    elmt.style.position = "relative";
    elmt.style.top = "5px";
    elmt.style.left = "0px";
    elmt.style.width = "380px";
    elmt.style.height = "30px";
    elmt.style.fontFamily = "Arial";
    
    // set background color for 'div_pageStatistics'
    if(number === 2)
         elmt.style.background = "lightblue";
     else
    elmt.style.background = "#ccff00";

    elmt.style.color = "#9999ff";
    elmt.style.fontSize = "22px";
    elmt.style.textAlign = "center";
    elmt.style.margin = "10px 5px";
    elmt.style.boxShadow = '0 0 0 #f80';
    elmt.setAttribute("id", "d" + number);
    elmt.addEventListener("mouseover", function()
    {
        //alert("mouseover");
        jQuery(this).stop().animate({boxShadow: '0 0 50px '}, 'fast');
    });
    elmt.addEventListener("mouseout", function()
    {
        //alert("mouseover");
        jQuery(this).stop().animate({boxShadow: '0 0 0 #f80'}, 'fast');
    });

    parent.appendChild(elmt);

    return elmt;
}

function eventClick(elmt, number)
{
    elmt.addEventListener("click", function()
    {
        repaintOnlyOneElmt(elmt, number);
    });
}

function repaintOnlyOneElmt(elmt, number)
{
    div_lineStatistics.style.background = "#ccff00";
    div_pageStatistics.style.background = "#ccff00";
    div_graphStatistics.style.background = "#ccff00";

    if (document.getElementById("d" + number))
    {
        elmt.style.background = "lightblue";

        moveStatMenuToCenter();
        notAnimateBody();
        $('body').find('input, textarea, button, select').attr("disabled", false);

        if (number === 1)
        {
            
            allow_lineStat = true;
            allow_pageStat = false;
            allow_graphStat = false;
            hideGraphStatistics();
            enableStatMenuButtons();
            choiceStatistics();
            //alert("allow_pageStat");
        }
        if (number === 2)
        {
            allow_lineStat = false;
            allow_pageStat = true;
            allow_graphStat = false;
            hideGraphStatistics();
            enableStatMenuButtons();
            choiceStatistics();
            //alert('allow_pageStat');
        }
        if (number === 3)
        {
            allow_lineStat = false;
            allow_pageStat = false;
            allow_graphStat = true;
            showGraphStatistics();
            disableStatMenuButtons();
            choiceStatistics();
            //alert('allow_graphStat');
        }
    }

}

function choiceStatistics()
{
    if (turn_showAll)
    {
        filter_showAll();
    }
    if (turn_showOnlyGood)
    {
        filter_OnlyGood();
    }
    if (turn_showOnlyError)
    {
        filter_OnlyError();
    }
    if (turn_showOnlyEmpty)
    {
        filter_OnlyEmpty();
    }
}

function removeDivForStatistics( )
{
    document.body.removeChild(div_StatisticMenu);
}

function displayDivForStatistics( )
{
    div_StatisticMenu.style.display = "inline";
}

function hideDivForStatistics( )
{
    div_StatisticMenu.style.display = "none";
}


//function evntListenerFor_statMenu()
//{
sMenu.addEventListener("click", function()  //--------------------------------------------- 
{

    if (!initMenu) {
        createDivForStatistics( );
        initMenu = 1;
    }

    if (!showAndHide_menu)   // show
    {
        $('body').find('input, textarea, button, select').attr("disabled", true);
        animateBody();

        opacityStatMenu();
        // displayDivForStatistics( );
        showAndHide_menu = 1;
    } else             // hide
    {
        $('body').find('input, textarea, button, select').attr("disabled", true);
        animateBody();
        opacityStatMenu();
        //hideDivForStatistics( );
        //removeDivForStatistics( );
        showAndHide_menu = 0;
    }
});
//}



function getPositionElement(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//         xPosition += ( element.scrollLeft + element.clientLeft + element.style.left);
//         yPosition += ( element.scrollTop + element.clientTop + + element.style.left);
        element = element.offsetParent;
    }
    return {x: xPosition, y: yPosition};
}

function setPositionElementInCenter(element) {
    var xPosition = 0;
    var yPosition = 0;

    var w = element.style.width / 2 + "%";
    var h = element.style.height / 2 + "%";

    // alert(w + "    " + h);

    xPosition = document.body.clientWidth / 2 + "px";
    yPosition = document.body.clientHeight / 2 + "px";

    element.style.left = xPosition;
    element.style.top = yPosition;

    return {x: xPosition, y: yPosition};

    // alert(xPosition + "    " + yPosition);
}


