

var table = document.createElement("TABLE");


function setTable()
{
    setScrollDiv();

    table.setAttribute("width", "399px");
    table.setAttribute("id", "personalStatistics");
    table.style.border = "4px solid orange";
    table.style.borderRadius = "5px 5px";
    table.style.color = "white";
    table.style.background = "gray";
    table.style.fontSize = "15px";
    table.style.overflow = "auto";

    scroll_div.appendChild(table);
    // stat.appendChild(table);
}

function setTableHeader()
{
    setTable();

    var tr0 = document.createElement("TR");

    var th1 = document.createElement("TH");
    var th2 = document.createElement("TH");
    var th3 = document.createElement("TH");
    var th4 = document.createElement("TH");
    var th5 = document.createElement("TH");
    var th6 = document.createElement("TH");

    var cell1 = document.createTextNode("N");
    var cell2 = document.createTextNode("Date");
    var cell3 = document.createTextNode("Time");
    var cell4 = document.createTextNode("Random");
    var cell5 = document.createTextNode("Answer");
    var cell6 = document.createTextNode("Result");

    th1.appendChild(cell1); // line number
    th2.appendChild(cell2); // Date 
    th3.appendChild(cell3); // Time
    th4.appendChild(cell4); // Random 
    th5.appendChild(cell5); // Answer 
    th6.appendChild(cell6); // Result

    tr0.appendChild(th1);
    tr0.appendChild(th2);
    tr0.appendChild(th3);
    tr0.appendChild(th4);
    tr0.appendChild(th5);
    tr0.appendChild(th6);

    // document.getElementById("showStatistics").appendChild(tr0);
    table.appendChild(tr0);

    turn_showAll = true;
}

function myStatistics()
{
    // if  BUTTON 'Clear' is not clicked
    if (!clearBlock)
        line++;


    init++;
    //alert("randomAttemps[index] : " + randomAttemps[index]);

    if (init == 1)
        setTableHeader();

    var tr = document.createElement("TR");
    // tr.setAttribute("id", "myTr");
    // document.getElementById("statistics").appendChild(tr);
//    if(turn_showOnlyGood || turn_showOnlyError)
//    table.appendChild(tr);

    // if  BUTTON 'Clear' is not clicked
    if (!clearBlock)
    {
        // for Button 'All'
        showAllIndex++;
        showAll[showAllIndex] = tr;


        if (getResult() === "OK")
        {
            tr.style.background = "green";
            showOnlyGoodIndex++;
            showOnlyGood[showOnlyGoodIndex] = tr;
        }
        if (getResult() === "ERR")
        {
            tr.style.background = "red";
            showOnlyErrorIndex++;
            showOnlyError[showOnlyErrorIndex] = tr;
        }
        if (getResult() === "EMPTY")
        {
            tr.style.background = "lightgray";
            showOnlyEmptyIndex++;
            showOnlyEmpty[showOnlyEmptyIndex] = tr;
        }


        if (turn_showAll)
        {
            if (allow_pageStat)
            {
//               // resetDiv_ForPageButtons(); // from file: showAllpages.js     
                table.appendChild(showAll[showAllIndex]);
                showPages(); /// from file: pages.js
            }

            if (allow_lineStat)
            {
                resetDiv_ForPageButtons(); // from file: showAllpages.js    
                filter_showAll();
            }

            if (allow_graphStat)
                filter_showAll();

        }
        if (turn_showOnlyGood)
        {
            // [ reset page Buttons after adding each new line in statistics ]
            resetDiv_ForPageButtons(); // from file: showAllpages.js 
            filter_OnlyGood();
        }
        if (turn_showOnlyError)
        {
            // [ reset page Buttons after adding each new line in statistics ]
            resetDiv_ForPageButtons(); // from file: showAllpages.js 
            filter_OnlyError();
        }
        if (turn_showOnlyEmpty)
        {
            // [ reset page Buttons after adding each new line in statistics ]
            resetDiv_ForPageButtons(); // from file: showAllpages.js 
            filter_OnlyEmpty();
        }

    }

        // from file randomStatistics.js
        RandomCnt(r);
        setRandomBase();
    


    var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");
    var td4 = document.createElement("TD");
    var td5 = document.createElement("TD");
    var td6 = document.createElement("TD");

    var cell1 = document.createTextNode(line);
    var cell2 = document.createTextNode(myDate());
    var cell3 = document.createTextNode(myTime());
    var cell4 = document.createTextNode(randomAttemps[index]); // Random
    var cell5 = document.createTextNode(getAnswer());
    var cell6 = document.createTextNode(getResult());

    td1.appendChild(cell1); // line number
    td2.appendChild(cell2); // Date 
    td3.appendChild(cell3); // Time
    td4.appendChild(cell4); // Random 
    td5.appendChild(cell5); // Answer 
    td6.appendChild(cell6); // Result

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    td1.style.border = "2px solid orange";
    td2.style.border = "2px solid orange";
    td3.style.border = "2px solid orange";
    td4.style.border = "2px solid orange";
    td5.style.border = "2px solid orange";
    td6.style.border = "2px solid orange";

    // document.getElementById("myTr").appendChild(td);
}

function myTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    // document.getElementById("txt").innerHTML = h + ":" + m + ":" + s ;
    var time = h + ":" + m + ":" + s;
    return time.toString();
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var d = day + "-" + month + "-" + year;
    return d.toString();
}

//---------------BUTTONS: 'All' 'OnlyGood' 'OnlyError' 'OnlyEmpty' -------------
//------------------------------------------------------------------------------
var turn_showAll = false;
var turn_showOnlyGood = false;
var turn_showOnlyError = false;
var turn_showOnlyEmpty = false;

var showAll = [];
var showOnlyGood = [];
var showOnlyError = [];
var showOnlyEmpty = [];

var showAllIndex = -1;
var showOnlyGoodIndex = -1;
var showOnlyErrorIndex = -1;
var showOnlyEmptyIndex = -1;

// BUTTON: 'Clear'
// if false  --- statistics can exists
// if true   --- statistics cannot exist
var clearBlock = false;

function  filter_showAll()
{
    var t = table.firstChild;

    while (t) {
        table.removeChild(t);
        t = table.firstChild;
    }

    if (init > 1) // hide setTableHeader() for case : if click Button 'All' before 'start' button
    {
        //table = null;
        setTableHeader();
    }

    turn_showAll = true;
    turn_showOnlyGood = false;
    turn_showOnlyError = false;
    turn_showOnlyEmpty = false;

    // 'allow_lineStat' from file:statisticsMenu.js
    // show only statistics like lines
    if (allow_lineStat && !clearBlock)
    {
        // when graphStatistics is disabled need enable Buttons
        enableStatMenuButtons();
        // from file: graphStatistics.js
        hideGraphStatistics();

        scroll_div.style.height = "370px";
        scrolling();

        for (var i = 0; i < showAll.length; i++)
        {
            showAll[i].style.display = "table-row";
            table.appendChild(showAll[i]);
        }

        // remove panel for displaying hidden pages
        removePagePanel();  // from file: page.js
        // allow display pages buttons with hidden pages
        showAndHideAllPageButtons = false;  // from file: showAllpages.js
        hideButton_showAllPages(); // from file: showAllpages.js

        //alert(document.getElementById("personalStatistics").style.overflow);
    }

    // 'allow_pageStat' from file:statisticsMenu.js
    // show only statistics like pages
    if (allow_pageStat && !clearBlock)
    {
        // when graphStatistics is disabled need enable Buttons
        enableStatMenuButtons();
        // from file: graphStatistics.js
        hideGraphStatistics();

        scroll_div.style.height = "280px";
        scroll_div.style.overflow = "hidden";
        filter_showAll_pages(); // from file: pages.js
    }

    // 'allow_graphStat' from file:statisticsMenu.js
    // show only statistics like pages
    if (allow_graphStat && !clearBlock)
    {
        // when 'allow_graphStat' is enabled it need disable some buttons
        disableStatMenuButtons();

        setGraphBase(); // from file: graphStatistics.js 

        scroll_div.removeChild(table);
        // remove panel for displaying hidden pages
        removePagePanel();  // from file: page.js
        // allow display pages buttons with hidden pages
        showAndHideAllPageButtons = false;  // from file: showAllpages.js
        hideButton_showAllPages(); // from file: showAllpages.js 
    }

}

