
// 
var graph_rdiv_axisX = null;

var graph_rdiv = null;
//
var axisX_rdiv = document.createElement("DIV");
var axisY_rdiv = document.createElement("DIV");

var initRandom = true;
//var th_x = [];    // threshold percents
var zIndex = 0;   // zIndex for ceach new graph DIV 

var graph_rAll, graph_random_dyn = []; // dynamic DIV

var graph_rAll_div, graph_random_div = []; // DIV for score
var rAll_score, arrRandomCnt = [];   // score !!!

function setRandomBase()
{
    if (initRandom)
    {
        initRandom = false;
        
        graph_rdiv_axisX = document.createElement("DIV");
        graph_rdiv_axisX.style.position = "absolute";
        graph_rdiv_axisX.style.top = "1px";
        graph_rdiv_axisX.style.left = "1px";
        graph_rdiv_axisX.style.width = "339px";
        graph_rdiv_axisX.style.height = "50px";
        graph_rdiv_axisX.style.zIndex = "0";
        graph_rdiv_axisX.style.borderRadius = "5px 5px";
        graph_rdiv_axisX.style.background = "#66ff00";
        //graph_rdiv_axisX.style.opacity = 0.2;
        graph_rdiv_axisX.setAttribute("id", "basefor_X");

        graph_rdiv = document.createElement("DIV");
        graph_rdiv.style.position = "absolute";
        graph_rdiv.style.top = "50px";
        graph_rdiv.style.left = "1px";
        graph_rdiv.style.width = "339px";
        graph_rdiv.style.height = "499px";
        graph_rdiv.style.zIndex = "8";
        graph_rdiv.style.borderRadius = "5px 5px";
        graph_rdiv.style.background = "lightgreen";
        graph_rdiv.style.overflowY = "auto";
        graph_rdiv.style.overflowX = "hidden";
        graph_rdiv.setAttribute("id", "randomBase");

        h.appendChild(graph_rdiv_axisX);
        h.appendChild(graph_rdiv);
        
        setBaseGraphics(arr.length);
    }

    showGraphStatistics();
    getRandomScores(arr.length);
}

function getRandomScores(len)
{
    initAllCnts(); // from file randomCnts.js

    // remove divs with -score-
    graph_rdiv.removeChild(graph_rAll_div);

    for (var i = 0; i < len; i++)
        graph_rdiv.removeChild(graph_random_div[i]);

    createGraphScoreDivs(len);

    graphRandomCalculation(len);
}

function graphRandomCalculation(len)
{
//    All_score       -    10  - 1   - 300
//    onlyEmpty_score -    2   - 0.2 - y

    // remove divs with  graphics %
    graph_rdiv.removeChild(graph_rAll);

    for (var i = 0; i < len; i++)
        graph_rdiv.removeChild(graph_random_dyn[i]);

    //  add divs with  graphics %  create random dynamic DIVs
    createDynamicGraphDivs(len);

    // calculation
    var all = (rAll_score / rAll_score) * 250;
    graph_rAll.style.width = all + "px";
    graph_rAll.style.left = "45px";

    for (var i = 0; i < len; i++) {
        graph_random_dyn[i].style.width = (arrRandomCnt[i] / rAll_score) * 250 + "px";
        graph_random_dyn[i].style.left = "45px";
    }

}


    var ii = 0;
function createDynamicGraphDivs(len)
{
    graph_rAll = createGraphRandomDiv_(graph_rAll, graph_rdiv);
    graph_rAll.style.background = "orange";
    graph_rAll.style.opacity = 0.5;
    graph_rAll.style.top = "5px"; //40

    var cntTop = 0;

    var height = 0;
    var top = 10;
    for (var i = 0; i < len; i++)
    {
        graph_random_dyn[i] = createGraphRandomDiv_(graph_random_dyn[0], graph_rdiv);
        graph_random_dyn[i].style.background = "green";
        graph_random_dyn[i].style.opacity = 0.5;
        //add Event Listeners to graph DIV's
        evnt_listener_random(graph_random_dyn[i], i);

        if (i === 0)
            graph_random_dyn[0].style.top = "50px"; // 90
        else
        {
            cntTop += 45;
            graph_random_dyn[i].style.top = cntTop + 50 + "px";  // 90
        }
    }
}

function createGraphScoreDivs(len)
{
    // add div with - score -              40  top left  w  h
    graph_rAll_div = createPatternRandomDiv(5, 2, 18, 40, 16, rAll_score, graph_rAll_div, graph_rdiv);
    graph_rAll_div.style.color = "lightorange";
    graph_rAll_div.style.background = "orange";

    var cntTop = 5; // 40
    for (var i = 0; i < len; i++)
    {
        cntTop += 45;
        graph_random_div[i] = createPatternRandomDiv(cntTop, 2, 18, 40, 16, arrRandomCnt[i], graph_random_div[i], graph_rdiv);
        graph_random_div[i].style.color = "lightred";
        graph_random_div[i].style.background = "red";
    }
}

