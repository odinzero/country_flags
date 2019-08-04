
var clicked1 = true; // if true checkbox 'noSort'      is selected
var clicked2 = true; // if true checkbox 'rightSort'   is selected
var clicked3 = true; // if true checkbox 'reverseSort' is selected

var clicked4 = true; // if true checkbox 'russianNames' is selected
var clicked5 = true; // if true checkbox 'englishNames' is selected

var checkbox1_div = document.createElement("DIV");
var box_noSort = document.createElement("INPUT");
var label1 = document.createElement("LABEL");

var checkbox2_div = document.createElement("DIV");
var box_rightOrder = document.createElement("INPUT");
var label2 = document.createElement("LABEL");

var checkbox3_div = document.createElement("DIV");
var box_reverseOrder = document.createElement("INPUT");
var label3 = document.createElement("LABEL");

var checkbox4_div = document.createElement("DIV");
var box_russLang = document.createElement("INPUT");
var label4 = document.createElement("LABEL");

var checkbox5_div = document.createElement("DIV");
var box_engLang = document.createElement("INPUT");
var label5 = document.createElement("LABEL");

var sel_div = document.createElement("DIV");
sel_div.style.position = "absolute";
sel_div.style.width = "600px";
sel_div.style.height = "430px";
setPositionElementInCenter(sel_div); // from file:statisticsMenu.js
sel_div.style.top = "100px";
sel_div.style.fontFamily = "Arial";
sel_div.style.background = "#66ff66";
sel_div.style.border = "2px solid #ffccff";
sel_div.style.borderRadius = "4px 4px";
sel_div.style.boxShadow = "0 0 10px #000000";
sel_div.style.display = "none";
document.body.appendChild(sel_div);

var select1 = document.createElement("SELECT");
select1.setAttribute("id", "mySelect1");
select1.style.position = "relative";
select1.style.top = "45px";
select1.style.left = "50px";
select1.style.width = "200px";
select1.style.height = "250px";
select1.style.fontFamily = "Arial";
select1.style.background = "wheat";
select1.style.color = "#9999ff";
select1.style.fontSize = "17px";
select1.style.border = "2px solid #ffccff";
select1.style.borderRadius = "4px 4px";
select1.style.boxShadow = "0 0 10px #000000";
select1.name = "list1";
select1.size = "5";
select1.multiple = true;
sel_div.appendChild(select1);

var butR = document.createElement("BUTTON");
butR.setAttribute("id", "button_right");
butR.style.position = "absolute";
butR.style.top = "120px";
butR.style.left = "277px";
butR.style.fontSize = "22px";
butR.style.color = "#9999ff";
var text = document.createTextNode(" >> ");
butR.appendChild(text);
sel_div.appendChild(butR);

var butL = document.createElement("BUTTON");
butL.setAttribute("id", "button_left");
butL.style.position = "absolute";
butL.style.top = "160px";
butL.style.left = "277px";
butL.style.fontSize = "22px";
butL.style.color = "#9999ff";
var text = document.createTextNode(" << ");
butL.appendChild(text);
sel_div.appendChild(butL);

var butReset = document.createElement("BUTTON");
butReset.setAttribute("id", "button_reset");
butReset.style.position = "absolute";
butReset.style.top = "200px";
butReset.style.left = "270px";
butReset.style.fontSize = "22px";
butReset.style.color = "#9999ff";
var text = document.createTextNode("< - >");
butReset.appendChild(text);
sel_div.appendChild(butReset);

var select2 = document.createElement("SELECT");
select2.setAttribute("id", "mySelect2");
select2.style.position = "absolute";
select2.style.top = "45px";
select2.style.right = "50px";
select2.style.width = "200px";
select2.style.height = "250px";
select2.style.fontFamily = "Arial";
select2.style.background = "wheat";
select2.style.color = "#9999ff";
select2.style.fontSize = "17px";
select2.style.border = "2px solid #ffccff";
select2.style.borderRadius = "4px 4px";
select2.style.boxShadow = "0 0 10px #000000";
select2.name = "list2";
select2.size = "5";
select2.multiple = true;
sel_div.appendChild(select2);