// for button onlyGood
function  filter_OnlyGood()
{
    var t = table.firstChild;

    while (t) {
        table.removeChild(t);
        t = table.firstChild;
    }

    setTableHeader();

    turn_showAll = false;
    turn_showOnlyGood = true;
    turn_showOnlyError = false;
    turn_showOnlyEmpty = false;

    // 'allow_lineStat' from file:statisticsMenu.js
    // show only statistics like lines
    if (allow_lineStat && !clearBlock)
    {
        // when graphStatistics is disabled need enable Buttons
        enableStatMenuButtons();
        // from file: graphStatistics.js
        hideGraphStatistics();

        scroll_div.style.height = "370px";
        scrolling();

        for (var i = 0; i < showOnlyGood.length; i++)
        {
            showOnlyGood[i].style.display = "table-row";
            table.appendChild(showOnlyGood[i]);
        }

        // remove panel for displaying hidden pages
        removePagePanel();  // from file: page.js
        // allow display pages buttons with hidden pages
        showAndHideAllPageButtons = false;  // from file: showAllpages.js
        hideButton_showAllPages(); // from file: showAllpages.js

    }

    // 'allow_pageStat' from file:statisticsMenu.js
    // show only statistics like pages
    if (allow_pageStat && !clearBlock)
    {
        // when graphStatistics is disabled need enable Buttons
        enableStatMenuButtons();
        // from file: graphStatistics.js
        hideGraphStatistics();

        scroll_div.style.height = "280px";
        scroll_div.style.overflow = "hidden";
        filter_OnlyGood_pages(); // from file: pages.js
    }

    // 'allow_graphStat' from file:statisticsMenu.js
    // show only statistics like pages
    if (allow_graphStat && !clearBlock)
    {
        // when 'allow_graphStat' is enabled it need disable some buttons
        disableStatMenuButtons();

        setGraphBase(); // from file: graphStatistics.js 

        scroll_div.removeChild(table);
        // remove panel for displaying hidden pages
        removePagePanel();  // from file: page.js
        // allow display pages buttons with hidden pages
        showAndHideAllPageButtons = false;  // from file: showAllpages.js
        hideButton_showAllPages(); // from file: showAllpages.js 
    }
}

// for button 'onlyError'
function  filter_OnlyError()
{
    var t = table.firstChild;

    while (t) {
        table.removeChild(t);
        t = table.firstChild;
    }

    setTableHeader();

    turn_showAll = false;
    turn_showOnlyGood = false;
    turn_showOnlyError = true;
    turn_showOnlyEmpty = false;

    // 'allow_lineStat' from file:statisticsMenu.js
    // show only statistics like lines
    if (allow_lineStat && !clearBlock)
    {
        // when graphStatistics is disabled need enable Buttons
        enableStatMenuButtons();
        // from file: graphStatistics.js
        hideGraphStatistics();

        scroll_div.style.height = "370px";
        scrolling();

        for (var i = 0; i < showOnlyError.length; i++)
        {
            showOnlyError[i].style.display = "table-row";
            table.appendChild(showOnlyError[i]);
        }

        // remove panel for displaying hidden pages
        removePagePanel();  // from file: page.js
        // allow display pages buttons with hidden pages
        showAndHideAllPageButtons = false;  // from file: showAllpages.js
        hideButton_showAllPages(); // from file: showAllpages.js
    }

    // 'allow_pageStat' from file:statisticsMenu.js
    // show only statistics like pages
    if (allow_pageStat && !clearBlock)
    {
        // when graphStatistics is disabled need enable Buttons
        enableStatMenuButtons();
        // from file: graphStatistics.js
        hideGraphStatistics();

        scroll_div.style.height = "280px";
        scroll_div.style.overflow = "hidden";
        filter_OnlyError_pages();  // from file: pages.js
    }

    // 'allow_graphStat' from file:statisticsMenu.js
    // show only statistics like pages
    if (allow_graphStat && !clearBlock)
    {
        // when 'allow_graphStat' is enabled it need disable some buttons
        disableStatMenuButtons();

        setGraphBase(); // from file: graphStatistics.js 

        scroll_div.removeChild(table);
        // remove panel for displaying hidden pages
        removePagePanel();  // from file: page.js
        // allow display pages buttons with hidden pages
        showAndHideAllPageButtons = false;  // from file: showAllpages.js
        hideButton_showAllPages(); // from file: showAllpages.js 
    }
}