function createGraphRandomDiv_(elmt, parent)
{
    elmt = document.createElement("DIV");
    elmt.style.position = "absolute";
    elmt.style.left = "42px";
    elmt.style.width = "5px";
    elmt.style.height = "40px";
    elmt.style.fontFamily = "Arial";
    elmt.style.textAlign = "center";

    zIndex++;
    elmt.style.zIndex = zIndex + "";

    parent.appendChild(elmt);

    return elmt;
}

//----------------------------- X  percent scale -------------------------------
function setAxesRandomY()
{
    axisY_rdiv.style.position = "absolute";
    axisY_rdiv.style.top = "0px";
    axisY_rdiv.style.left = "40px";
    axisY_rdiv.style.width = "2px";
    axisY_rdiv.style.height = "50px";  
    axisY_rdiv.style.borderRadius = "5px 5px";
    axisY_rdiv.style.background = "gray";
    axisY_rdiv.setAttribute("id", "axeY");
    if( arr.length === 0 )
    name_qty = createPatternDiv(52, 30, 20, 20, 16, "Qty.", name_qty, graph_rdiv); 
    
    var h = 100;  // 60
    for(var i = 0; i < arr.length; i++) 
     { 
        if(i === 0) 
          axisY_rdiv.style.height = "100px";  
        else {
           h += 45;
          axisY_rdiv.style.height = h + "px"; 
         // alert(h);
         }
        
        if(i === (arr.length - 1))
           name_qty = createPatternDiv(h + 2, 30, 20, 20, 16, "Qty.", name_qty, graph_rdiv);  
     }

    graph_rdiv.appendChild(axisY_rdiv);
}
 var name_qty; // name Y-axis

function setAxesRandomX()
{
    axisX_rdiv.style.position = "absolute";
    axisX_rdiv.style.top = "30px";
    axisX_rdiv.style.left = "40px";
    axisX_rdiv.style.width = "265px";
    axisX_rdiv.style.height = "2px";
    axisX_rdiv.style.borderRadius = "5px 5px";
    axisX_rdiv.style.background = "gray";
    axisX_rdiv.setAttribute("id", "axeX");

    graph_rdiv_axisX.appendChild(axisX_rdiv);    //  graph_rdiv
}

function thresholdRandom_X()
{
    var th_x = [];    // threshold percents
    var names = [];
    var y = 10;
    var text = "";
    var num = 0;

    var cnt = 18;
    for (var i = 0; i < 11; i++)
    {
        th_x[i] = document.createElement("DIV");
        th_x[i].style.position = "absolute";
        th_x[i].style.top = "27px";
        th_x[i].style.width = "2px";
        th_x[i].style.height = "8px";
        th_x[i].style.background = "gray";

        cnt += 25;
        th_x[i].style.left = cnt + "px";
        graph_rdiv_axisX.appendChild(th_x[i]);

        names[i] = document.createElement("DIV");
        names[i].style.position = "absolute";
        names[i].style.top = "5px";
        names[i].style.width = "20px";
        names[i].style.height = "20px";
        names[i].style.background = "lightgreen"; // lightgreen
       // names[i].style.color = "black";
        names[i].style.color = "yellow";
        names[i].style.fontSize = "bolder";
        names[i].style.fontFamily = "Arial";
        names[i].style.fontSize = "12px";

        y += 25;
        names[i].style.left = y + "px";
        graph_rdiv_axisX.appendChild(names[i]);

        if (i === 0)
            text = document.createTextNode("" + num);
        else {
            num += 10;
            text = document.createTextNode("" + num);
        }

        names[i].appendChild(text);

    }

    var name_x;
    name_x = createPatternDiv(25, 310, 20, 20, 16, "%", name_x, graph_rdiv_axisX);
    name_x.style.paddingLeft = "1px";
    
    
    var smallVertLine = document.createElement("DIV");
    smallVertLine.style.position = "absolute";
    smallVertLine.style.top = "30px";
    smallVertLine.style.left = "40px";
    smallVertLine.style.width = "2px";
    smallVertLine.style.height = "20px";
    smallVertLine.style.background = "gray";
    graph_rdiv_axisX.appendChild(smallVertLine);
}

// -----------------------------------------------------------------------------

function createPatternRandomDiv(top, left, w, h, fs, text, x, parent)
{
    x = document.createElement("DIV");
    x.style.position = "absolute";
    x.style.top = top + "px";
    x.style.left = left + "px";
    x.style.width = w + "px";
    x.style.height = h + "px";
    x.style.paddingTop = "1px";
    x.style.paddingLeft = "18px";
    x.style.background = "green"; //lightgreen
    x.style.color = "black";
    x.style.fontFamily = "Arial";
    x.style.fontSize = fs + "px";

    var t = document.createTextNode("" + text);
    x.appendChild(t);

    parent.appendChild(x);

    return x;
}


