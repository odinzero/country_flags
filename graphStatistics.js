
// for graphicks statistics !
var graph_div = document.createElement("DIV");
var axisX_div = document.createElement("DIV");
var axisY_div = document.createElement("DIV");
var initGraph = true;
var th_y = []; // threshold percents
var zin = 0;   // zIndex for ceach new graph DIV 

var graph_All, graph_onlyGood, graph_onlyError, graph_onlyEmpty; // dynamic DIV

var graph_All_div, graph_onlyGood_div, graph_onlyError_div, graph_onlyEmpty_div; // DIV for score
var All_score, onlyGood_score, onlyError_score, onlyEmpty_score; // score !!!

// when mouse enter in each graph div should appear line for each graph div
var dLinesGood_div, dLinesError_div, dLinesEmpty_div;
//
var onlyGoodPrct_div, onlyErrorPrct_div, onlyEmptyPrct_div; // div for percent
var onlyGoodPrct, onlyErrorPrct, onlyEmptyPrct; //  percent score

function setGraphBase()
{
    if (initGraph)
    {
        initGraph = false;

        graph_div.style.position = "absolute";
        graph_div.style.top = "30px";
        graph_div.style.left = "1px";
        graph_div.style.width = "399px";
        graph_div.style.height = "370px";
        graph_div.style.borderRadius = "5px 5px";
        graph_div.style.background = "lightgreen";
        graph_div.setAttribute("id", "graphBase");

        stat.appendChild(graph_div);

        setAxesX();
        setAxesY();
        threshold_Y();

        graph_All = createGraphDiv_(graph_All, graph_div);
        graph_onlyGood = createGraphDiv_(graph_onlyGood, graph_div);
        graph_onlyError = createGraphDiv_(graph_onlyError, graph_div);
        graph_onlyEmpty = createGraphDiv_(graph_onlyEmpty, graph_div);

        // add Event Listeners to graph DIV's
        evnt_listener(graph_All, 0);
        evnt_listener(graph_onlyGood, 1);
        evnt_listener(graph_onlyError, 2);
        evnt_listener(graph_onlyEmpty, 3);

        graph_All.style.background = "orange";
        graph_onlyGood.style.background = "green";
        graph_onlyError.style.background = "red";
        graph_onlyEmpty.style.background = "gray";

        graph_All.style.left = "50px";
        graph_onlyGood.style.left = "130px";
        graph_onlyError.style.left = "210px";
        graph_onlyEmpty.style.left = "290px";

        // add div with - score -
        graph_All_div = createPatternDiv(340, 50, 60, 25, 16, All_score, graph_All_div, graph_div);
        graph_onlyGood_div = createPatternDiv(340, 130, 60, 25, 16, onlyGood_score, graph_onlyGood_div, graph_div);
        graph_onlyError_div = createPatternDiv(340, 210, 60, 25, 16, onlyError_score, graph_onlyError_div, graph_div);
        graph_onlyEmpty_div = createPatternDiv(340, 290, 60, 25, 16, onlyEmpty_score, graph_onlyEmpty_div, graph_div);
    }

    showGraphStatistics();
    getScores();
}

function getScores()
{
    All_score = showAll.length;
    onlyGood_score = showOnlyGood.length;
    onlyError_score = showOnlyError.length;
    onlyEmpty_score = showOnlyEmpty.length;

    // remove divs with -score-
    graph_div.removeChild(graph_All_div);
    graph_div.removeChild(graph_onlyGood_div);
    graph_div.removeChild(graph_onlyError_div);
    graph_div.removeChild(graph_onlyEmpty_div);

    // add divs with -score-
    graph_All_div = createPatternDiv(340, 50, 60, 25, 20, All_score, graph_All_div, graph_div);
    graph_onlyGood_div = createPatternDiv(340, 130, 60, 25, 20, onlyGood_score, graph_onlyGood_div, graph_div);
    graph_onlyError_div = createPatternDiv(340, 210, 60, 25, 20, onlyError_score, graph_onlyError_div, graph_div);
    graph_onlyEmpty_div = createPatternDiv(340, 290, 60, 25, 20, onlyEmpty_score, graph_onlyEmpty_div, graph_div);

    graph_All_div.style.color = "lightorange";
    graph_onlyGood_div.style.color = "lightgreen";
    graph_onlyError_div.style.color = "lightred";
    graph_onlyEmpty_div.style.color = "lightgray";

    graph_All_div.style.background = "orange";
    graph_onlyGood_div.style.background = "green";
    graph_onlyError_div.style.background = "red";
    graph_onlyEmpty_div.style.background = "black";

    graphCalculation();
}