var option = document.createElement("option");
// option.setAttribute("value", "1");
// option.value = 1;
var text = document.createTextNode("Volvo");
option.appendChild(text);

var option1 = document.createElement("option");
// option1.setAttribute("value", "2");
var text = document.createTextNode("Mazda");
option1.appendChild(text);

//select1.appendChild(option);
//select1.appendChild(option1);
// ------------------------------------------------------------------------- transferAllOptions()
butR.addEventListener("click", function() {
    move(select1, select2);
    initSelector2();
    resetLabels();
    //alert(select2.length);
});
butL.addEventListener("click", function() {
    move(select2, select1);
    initSelector2();
    resetLabels();
});  
butReset.addEventListener("click", function() {
//    move(select2, select1);
//    initSelector2();
    transferAllOptions();
    resetLabels();
}); 
//  -------------------------- checkBox 1 -----------------------------------               
checkbox1_div.style.position = "relative";
checkbox1_div.style.top = "60px";
checkbox1_div.style.left = "50px";
checkbox1_div.style.width = "200px";
checkbox1_div.style.marginBottom = "5px";
checkbox1_div.style.background = "#ccff00";
sel_div.appendChild(checkbox1_div);

box_noSort.type = "checkbox";
box_noSort.setAttribute("id", "noSort");
// - event listener -
box_noSort.addEventListener("click", function() {
    noSorting();
    onlyOneChecked(true, false, false);
});
checkbox1_div.appendChild(box_noSort);

label1.style.color = "#9999ff";
label1.style.fontSize = "18px";
label1.style.boxShadow = '0 0 0 #f80';
var text = document.createTextNode("no Order");
label1.appendChild(text);
checkbox1_div.appendChild(label1);

// -------------------------- checkBox 2 -----------------------------------        
checkbox2_div.style.position = "relative";
checkbox2_div.style.top = "60px";
checkbox2_div.style.left = "50px";
checkbox2_div.style.width = "200px";
checkbox2_div.style.marginBottom = "5px";
checkbox2_div.style.background = "#ccff00";
sel_div.appendChild(checkbox2_div);

box_rightOrder.type = "checkbox";
box_rightOrder.checked = clicked2;
box_rightOrder.setAttribute("id", "rightSort");
// - event listener -
box_rightOrder.addEventListener("click", function() {
    rightOrder1(select2);
    onlyOneChecked(false, true, false);
});
checkbox2_div.appendChild(box_rightOrder);

label2.style.color = "#9999ff";
label2.style.fontSize = "18px";
label2.style.boxShadow = '0 0 0 #f80';
var text = document.createTextNode("Right Order");
label2.appendChild(text);
checkbox2_div.appendChild(label2);

// -------------------------- checkBox 3 --------------------------------------
checkbox3_div.style.position = "relative";
checkbox3_div.style.top = "60px";
checkbox3_div.style.left = "50px";
checkbox3_div.style.width = "200px";
checkbox3_div.style.marginBottom = "5px";
checkbox3_div.style.background = "#ccff00";
sel_div.appendChild(checkbox3_div);

box_reverseOrder.type = "checkbox";
box_reverseOrder.setAttribute("id", "reverseSort");
// - event listener -
box_reverseOrder.addEventListener("click", function() {
    reverseOrder1(select2);
    onlyOneChecked(false, false, true);
});
checkbox3_div.appendChild(box_reverseOrder);

label3.style.color = "#9999ff";
label3.style.fontSize = "18px";
label3.style.boxShadow = '0 0 0 #f80';
var text = document.createTextNode("Reverse Order");
label3.appendChild(text);
checkbox3_div.appendChild(label3);