function hideGraphStatistics()
{
    graph_rdiv.style.display = "none";
}

function showGraphStatistics()
{
    graph_rdiv.style.display = "inline";
}

var randomName = [];
function setRandomName(len)
{
    var x = 50; // 90
    for (var i = 0; i < len; i++)
    {
        if (i === 0)
            // add div with - score -             top left  w  h  f
            randomName[i] = createPatternRandomDiv(x, 220, 85, 40, 18, arr[i], randomName[0], graph_rdiv);
        else
            randomName[i] = createPatternRandomDiv(x += 45, 220, 85, 40, 18, arr[i], randomName[0], graph_rdiv);

        randomName[i].style.verticalAlign = "middle";
        randomName[i].style.paddingLeft = "1px";
        randomName[i].style.textAlign = "left";
        randomName[i].style.background = "green";  //lightgreen
        randomName[i].style.color = "gray";
    }

}

// ---------------------------- listeners --------------------------------------


// when mouse enter in each graph div should appear line for each graph div
var rdLinesGood_div, rdLinesError_div, rdLinesEmpty_div;
//
var ronlyGoodPrct_div, ronlyErrorPrct_div, ronlyEmptyPrct_div; // div for percent
var ronlyGoodPrct, ronlyErrorPrct, ronlyEmptyPrct; //  percent score


//--------------------------------- graph_Lines --------------------------------