function graphCalculation()
{
//    All_score       -    10  - 1   - 300
//    onlyEmpty_score -    2   - 0.2 - y

    // remove divs with  graphics %
    graph_div.removeChild(graph_All);
    graph_div.removeChild(graph_onlyGood);
    graph_div.removeChild(graph_onlyError);
    graph_div.removeChild(graph_onlyEmpty);
    graph_onlyEmpty = null;

    //  add divs with  graphics %
    graph_All = createGraphDiv_(graph_All, graph_div);
    graph_onlyGood = createGraphDiv_(graph_onlyGood, graph_div);
    graph_onlyError = createGraphDiv_(graph_onlyError, graph_div);
    graph_onlyEmpty = createGraphDiv_(graph_onlyEmpty, graph_div);
    // add Event Listeners to graph DIV's
    evnt_listener(graph_All, 0);
    evnt_listener(graph_onlyGood, 1);
    evnt_listener(graph_onlyError, 2);
    evnt_listener(graph_onlyEmpty, 3);

    graph_All.style.background = "orange";
    graph_onlyGood.style.background = "green";
    graph_onlyError.style.background = "red";
    graph_onlyEmpty.style.background = "gray";

    graph_All.style.left = "50px";
    graph_onlyGood.style.left = "130px";
    graph_onlyError.style.left = "210px";
    graph_onlyEmpty.style.left = "290px";


    var all = (All_score / All_score) * 300;
    var good = (onlyGood_score / All_score) * 300;
    var error = (onlyError_score / All_score) * 300;
    var empty = (onlyEmpty_score / All_score) * 300;

    graph_All.style.height = all + "px";
    graph_onlyGood.style.height = good + "px";
    graph_onlyError.style.height = error + "px";
    graph_onlyEmpty.style.height = empty + "px";

    graph_All.style.top = 325 - all + "px";
    graph_onlyGood.style.top = 325 - good + "px";
    graph_onlyError.style.top = 325 - error + "px";
    graph_onlyEmpty.style.top = 325 - empty + "px";
}

function setAxesY()
{
    axisY_div.style.position = "absolute";
    axisY_div.style.top = "20px";
    axisY_div.style.left = "30px";
    axisY_div.style.width = "2px";
    axisY_div.style.height = "310px";
    axisY_div.style.borderRadius = "5px 5px";
    axisY_div.style.background = "gray";
    axisY_div.setAttribute("id", "axeY");

    graph_div.appendChild(axisY_div);
}

function setAxesX()
{
    axisX_div.style.position = "absolute";
    axisX_div.style.top = "330px";
    axisX_div.style.left = "30px";
    axisX_div.style.width = "350px";
    axisX_div.style.height = "2px";
    axisX_div.style.borderRadius = "5px 5px";
    axisX_div.style.background = "gray";
    axisX_div.setAttribute("id", "axeX");

    graph_div.appendChild(axisX_div);
}

function createGraphDiv_(elmt, parent)
{
    elmt = document.createElement("DIV");
    elmt.style.position = "absolute";
    elmt.style.top = "325px";
    elmt.style.width = "60px";
    elmt.style.height = "5px";
    elmt.style.fontFamily = "Arial";

    zin++;
    elmt.style.zIndex = zin + "";

    parent.appendChild(elmt);

    return elmt;
}

function threshold_Y()
{
    var names = [];
    var y = -15;
    var text = "";
    var num = 100;

    var cnt = -5;
    for (var i = 0; i < 11; i++)
    {
        th_y[i] = document.createElement("DIV");
        th_y[i].style.position = "absolute";
        th_y[i].style.left = "27px";
        th_y[i].style.width = "8px";
        th_y[i].style.height = "2px";
        th_y[i].style.background = "gray";

        cnt += 30;
        th_y[i].style.top = cnt + "px";
        graph_div.appendChild(th_y[i]);


        names[i] = document.createElement("DIV");
        names[i].style.position = "absolute";
        names[i].style.left = "5px";
        names[i].style.width = "20px";
        names[i].style.height = "20px";
        names[i].style.background = "lightgreen";
        names[i].style.color = "black";
        names[i].style.fontFamily = "Arial";
        names[i].style.fontSize = "12px";

        y += 30;
        names[i].style.top = y + "px";
        graph_div.appendChild(names[i]);

        if (i === 0)
            text = document.createTextNode("" + num);
        else {
            num -= 10;
            text = document.createTextNode("" + num);
        }

        names[i].appendChild(text);

    }

    var name_y;
    name_y = createPatternDiv(8, 40, 10, 20, 16, "%", name_y, graph_div);
    name_y.style.paddingLeft = "1px";
    var name_qty;
    name_qty = createPatternDiv(305, 365, 20, 20, 16, "Qty.", name_qty, graph_div);
    name_qty.style.paddingLeft = "1px";
}