//   only onecheckbox should be selected  
function onlyOneChecked(clicked1, clicked2, clicked3)
{
    if (clicked1) {
        this.clicked1 = clicked1;
        this.clicked2 = false;
        this.clicked3 = false;
        box_noSort.checked = this.clicked1;
        box_rightOrder.checked = this.clicked2;
        box_reverseOrder.checked = this.clicked3;
    }
    if (clicked2) {
        this.clicked1 = false;
        this.clicked3 = false;
        this.clicked2 = clicked2;
        box_noSort.checked = this.clicked1;
        box_rightOrder.checked = this.clicked2;
        box_reverseOrder.checked = this.clicked3;
    }
    if (clicked3) {
        this.clicked1 = false;
        this.clicked2 = false;
        this.clicked3 = clicked3;
        box_noSort.checked = this.clicked1;
        box_rightOrder.checked = this.clicked2;
        box_reverseOrder.checked = this.clicked3;
    }
}
// --------------------------- checkBox 4 --------------------------------------
//                           "Russian names"

checkbox4_div.style.position = "absolute";
checkbox4_div.style.top = "310px";
checkbox4_div.style.left = "350px";
checkbox4_div.style.width = "200px";
checkbox4_div.style.marginBottom = "5px";
checkbox4_div.style.background = "#ccff00";
sel_div.appendChild(checkbox4_div);

box_russLang.type = "checkbox";
box_russLang.checked = true;  // ------> selected
box_russLang.setAttribute("id", "reverseSort");
// - event listener -
box_russLang.addEventListener("click", function() {
//    reverseOrder1(select2);
    //  var from file:commonSelector_algorythm.js
    allowRusLang = true;
    setRussCountryNames();
    onlyOneChecked_rus_eng(true, false);
});
checkbox4_div.appendChild(box_russLang);

label4.style.color = "#9999ff";
label4.style.fontSize = "18px";
label4.style.boxShadow = '0 0 0 #f80';
var text = document.createTextNode("Russian Names");
label4.appendChild(text);
checkbox4_div.appendChild(label4);

// --------------------------- checkBox 5 --------------------------------------
//                           "English names"
checkbox5_div.style.position = "absolute";
checkbox5_div.style.top = "350px";
checkbox5_div.style.left = "350px";
checkbox5_div.style.width = "200px";
checkbox5_div.style.marginBottom = "5px";
checkbox5_div.style.background = "#ccff00";
sel_div.appendChild(checkbox5_div);

box_engLang.type = "checkbox";
box_engLang.setAttribute("id", "reverseSort");
// - event listener -
box_engLang.addEventListener("click", function() {
    //  var from file:commonSelector_algorythm.js
    allowRusLang = false;
    setEnglCountryNames();
    onlyOneChecked_rus_eng(false, true);
});
checkbox5_div.appendChild(box_engLang);

label5.style.color = "#9999ff";
label5.style.fontSize = "18px";
label5.style.boxShadow = '0 0 0 #f80';
var text = document.createTextNode("English Names");
label5.appendChild(text);
checkbox5_div.appendChild(label5);

function onlyOneChecked_rus_eng(clicked1, clicked2)
{
    if (clicked1) {
        this.clicked4 = clicked1;
        this.clicked5 = false;
        box_russLang.checked = this.clicked4;
        box_engLang.checked = this.clicked5;
    }
    if (clicked2) {
        this.clicked4 = false;
        this.clicked5 = clicked2;
        box_russLang.checked = this.clicked4;
        box_engLang.checked = this.clicked5;
    }
}

// --------------- BUTTON: "CLOSE", "CANCEL", "X" ------------------------------
var butClose = document.createElement("BUTTON");
butClose.setAttribute("id", "button_close");
butClose.style.position = "absolute";
butClose.style.top = "0px";
butClose.style.right = "0px";
butClose.style.height = "30px";
butClose.style.paddingTop = "-10px";
butClose.style.fontSize = "22px";
butClose.style.color = "#9999ff";
butClose.style.background = "orange";
var text = document.createTextNode(" x ");
butClose.appendChild(text);
butClose.addEventListener("click", function()
{
    sel_div.style.display = "none";
});
sel_div.appendChild(butClose);