// for button 'onlyError'
function  filter_OnlyEmpty()
{
    var t = table.firstChild;

    while (t) {
        table.removeChild(t);
        t = table.firstChild;
    }

    //table = null;
    setTableHeader();

    turn_showAll = false;
    turn_showOnlyGood = false;
    turn_showOnlyError = false;
    turn_showOnlyEmpty = true;

    // 'allow_lineStat' from file:statisticsMenu.js
    // show only statistics like lines
    if (allow_lineStat && !clearBlock)
    {
        // from file: graphStatistics.js
        hideGraphStatistics();
        // when graphStatistics is disabled need enable Buttons
        enableStatMenuButtons();

        scroll_div.style.height = "370px";
        scrolling();
        // remove panel for displaying hidden pages
        removePagePanel();  // from file: page.js
        // allow display pages buttons with hidden pages
        showAndHideAllPageButtons = false;  // from file: showAllpages.js
        hideButton_showAllPages(); // from file: showAllpages.js

        for (var i = 0; i < showOnlyEmpty.length; i++)
        {
            showOnlyEmpty[i].style.display = "table-row";
            table.appendChild(showOnlyEmpty[i]);
        }
    }

    // 'allow_pageStat' from file:statisticsMenu.js
    // show only statistics like pages
    if (allow_pageStat && !clearBlock)
    {
        // from file: graphStatistics.js
        hideGraphStatistics();
        // when graphStatistics is disabled need enable Buttons
        enableStatMenuButtons();

        scroll_div.style.height = "280px";
        scroll_div.style.overflow = "hidden";
        filter_OnlyEmpty_pages();  // from file: pages.js
    }

    // 'allow_graphStat' from file:statisticsMenu.js
    // show only statistics like pages
    if (allow_graphStat && !clearBlock)
    {
        // when 'allow_graphStat' is enabled it need disable some buttons
        disableStatMenuButtons();

        setGraphBase(); // from file: graphStatistics.js 

        scroll_div.removeChild(table);
        // remove panel for displaying hidden pages
        removePagePanel();  // from file: page.js
        // allow display pages buttons with hidden pages
        showAndHideAllPageButtons = false;  // from file: showAllpages.js
        hideButton_showAllPages(); // from file: showAllpages.js 
    }
}

function clearAll()
{
    var t = table.firstChild;

    while (t) {
        table.removeChild(t);
        t = table.firstChild;
    }

    line = 0;

    showAllIndex = -1;
    showOnlyGoodIndex = -1;
    showOnlyErrorIndex = -1;
    showOnlyEmptyIndex = -1;

    showAll = [];
    showOnlyGood = [];
    showOnlyError = [];
    showOnlyEmpty = [];

    setTableHeader();

    removePagePanel();  // from file: page.js

    // allow display pages buttons with hidden pages
    showAndHideAllPageButtons = false;  // from file: showAllpages.js

    hideButton_showAllPages(); // from file: showAllpages.js

    clearBlock = true; // block adding any statisctics


    showAllPages === null;
//    divFor_showAllPages.style.display = null;
//    divFor_allButtonPages.style.display = null;

    if (allow_graphStat)
    {
        disableStatMenuButtons();
        resetGraphStatistics();  // from file: graphStatistics.js   
    }


    // onBlur(allRandom, onlyGood, onlyError, onlyEmpty, 0, 0, 0, 0, 1);  // from file: buttonActions.js 
}