var zzind = 10;
function createPatternDiv(top, left, w, h, fs, text, x, parent)
{
    x = document.createElement("DIV");
    x.style.position = "absolute";
    x.style.top = top + "px";
    x.style.left = left + "px";
    x.style.width = w + "px";
    x.style.height = h + "px";
    x.style.paddingTop = "1px";
    x.style.paddingLeft = "18px";
    x.style.background = "lightgreen"; //lightgreen
    x.style.color = "black";
    zzind++;
    x.style.zIndex = zzind + "";
    x.style.fontFamily = "Arial";
    x.style.fontSize = fs + "px";

    var t = document.createTextNode("" + text);
    x.appendChild(t);

    parent.appendChild(x);

    return x;
}


function hideGraphStatistics()
{
    graph_div.style.display = "none";
}

function showGraphStatistics()
{
    graph_div.style.display = "inline";
}

function resetGraphStatistics()
{
    if (graph_All !== null)
    {
        // remove divs with  graphics %
        graph_div.removeChild(graph_All);
        graph_div.removeChild(graph_onlyGood);
        graph_div.removeChild(graph_onlyError);
        graph_div.removeChild(graph_onlyEmpty);
        stat.removeChild(graph_div);
    }

    initGraph = true;
    setGraphBase();
}

//--------------------------------- graph_Lines --------------------------------

function collectAllGraphsTo_all()
{
    // hide divs with  graphics %
    graph_onlyGood.style.display = "none";
    graph_onlyError.style.display = "none";
    graph_onlyEmpty.style.display = "none";
    
    graph_All.style.opacity = 0.2;
    
    
//    graph_onlyEmpty.style.height = empty + "px";
    //--------------------- calculation ----------------------------------------
    var good = (onlyGood_score / All_score) * 300;
    graph_onlyGood.style.height = good + "px";
    graph_onlyGood.style.top = 325 - good + "px";
    graph_onlyGood.clientHeight = good;
    
    var error = (onlyError_score / All_score) * 300;
    graph_onlyError.style.height = error + "px";
    graph_onlyError.style.top = 325 - error  - good  + "px";
    graph_onlyError.style.height = 325 - 25 - good -  empty  + "px";
    
   // alert(graph_onlyError.style.height + "   " + graph_onlyGood.clientHeight); 
    var empty = (onlyEmpty_score / All_score) * 300;
    graph_onlyEmpty.style.top = 325 - good - empty - error + "px";
    graph_onlyEmpty.style.height = 325 - 25 -  good - error  + "px";
    
    
     // ------ move good graph to All graph ------
    graph_onlyGood.style.zIndex = 0;
    graph_onlyGood.style.display = "inline";
    graph_onlyGood.style.left = "50px";
    
     // ------ move error graph to All graph ------
    graph_onlyError.style.zIndex = 0;
    graph_onlyError.style.display = "inline";
    graph_onlyError.style.left = "50px";
    
     // ------ move empty graph to All graph ------
    graph_onlyEmpty.style.zIndex = 0;
    graph_onlyEmpty.style.display = "inline";
    graph_onlyEmpty.style.left = "50px";
}

function removeAllGraphsFrom_all() 
{
     // ------ good graph ------
    graph_onlyGood.style.zIndex = zin + 1; 
    graph_onlyGood.style.left = "130px";
    evnt_listener(graph_onlyGood, 1);

    var good = (onlyGood_score / All_score) * 300;
    graph_onlyGood.style.top = 325 - good + "px";
    graph_onlyGood.style.height = good + "px";
    
     // ------ error graph ------
    graph_onlyError.style.zIndex = zin + 2;  
    graph_onlyError.style.left = "210px";
    evnt_listener(graph_onlyError, 2);

    var error = (onlyError_score / All_score) * 300;
    graph_onlyError.style.top = 325 - error + "px";
    graph_onlyError.style.height = error + "px";
    
     // ------ empty graph ------
    graph_onlyEmpty.style.zIndex = zin + 3;  
    graph_onlyEmpty.style.left = "290px";
    evnt_listener(graph_onlyEmpty, 3);

    var error = (onlyEmpty_score / All_score) * 300;
    graph_onlyEmpty.style.top = 325 - error + "px";
    
    
    //----------------------------------------
    graph_onlyGood.style.display = "inline";
    graph_onlyError.style.display = "inline";
    graph_onlyEmpty.style.display = "inline";
    
    graph_All.style.opacity = 1;
}