var butCancel = document.createElement("BUTTON");
butCancel.setAttribute("id", "button_cancel");
butCancel.style.position = "relative";
butCancel.style.top = "60px";
butCancel.style.left = "210px";
butCancel.style.fontSize = "22px";
butCancel.style.color = "#9999ff";
var text = document.createTextNode(" Cancel ");
butCancel.appendChild(text);
butCancel.addEventListener("click", function()
{
    sel_div.style.display = "none";
});
sel_div.appendChild(butCancel);

var butOK = document.createElement("BUTTON");
butOK.setAttribute("id", "button_ok");
butOK.style.position = "relative";
butOK.style.top = "60px";
butOK.style.left = "230px";
butOK.style.fontSize = "22px";
butOK.style.color = "#9999ff";
var text = document.createTextNode(" OK ");
butOK.appendChild(text);
butOK.addEventListener("click", function()
{
    sel_div.style.display = "none";
});
sel_div.appendChild(butOK);

function showCommonSelector() {
    sel_div.style.display = "block";
}
function hideCommonSelector() {
    sel_div.style.display = "none";
}

// ----------------------------------- LABEL 1 ---------------------------------
var SELECT1 = document.getElementById("mySelect1");
var SELECT2 = document.getElementById("mySelect2");

var labelSelect1 = document.createElement("LABEL");
labelSelect1.setAttribute("id", "label_1");
labelSelect1.style.position = "absolute";
labelSelect1.style.top = "15px";
labelSelect1.style.left = "50px";
labelSelect1.style.color = "#9999ff";
labelSelect1.style.fontSize = "18px";
labelSelect1.style.boxShadow = '0 0 0 #f80';
sel_div.appendChild(labelSelect1);

function resetLabels() {
    $('#label_1').text("");
    $('#label_2').text("");

    $('#label_1').text("Selected: " + SELECT1.options.length);
    $('#label_2').text("Selected: " + SELECT2.options.length);
}
// ----------------------------------- LABEL 2 ---------------------------------
var labelSelect2 = document.createElement("LABEL");
labelSelect2.setAttribute("id", "label_2");
labelSelect2.style.position = "absolute";
labelSelect2.style.top = "15px";
labelSelect2.style.right = "165px";
labelSelect2.style.color = "#9999ff";
labelSelect2.style.fontSize = "18px";
labelSelect2.style.boxShadow = '0 0 0 #f80';
sel_div.appendChild(labelSelect2);

//--------------------- mechanism action ---------------------------------------
var firstTime = true;
var back = [];
var _resetSelects = false;
function initSelector1()
{
    var select1 = document.getElementById("mySelect1");
    var select2 = document.getElementById("mySelect2");

    loadSomething();

    if (firstTime) {
        setTimeout(function()
        {
            //  set rus names of country
            for (var j = 0; j < stateData.length; j++)
                arr1[j] = stateData[j];

            for (var i = 0; i < arr1.length; i++) {
                var o = new Option(arr1[i], i);
                //o.setAttribute("id", "o" + i);

                //  var option = $("#o" + i); 
                //jQuery.data(option, "back", "url(" + flagData[i] + ") no-repeat"); // 
                // alert($("#o" + i).data(option, "background"));
                //  back[i] = jQuery.data(option, "back");
                // alert(back[i]);

                o.style.background = "url(" + flagData[i] + ") no-repeat";
                o.style.backgroundSize = "30%";
                o.style.backgroundPosition = "right";
                o.style.marginRight = "5px";
                o.style.height = "30px";

                select1.options.add(o);
            }
            firstTime = false;
            resetLabels();
        }, 800);
    }
    else {
        for (var i = 0; i < select1.options.length; i++)
            arr1[i] = select1.options[i].text;

        for (var i = 0; i < select2.options.length; i++)
            arr[i] = select2.options[i].text;


    }
}


function initSelector2()
{
    var select2 = document.getElementById("mySelect2");

    arr = [];
    r = 0;

    for (var i = 0; i < select2.options.length; i++)
        arr[i] = select2.options[i].text;

    if (!initRandom)
    {
        reset_(graph_rdiv);
        
        arrRandomCnt = new Array();
        for(var i = 0; i < arr.length; i++)
            arrRandomCnt[i] = 0;
        
        showAll.length = 0;
        
        initRandom = true;
        setRandomBase();
        
        // from file: statistics.js
        clearAll();
        // allow create new statistics
        clearBlock = false;
    }
}