function disableStatMenuButtons()
{
    //$('body').find('#allRandom, #onlyGood, #onlyError, #onlyEmpty').attr("disabled", true);

    allRandom.style.display = "none";
    onlyGood.style.display = "none";
    onlyError.style.display = "none";
    onlyEmpty.style.display = "none";

    disClear.style.display = "inline";

    disClear.style.marginLeft = "5px";
    disClear.style.marginTop = "5px";

}

function enableStatMenuButtons()
{
    // $('body').find('#allRandom, #onlyGood, #onlyError, #onlyEmpty').attr("disabled", false);

    if (mem_clear === 1)
    {
        // alert("mem_clear === 1");
        // mem_disclear = 0;


//        
//        mem_allRandom = 0;
//        mem_onlyGood = 0;
//        mem_onlyError = 0;
//        mem_onlyEmpty = 0;
//        
//        allRandom.style.background = "wheat";
//        allRandom.style.color = "black";
//        allRandom.style.fontWeight = "normal";
//        
//        onlyGood.style.background = "wheat";
//        onlyGood.style.color = "black";
//        onlyGood.style.fontWeight = "normal";
//        
//        onlyError.style.background = "wheat";
//        onlyError.style.color = "black";
//        onlyError.style.fontWeight = "normal";
//        
//        onlyEmpty.style.background = "wheat";
//        onlyEmpty.style.color = "black";
//        onlyEmpty.style.fontWeight = "normal";
//        
//        clear.style.background = "orangered";
//        clear.style.color = "yellow";
//        clear.style.fontWeight = "normal";
//        
        // onBlur(allRandom, onlyGood, onlyError, onlyEmpty, 0, 0, 0, 0, 1);   
    }

    if (mem_clear === 0)
    {
        //  alert("mem_clear === 0");
        onBlur(allRandom, onlyGood, onlyError, onlyEmpty, 0, 0, 0, 0, 1);
    }

    allRandom.style.display = "inline";
    onlyGood.style.display = "inline";
    onlyError.style.display = "inline";
    onlyEmpty.style.display = "inline";

    disClear.style.display = "none";

    disClear.style.marginLeft = "0px";
    disClear.style.marginTop = "0px";

    if ((mem_disclear === 1))
    {
        // alert("mem_disclear === 1");
        // mem_allRandom = 1;
//       onBlur(onlyGood, onlyError, onlyEmpty, clear, 1, 0, 0, 0, 0);
//       onBlurDisclear_Clear(clear, 0, 1);
//        mem_clear = 0;
    }

    if ((mem_disclear === 0))
    {
        // alert("mem_disclear === 0"); 
    }
}

//------------------------------- scrolling table ------------------------------

// for scrolling table !
var scroll_div = document.createElement("DIV");

function setScrollDiv()
{
    scroll_div.style.position = "absolute";
    scroll_div.style.top = "30px";
    scroll_div.style.left = "1px";
    scroll_div.style.width = "399px";
    scroll_div.style.height = "400px";
    scroll_div.style.borderRadius = "5px 5px";
    scroll_div.setAttribute("id", "scrollTable");

    stat.appendChild(scroll_div);
}

function scrolling()
{
//    stat.style.overflow = "auto";
    scroll_div.style.overflow = "auto";
}


function scrollLineStatistics()
{
    // alert("scroll");
    // $("#scrollTable").scrollTop(200);
    $("#scrollTable").animate(
            {scrollTop: $("#scrollTable").offset().top += "10px"
            }, "slow");

}