function collectAllGraphsTo_all()
{
    // hide divs with  graphics %
    graph_onlyGood.style.display = "none";
    graph_onlyError.style.display = "none";
    graph_onlyEmpty.style.display = "none";

    graph_All.style.opacity = 0.2;


    //--------------------- calculation ----------------------------------------
    var good = (onlyGood_score / All_score) * 300;
    graph_onlyGood.style.height = good + "px";
    graph_onlyGood.style.top = 325 - good + "px";
    graph_onlyGood.clientHeight = good;

    var error = (onlyError_score / All_score) * 300;
    graph_onlyError.style.height = error + "px";
    graph_onlyError.style.top = 325 - error - good + "px";
    graph_onlyError.style.height = 325 - 25 - good - empty + "px";

    // alert(graph_onlyError.style.height + "   " + graph_onlyGood.clientHeight); 
    var empty = (onlyEmpty_score / All_score) * 300;
    graph_onlyEmpty.style.top = 325 - good - empty - error + "px";
    graph_onlyEmpty.style.height = 325 - 25 - good - error + "px";


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

function createRandomPatternPercentLines_2()
{
    //                                 top left  w   h
    rdLinesEmpty_div = createPatternDiv(27, 40, 2, 63 + 100, 16, "", rdLinesEmpty_div, graph_rdiv);

    rdLinesEmpty_div.style.paddingTop = "0px";
    rdLinesEmpty_div.style.paddingLeft = "0px";
    rdLinesEmpty_div.style.background = "gray";

    var r2 = (arrRandomCnt[2] / rAll_score) * 250;
    rdLinesEmpty_div.style.left = 43 + r2 + "px";

    // show --empty--  percents
    ronlyEmptyPrct = (arrRandomCnt[2] / rAll_score) * 100;
    ronlyEmptyPrct = ronlyEmptyPrct.toPrecision(4) + "%";
    ronlyEmptyPrct_div = createPatternDiv(90 + 110, 42, 70, 17, 20, ronlyEmptyPrct, ronlyEmptyPrct_div, graph_rdiv);

    ronlyEmptyPrct_div.style.left = 48 + r2 + "px";
    ronlyEmptyPrct_div.style.textAlign = "center";
    ronlyEmptyPrct_div.style.color = "gray";
    ronlyEmptyPrct_div.style.paddingLeft = "0px";

//    onlyEmptyPrct_div.style.top = 325 - 22 - empty + "px";
}

function createRandomPatternPercentLines_1()
{
    //                                 top left  w   h
    rdLinesError_div = createPatternDiv(27, 40, 2, 63 + 50, 16, "", rdLinesError_div, graph_rdiv);

    rdLinesError_div.style.paddingTop = "0px";
    rdLinesError_div.style.paddingLeft = "0px";
    rdLinesError_div.style.background = "red";

    var r1 = (arrRandomCnt[1] / rAll_score) * 250;
    rdLinesError_div.style.left = 43 + r1 + "px";

    // show --error--  percents
    ronlyErrorPrct = (arrRandomCnt[1] / rAll_score) * 100;
    ronlyErrorPrct = ronlyErrorPrct.toPrecision(4) + "%";
    ronlyErrorPrct_div = createPatternDiv(90 + 60, 42, 70, 17, 20, ronlyErrorPrct, ronlyErrorPrct_div, graph_rdiv);

    ronlyErrorPrct_div.style.left = 48 + r1 + "px";
    ronlyErrorPrct_div.style.textAlign = "center";
    ronlyErrorPrct_div.style.color = "red";
    ronlyErrorPrct_div.style.paddingLeft = "0px";

    // ronlyErrorPrct_div.style.top = "130px";
}

function createRandomPatternPercentLines_0()
{
    //                                top left  w   h
    rdLinesGood_div = createPatternDiv(27, 40, 2, 63, 16, "", rdLinesGood_div, graph_rdiv);

    rdLinesGood_div.style.paddingTop = "0px";
    rdLinesGood_div.style.paddingLeft = "0px";
    rdLinesGood_div.style.background = "black";

    var r0 = (arrRandomCnt[0] / rAll_score) * 250;
    rdLinesGood_div.style.left = 43 + r0 + "px";

    // show --good--  percents
    ronlyGoodPrct = (arrRandomCnt[0] / rAll_score) * 100;
    ronlyGoodPrct = ronlyGoodPrct.toPrecision(4) + "%";
    ronlyGoodPrct_div = createPatternDiv(90 + 10, 42, 70, 17, 20, ronlyGoodPrct, ronlyGoodPrct_div, graph_rdiv);

    ronlyGoodPrct_div.style.left = 48 + r0 + "px";
    ronlyGoodPrct_div.style.textAlign = "center";
    ronlyGoodPrct_div.style.color = "green";
    ronlyGoodPrct_div.style.paddingLeft = "0px";

//    ronlyGoodPrct_div.style.top = "100px";
}

var smallLines = [];
var lines = [];   // div lines
var prctDiv = []; // div for displaying percents
function createRandomPatternPercentLines_test(i, ind, height, top)
{
    //                     27  top  left w  h63     10
    lines[i] = createPatternDiv(0, 40,  2, 63 + height, 16, "", lines[i], graph_rdiv );  //   

    lines[i].style.paddingTop = "0px";
    lines[i].style.paddingLeft = "0px";
    lines[i].style.background = "black";

    var r0 = (arrRandomCnt[ind] / rAll_score) * 250;
    lines[i].style.left = 43 + r0 + "px";

    // show --good--  percents
    var prct = (arrRandomCnt[ind] / rAll_score) * 100;
    prct = prct.toPrecision(4) + "%";
    //                                              17                                           
    prctDiv[i] = createPatternDiv(90 + top, 42, 70, 17, 20, prct, prctDiv[i], graph_rdiv);

    prctDiv[i].style.left = 48 + r0 + "px";
    prctDiv[i].style.textAlign = "center";
    prctDiv[i].style.color = "green";
    prctDiv[i].style.paddingLeft = "0px";
    
    //                              top left w  h63     10
    smallLines[i] = createPatternDiv(25, 40,  2, 63 , 16, "", smallLines[i], graph_rdiv_axisX );  //   

    smallLines[i].style.paddingTop = "0px";
    smallLines[i].style.paddingLeft = "0px";
    smallLines[i].style.background = "black";
    
    smallLines[i].style.left = 43 + r0 + "px"; 
}

function removeRandomPatternPercentLines_test(i)
{
    // remove line 
    graph_rdiv_axisX.removeChild(smallLines[i]);
    graph_rdiv.removeChild(lines[i]);
    graph_rdiv.removeChild(prctDiv[i]);
}

function removeRandomPatternPercentLines_2()
{
    // remove line from empty DIV
    graph_rdiv.removeChild(rdLinesEmpty_div);
    graph_rdiv.removeChild(ronlyEmptyPrct_div);
}

function removeRandomPatternPercentLines_1()
{
    // remove line from error DIV
    graph_rdiv.removeChild(rdLinesError_div);
    graph_rdiv.removeChild(ronlyErrorPrct_div);
}

function removeRandomPatternPercentLines_0()
{
    // remove line from good DIV
    graph_rdiv.removeChild(rdLinesGood_div);
    graph_rdiv.removeChild(ronlyGoodPrct_div);
}



function evnt_listener_random_test(elmt, iii)
{
//    for(var i = 0; i < len; i++)
//      {
//        var ii = iii;
    elmt.addEventListener("mouseover", function(ii) {
        //                                   i, ind, height,       top
        var height = 0;
        var top = 10;
        var i = ii;
        createRandomPatternPercentLines_test(i++, i++, height += 50, top += 50);
    });
    elmt.addEventListener("mouseout", function(ii) {
        var i = ii;
        removeRandomPatternPercentLines_test(i++);
    });
//      }   
}

function remove_evnt_listener(elmt)
{
    elmt.removeEventListener("click");
}

function setBaseGraphics(val)
{
    
        setAxesRandomX();
        setAxesRandomY();
        thresholdRandom_X();

        // create random dynamic DIVs
        createDynamicGraphDivs(val);

        // from file randomCnts.js
        initAllCnts();
        
        // add div with - score -      
        createGraphScoreDivs(val);
        
       // getRandomScores(5);

        setRandomName(val);
}


function evnt_listener_random(elmt, divGraph)
{
    switch (divGraph)
    {
        case -1:
            elmt.addEventListener("mouseover", collectAllGraphsTo_all);
            elmt.addEventListener("mouseout", removeAllGraphsFrom_all);
            break;
        case 0:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(0, 0, -13, -30); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(0); });
            break;
        case 1:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(1, 1, 32, 15); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(1); });
            break;
        case 2:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(2, 2, 77, 60); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(2); });
            break;
        case 3:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(3, 3, 122, 105); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(3); });
            break;
        case 4:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(4, 4, 167, 150); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(4); });
            break;
        case 5:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(5, 5, 212, 195); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(5); });
            break;
        case 6:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(6, 6, 257, 240); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(6); });
            break;
            
        case 7:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(7, 7, 302, 285); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(7); });
            break;    
        case 8:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(8, 8, 347, 330); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(8); });
            break; 
        case 9:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(9, 9, 392, 375); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(9); });
            break;
        case 10:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(10, 10, 437, 420); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(10); });
            break;  
        case 11:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(11, 11, 482, 465); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(11); });
            break;
        case 12:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(12, 12, 527, 510); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(12); });
            break; 
        case 13:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(13, 13, 572, 555); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(13); });
            break;
        case 14:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(14, 14, 617, 600); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(14); });
            break;
        case 15:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(15, 15, 662, 645); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(15); });
            break;
        case 16:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(16, 16, 707, 690); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(16); });
            break; 
        case 17:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(17, 17, 752, 735); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(17); });
            break;
        case 18:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(18, 18, 797, 780); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(18); });
            break;
        case 19:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(19, 19, 842, 825); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(19); });
            break;
        case 20:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(20, 20, 887, 870); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(20); });
            break;
        case 21:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(21, 21, 932, 915); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(21); });
            break;
        case 22:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(22, 22, 977, 960); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(22); });
            break;
        case 23:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(23, 23, 1022, 1005); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(23); });
            break;
        case 24:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(24, 24, 1067, 1050); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(24); });
            break;
        case 25:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(25, 25, 1112, 1095); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(25); });
            break;
        case 26:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(26, 26, 1157, 1140); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(26); });
            break;
        case 27:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(27, 27, 1202, 1185); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(27); });
            break;
        case 28:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(28, 28, 1247, 1230); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(28); });
            break;
        case 29:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(29, 29, 1292, 1275); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(29); });
            break; 
        case 30:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(30, 30, 1337, 1320); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(30); });
            break;
        case 31:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(31, 31, 1382, 1365); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(31); });
            break; 
        case 32:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(32, 32, 1427, 1410); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(32); });
            break;
        case 33:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(33, 33, 1472, 1455); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(33); });
            break;
        case 34:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(34, 34, 1517, 1500); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(34); });
            break; 
        case 35:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(35, 35, 1562, 1545); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(35); });
            break; 
        case 36:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(36, 36, 1607, 1590); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(36); });
            break; 
        case 37:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(37, 37, 1652, 1635); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(37); });
            break; 
        case 38:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(38, 38, 1697, 1680); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(38); });
            break;
        case 39:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(39, 39, 1742, 1725); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(39); });
            break; 
        case 40:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(40, 40, 1787, 1770); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(40); });
            break;  
        case 41:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(41, 41, 1832, 1815); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(41); });
            break; 
        case 42:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(42, 42, 1877, 1860); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(42); });
            break; 
        case 43:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(43, 43, 1922, 1905); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(43); });
            break; 
        case 44:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(44, 44, 1967, 1950); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(44); });
            break; 
        case 45:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(45, 45, 2012, 1995); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(45); });
            break; 
        case 46:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(46, 46, 2057, 2040); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(46); });
            break; 
        case 47:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(47, 47, 2102, 2085); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(47); });
            break; 
        case 48:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(48, 48, 2147, 2130); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(48); });
            break; 
        case 49:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(49, 49, 2192, 2175); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(49); });
            break; 
        case 50:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(50, 50, 2237, 2220); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(50); });
            break; 
        case 51:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(51, 51, 2282, 2265); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(51); });
            break; 
        case 52:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(52, 52, 2327, 2310); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(52); });
            break; 
        case 53:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(53, 53, 2372, 2355); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(53); });
            break; 
        case 54:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(54, 54, 2417, 2400); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(54); });
            break; 
        case 55:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(55, 55, 2462, 2445); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(55); });
            break; 
        case 56:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(56, 56, 2507, 2490); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(56); });
            break; 
        case 57:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(57, 57, 2552, 2535); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(57); });
            break; 
        case 58:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(58, 58, 2597, 2580); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(58); });
            break; 
        case 59:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(59, 59, 2642, 2625); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(59); });
            break; 
        case 60:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(60, 60, 2687, 2670); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(60); });
            break; 
        case 61:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(61, 61, 2732, 2715); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(61); });
            break; 
        case 62:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(62, 62, 2777, 2760); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(62); });
            break; 
        case 63:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(63, 63, 2822, 2805); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(63); });
            break; 
        case 64:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(64, 64, 2867, 2850); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(64); });
            break; 
        case 65:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(65, 65, 2912, 2895); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(65); });
            break; 
        case 66:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(66, 66, 2957, 2940); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(66); });
            break; 
        case 67:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(67, 67, 3002, 2985); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(67); });
            break; 
        case 68:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(68, 68, 3047, 3030); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(68); });
            break; 
        case 69:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(69, 69, 3092, 3075); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(69); });
            break; 
        case 70:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(70, 70, 3137, 3120); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(70); });
            break; 
        case 71:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(71, 71, 3182, 3165); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(71); });
            break; 
        case 72:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(72, 72, 3227, 3210); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(72); });
            break; 
        case 73:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(73, 73, 3272, 3255); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(73); });
            break; 
        case 74:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(74, 74, 3317, 3300); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(74); });
            break; 
        case 75:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(75, 75, 3362, 3345); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(75); });
            break; 
        case 76:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(76, 76, 3407, 3390); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(76); });
            break; 
        case 77:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(77, 77, 3452, 3435); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(77); });
            break; 
        case 78:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(78, 78, 3497, 3480); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(78); });
            break; 
        case 79:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(79, 79, 3542, 3525); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(79); });
            break; 
        case 80:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(80, 80, 3587, 3570); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(80); });
            break; 
        case 81:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(81, 81, 3632, 3615); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(81); });
            break; 
        case 82:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(82, 82, 3677, 3660); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(82); });
            break; 
        case 83:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(83, 83, 3722, 3705); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(83); });
            break; 
        case 84:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(84, 84, 3767, 3750); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(84); });
            break; 
        case 85:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(85, 85, 3812, 3795); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(85); });
            break; 
        case 86:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(86, 86, 3857, 3840); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(86); });
            break; 
        case 87:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(87, 87, 3902, 3885); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(87); });
            break; 
        case 88:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(88, 88, 3947, 3930); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(88); });
            break; 
        case 89:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(89, 89, 3992, 3975); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(89); });
            break; 
        case 90:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(90, 90, 4037, 4020); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(90); });
            break; 
        case 91:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(91, 91, 4082, 4065); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(91); });
            break; 
        case 92:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(92, 92, 4127, 4110); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(92); });
            break; 
        case 93:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(93, 93, 4172, 4155); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(93); });
            break; 
        case 94:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(94, 94, 4217, 4200); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(94); });
            break; 
        case 95:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(95, 95, 4262, 4245); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(95); });
            break; 
        case 96:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(96, 96, 4307, 4290); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(96); });
            break; 
        case 97:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(97, 97, 4352, 4335); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(97); });
            break; 
        case 98:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(98, 98, 4397, 4380); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(98); });
            break; 
        case 99:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(99, 99, 4442, 4425); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(99); });
            break; 
        case 100:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(100, 100, 4487, 4470); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(100); });
            break; 
        case 101:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(101, 101, 4532, 4515); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(101); });
            break; 
        case 102:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(102, 102, 4577, 4560); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(102); });
            break; 
        case 103:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(103, 103, 4622, 4605); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(103); });
            break; 
        case 104:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(104, 104, 4667, 4650); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(104); });
            break; 
        case 105:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(105, 105, 4712, 4695); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(105); });
            break; 
        case 106:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(106, 106, 4757, 4740); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(106); });
            break; 
        case 107:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(107, 107, 4802, 4785); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(107); });
            break; 
        case 108:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(108, 108, 4847, 4830); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(108); });
            break; 
        case 109:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(109, 109, 4892, 4875); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(109); });
            break; 
        case 110:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(110, 110, 4937, 4920); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(110); });
            break; 
        case 111:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(111, 111, 4982, 4975); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(111); });
            break; 
        case 112:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(112, 112, 5027, 5010); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(112); });
            break; 
        case 113:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(113, 113, 5072, 5055); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(113); });
            break; 
        case 114:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(114, 114, 5117, 5100); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(114); });
            break; 
        case 115:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(115, 115, 5162, 5145); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(115); });
            break; 
        case 116:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(116, 116, 5207, 5190); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(116); });
            break; 
        case 117:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(117, 117, 5252, 5235); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(117); });
            break; 
        case 118:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(118, 118, 5297, 5280); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(118); });
            break; 
        case 119:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(119, 119, 5342, 5325); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(119); });
            break; 
        case 120:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(120, 120, 5387, 5370); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(120); });
            break; 
        case 121:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(121, 121, 5432, 5415); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(121); });
            break; 
        case 122:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(122, 122, 5477, 5460); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(122); });
            break; 
        case 123:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(123, 123, 5522, 5505); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(123); });
            break; 
        case 124:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(124, 124, 5567, 5550); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(124); });
            break; 
        case 125:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(125, 125, 5612, 5595); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(125); });
            break; 
        case 126:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(126, 126, 5657, 5640); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(126); });
            break; 
        case 127:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(127, 127, 5702, 5685); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(127); });
            break; 
        case 128:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(128, 128, 5747, 5730); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(128); });
            break; 
        case 129:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(129, 129, 5792, 5775); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(129); });
            break; 
        case 130:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(130, 130, 5837, 5820); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(130); });
            break; 
        case 131:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(131, 131, 5882, 5865); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(131); });
            break; 
        case 132:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(132, 132, 5927, 5910); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(132); });
            break; 
        case 133:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(133, 133, 5972, 5955); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(133); });
            break; 
        case 134:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(134, 134, 6017, 6000); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(134); });
            break; 
        case 135:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(135, 135, 6062, 6045); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(135); });
            break; 
        case 136:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(136, 136, 6107, 6090); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(136); });
            break; 
        case 137:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(137, 137, 6152, 6135); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(137); });
            break; 
        case 138:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(138, 138, 6197, 6180); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(138); });
            break; 
        case 139:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(139, 139, 6242, 6225); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(139); });
            break; 
        case 140:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(140, 140, 6287, 6270); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(140); });
            break; 
        case 141:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(141, 141, 6332, 6315); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(141); });
            break; 
        case 142:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(142, 142, 6377, 6360); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(142); });
            break; 
        case 143:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(143, 143, 6422, 6405); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(143); });
            break; 
        case 144:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(144, 144, 6467, 6450); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(144); });
            break; 
        case 145:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(145, 145, 6512, 6495); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(145); });
            break; 
        case 146:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(146, 146, 6557, 6540); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(146); });
            break; 
        case 147:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(147, 147, 6602, 6585); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(147); });
            break; 
        case 148:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(148, 148, 6647, 6630); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(148); });
            break; 
        case 149:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(149, 149, 6692, 6675); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(149); });
            break; 
        case 150:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(150, 150, 6737, 6720); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(150); });
            break; 
        case 151:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(151, 151, 6782, 6765); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(151); });
            break; 
        case 152:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(152, 152, 6827, 6810); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(152); });
            break; 
        case 153:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(153, 153, 6872, 6855); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(153); });
            break; 
        case 154:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(154, 154, 6917, 6900); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(154); });
            break; 
        case 155:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(155, 155, 6962, 6945); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(155); });
            break; 
        case 156:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(156, 156, 7007, 6990); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(156); });
            break; 
        case 157:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(157, 157, 7052, 7035); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(157); });
            break; 
        case 158:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(158, 158, 7097, 7080); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(158); });
            break; 
        case 159:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(159, 159, 7142, 7125); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(159); });
            break; 
        case 160:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(160, 160, 7187, 7170); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(160); });
            break; 
        case 161:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(161, 161, 7232, 7215); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(161); });
            break; 
        case 162:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(162, 162, 7277, 7260); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(162); });
            break; 
        case 163:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(163, 163, 7322, 7305); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(163); });
            break; 
        case 164:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(164, 164, 7367, 7350); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(164); });
            break; 
        case 165:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(165, 165, 7412, 7395); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(165); });
            break; 
        case 166:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(166, 166, 7457, 7440); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(166); });
            break; 
        case 167:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(167, 167, 7502, 7485); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(167); });
            break; 
        case 168:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(168, 168, 7547, 7530); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(168); });
            break; 
        case 169:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(169, 169, 7592, 7575); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(169); });
            break; 
        case 170:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(170, 170, 7637, 7620); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(170); });
            break; 
        case 171:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(171, 171, 7682, 7665); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(171); });
            break; 
        case 172:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(172, 172, 7727, 7710); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(172); });
            break; 
        case 173:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(173, 173, 7772, 7755); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(173); });
            break; 
        case 174:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(174, 174, 7817, 7800); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(174); });
            break; 
        case 175:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(175, 175, 7862, 7845); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(175); });
            break; 
        case 176:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(176, 176, 7907, 7890); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(176); });
            break; 
        case 177:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(177, 177, 7952, 7935); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(177); });
            break; 
        case 178:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(178, 178, 7997, 7980); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(178); });
            break; 
        case 179:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(179, 179, 8042, 8025); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(179); });
            break; 
        case 180:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(180, 180, 8087, 8070); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(180); });
            break; 
        case 181:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(181, 181, 8132, 8115); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(181); });
            break; 
        case 182:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(182, 182, 8177, 8160); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(182); });
            break; 
        case 183:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(183, 183, 8222, 8205); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(183); });
            break; 
        case 184:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(184, 184, 8267, 8250); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(184); });
            break; 
        case 185:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(185, 185, 8312, 8295); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(185); });
            break; 
        case 186:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(186, 186, 8357, 8340); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(186); });
            break; 
        case 187:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(187, 187, 8402, 8385); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(187); });
            break; 
        case 188:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(188, 188, 8447, 8430); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(188); });
            break; 
        case 189:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(189, 189, 8492, 8475); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(189); });
            break; 
        case 190:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(190, 190, 8537, 8520); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(190); });
            break; 
        case 191:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(191, 191, 8582, 8565); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(191); });
            break; 
        case 192:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(192, 192, 8627, 8610); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(192); });
            break; 
        case 193:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(193, 193, 8672, 8655); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(193); });
            break; 
        case 194:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(194, 194, 8717, 8700); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(194); });
            break; 
        case 195:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(195, 195, 8762, 8745); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(195); });
            break; 
        case 196:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(196, 196, 8807, 8790); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(196); });
            break; 
        case 197:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(197, 197, 8852, 8835); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(197); });
            break; 
        case 198:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(198, 198, 8897, 8880); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(198); });
            break; 
        case 199:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(199, 199, 8942, 8925); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(199); });
            break; 
        case 200:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(200, 200, 8987, 8970); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(200); });
            break; 
        case 201:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(201, 201, 9032, 9015); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(201); });
            break; 
        case 202:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(202, 202, 9077, 9060); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(202); });
            break; 
        case 203:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(203, 203, 9122, 9105); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(203); });
            break; 
        case 204:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(204, 204, 9167, 9150); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(204); });
            break; 
        case 205:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(205, 205, 9212, 9195); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(205); });
            break; 
        case 206:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(206, 206, 9257, 9240); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(206); });
            break; 
        case 207:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(207, 207, 9302, 9285); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(207); });
            break; 
        case 208:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(208, 208, 9347, 9330); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(208); });
            break; 
        case 209:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(209, 209, 9392, 9375); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(209); });
            break; 
        case 210:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(210, 210, 9437, 9420); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(210); });
            break; 
        case 211:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(211, 211, 9482, 9465); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(211); });
            break; 
        case 212:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(212, 212, 9527, 9510); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(212); });
            break; 
        case 213:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(213, 213, 9572, 9555); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(213); });
            break; 
        case 214:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(214, 214, 9617, 9600); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(214); });
            break; 
        case 215:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(215, 215, 9662, 9645); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(215); });
            break; 
        case 216:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(216, 216, 9707, 9690); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(216); });
            break; 
        case 217:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(217, 217, 9752, 9735); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(217); });
            break; 
        case 218:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(218, 218, 9797, 9780); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(218); });
            break; 
        case 219:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(219, 219, 9842, 9825); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(219); });
            break; 
        case 220:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(220, 220, 9887, 9870); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(220); });
            break; 
        case 221:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(221, 221, 9932, 9915); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(221); });
            break; 
        case 222:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(222, 222, 9977, 9960); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(222); });
            break; 
        case 223:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(223, 223, 10022, 10005); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(223); });
            break; 
        case 224:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(224, 224, 10067, 10050); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(224); });
            break; 
        case 225:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(225, 225, 10112, 10095); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(225); });
            break; 
        case 226:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(226, 226, 10157, 10140); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(226); });
            break; 
        case 227:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(227, 227, 10202, 10185); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(227); });
            break; 
        case 228:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(228, 228, 10247, 10230); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(228); });
            break; 
        case 229:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(229, 229, 10292, 10275); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(229); });
            break; 
        case 230:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(230, 230, 10337, 10320); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(230); });
            break; 
        case 231:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(231, 231, 10382, 10365); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(231); });
            break; 
        case 232:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(232, 232, 10427, 10410); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(232); });
            break; 
        case 233:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(233, 233, 10472, 10455); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(233); });
            break; 
        case 234:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(234, 234, 10517, 10500); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(234); });
            break; 
        case 235:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(235, 235, 10562, 10545); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(235); });
            break; 
        case 236:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(236, 236, 10607, 10590); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(236); });
            break; 
        case 237:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(237, 237, 10652, 10635); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(237); });
            break; 
        case 238:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(238, 238, 10697, 10680); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(238); });
            break; 
        case 239:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(239, 239, 10742, 10725); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(239); });
            break; 
        case 240:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(240, 240, 10787, 10770); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(240); });
            break; 
        case 241:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(241, 241, 10832, 10815); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(241); });
            break; 
        case 242:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(242, 242, 10877, 10860); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(242); });
            break; 
        case 243:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(243, 243, 10922, 10905); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(243); });
            break; 
        case 244:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(244, 244, 10967, 10950); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(244); });
            break; 
        case 245:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(245, 245, 11012, 10995); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(245); });
            break; 
        case 246:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(246, 246, 11057, 11040); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(246); });
            break; 
        case 247:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(247, 247, 11102, 11085); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(247); });
            break; 
        case 248:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(248, 248, 11147, 11130); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(248); });
            break; 
        case 249:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(249, 249, 11192, 11175); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(249); });
            break; 
        case 250:
            elmt.addEventListener("mouseover",function() { createRandomPatternPercentLines_test(250, 250, 11237, 11220); });
            elmt.addEventListener("mouseout", function() { removeRandomPatternPercentLines_test(250); });
            break; 
                    
    }
}