function setRussCountryNames()
{
    var select1 = document.getElementById("mySelect1");
    var select2 = document.getElementById("mySelect2");

    if (allowRusLang) {  // russian names of countries

        arr1 = [];
        for (var i = 0; i < select1.options.length; i++) {
            //arr1[i] = select1.options[i].text;
            transition_eng_rus(select1.options[i], i);
        }

        resetSelect(select1);

        for (var i = 0; i < arr1.length; i++) {
            var o = new Option(arr1[i], i);
//                setImageBackground(o, flagData[i]);
            setRussOrEngBackground(o);
            select1.options.add(o);
        }

        //--------------- select2 --------------
        arr = [];
        for (var i = 0; i < select2.options.length; i++) {
            // arr[i] = select2.options[i].text;
            transition_eng_rus(select2.options[i], i);
        }

        resetSelect(select2);

        for (var i = 0; i < arr.length; i++) {
            var o = new Option(arr[i], i);
//                setImageBackground(o, flagData[i]);
            setRussOrEngBackground(o);
            select2.options.add(o);
        }

    }
}

function setEnglCountryNames()
{
    var select1 = document.getElementById("mySelect1");
    var select2 = document.getElementById("mySelect2");

    if (!allowRusLang) {  // allowRusLang = false  english names of countries 
        // alert("1:  " + select1.options.length + "  " + arr1.length);
        //--------------- select1 --------------
        arr1 = new Array();
        for (var i = 0; i < select1.options.length; i++) {
            //arr1[i] = select1.options[i].text;
            transition_rus_eng(select1.options[i], i);
        }

        resetSelect(select1);

        for (var i = 0; i < arr1.length; i++) {
            var o = new Option(arr1[i], i);
            // setImageBackground(o, flagData[i]);
            setRussOrEngBackground(o);
            select1.options.add(o);
        }
        //--------------- select2 --------------
        arr = new Array();
        for (var i = 0; i < select2.options.length; i++) {
//                arr[i] = select2.options[i].text;
            transition_rus_eng(select2.options[i], i);
        }

        resetSelect(select2);

        for (var i = 0; i < arr.length; i++) {
            var o = new Option(arr[i], i);
            //  setImageBackground(o, flagData[i]);
            setRussOrEngBackground(o);
            select2.options.add(o);
        }

    }
}


function resetSelect(elmt)
{
    var t = elmt.firstChild;
    while (t) {
        elmt.removeChild(t);
        t = elmt.firstChild;
    }
}

function reset_(elmt)
{
    var t = elmt.firstChild;
    while (t) {
        elmt.removeChild(t);
        t = elmt.firstChild;
    }
}

var setTransfer = -1;
function transferAllOptions()
{
    setTransfer++;   // allowRusLang

    if (setTransfer % 2 === 0)
    {
        resetSelect(SELECT1);
        resetSelect(SELECT2);
        
        arr = new Array();

        if (allowRusLang)
            for (var j = 0; j < stateData.length; j++)
                arr[j] = stateData[j];
        else
            for (var j = 0; j < stateData_eng.length; j++)
                arr[j] = stateData_eng[j];

        for (var i = 0; i < arr.length; i++) {
            var o = new Option(arr[i], i);
//                setImageBackground(o, flagData[i]);
            setRussOrEngBackground(o);
            SELECT2.options.add(o);
        }
    }
    else {
        resetSelect(SELECT1);
        resetSelect(SELECT2);
        
        arr1 = new Array();

        if (allowRusLang)
            for (var j = 0; j < stateData.length; j++)
                arr1[j] = stateData[j];
        else
            for (var j = 0; j < stateData_eng.length; j++)
                arr1[j] = stateData_eng[j];

        for (var i = 0; i < arr1.length; i++) {
            var o = new Option(arr1[i], i);
//                setImageBackground(o, flagData[i]);
            setRussOrEngBackground(o);
            SELECT1.options.add(o);
        }
    }
}