function createDottedLines_empty()
{
    dLinesEmpty_div = createPatternDiv(305, 27, 300, 2, 16, "", dLinesEmpty_div, graph_div);

    dLinesEmpty_div.style.paddingTop = "0px";
    dLinesEmpty_div.style.paddingLeft = "0px";
    dLinesEmpty_div.style.background = "gray";

    var empty = (onlyEmpty_score / All_score) * 300;
    dLinesEmpty_div.style.top = 325 - empty + "px";

    // show --empty--  percents
    onlyEmptyPrct = (onlyEmpty_score / All_score) * 100;
    onlyEmptyPrct = onlyEmptyPrct.toPrecision(4) + "%";
    onlyEmptyPrct_div = createPatternDiv(305, 365, 70, 17, 20, onlyEmptyPrct, onlyEmptyPrct_div, graph_div);

    onlyEmptyPrct_div.style.left = "290px";
    onlyEmptyPrct_div.style.textAlign = "center";
    onlyEmptyPrct_div.style.color = "gray";
    onlyEmptyPrct_div.style.paddingLeft = "0px";

    onlyEmptyPrct_div.style.top = 325 - 22 - empty + "px";
}

function createDottedLines_error()
{
    dLinesError_div = createPatternDiv(305, 27, 240, 2, 16, "", dLinesError_div, graph_div);

    dLinesError_div.style.paddingTop = "0px";
    dLinesError_div.style.paddingLeft = "0px";
    dLinesError_div.style.background = "red";

    var error = (onlyError_score / All_score) * 300;
    dLinesError_div.style.top = 325 - error + "px";

    // show --error--  percents
    onlyErrorPrct = (onlyError_score / All_score) * 100;
    onlyErrorPrct = onlyErrorPrct.toPrecision(4) + "%";
    onlyErrorPrct_div = createPatternDiv(305, 210, 70, 17, 20, onlyErrorPrct, onlyErrorPrct_div, graph_div);

    onlyErrorPrct_div.style.left = "210px";
    onlyErrorPrct_div.style.textAlign = "center";
    onlyErrorPrct_div.style.color = "red";
    onlyErrorPrct_div.style.paddingLeft = "0px";

    onlyErrorPrct_div.style.top = 325 - 22 - error + "px";
}

function createDottedLines_good()
{
    dLinesGood_div = createPatternDiv(305, 27, 130, 2, 16, "", dLinesGood_div, graph_div);

    dLinesGood_div.style.paddingTop = "0px";
    dLinesGood_div.style.paddingLeft = "0px";
    dLinesGood_div.style.background = "green";

    var good = (onlyGood_score / All_score) * 300;
    dLinesGood_div.style.top = 325 - good + "px";

    // show --good--  percents
    onlyGoodPrct = (onlyGood_score / All_score) * 100;
    onlyGoodPrct = onlyGoodPrct.toPrecision(4) + "%";
    onlyGoodPrct_div = createPatternDiv(305, 130, 70, 17, 20, onlyGoodPrct, onlyGoodPrct_div, graph_div);

    onlyGoodPrct_div.style.left = "130px";
    onlyGoodPrct_div.style.textAlign = "center";
    onlyGoodPrct_div.style.color = "green";
    onlyGoodPrct_div.style.paddingLeft = "0px";

    onlyGoodPrct_div.style.top = 325 - 22 - good + "px";
}

function removeDottedLines_empty()
{
    // remove line from empty DIV
    graph_div.removeChild(dLinesEmpty_div);
    graph_div.removeChild(onlyEmptyPrct_div);
}

function removeDottedLines_error()
{
    // remove line from error DIV
    graph_div.removeChild(dLinesError_div);
    graph_div.removeChild(onlyErrorPrct_div);
}

function removeDottedLines_good()
{
    // remove line from good DIV
    graph_div.removeChild(dLinesGood_div);
    graph_div.removeChild(onlyGoodPrct_div);
}

function evnt_listener(elmt, divGraph)
{
    switch (divGraph)
    {
        case 0:
            elmt.addEventListener("mouseover",  collectAllGraphsTo_all); 
            elmt.addEventListener("mouseout", removeAllGraphsFrom_all);
            break;
        case 1:
            elmt.addEventListener("mouseover", createDottedLines_good);
            elmt.addEventListener("mouseout", removeDottedLines_good);
            break;
        case 2:
            elmt.addEventListener("mouseover", createDottedLines_error);
            elmt.addEventListener("mouseout", removeDottedLines_error);
            break;
        case 3:
            elmt.addEventListener("mouseover", createDottedLines_empty);
            elmt.addEventListener("mouseout", removeDottedLines_empty);
            break;
    }
}

function remove_evnt_listener(elmt)
{
    elmt.removeEventListener("click");
}

