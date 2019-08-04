
var mem_allRandom = 0;
var mem_onlyGood = 0;
var mem_onlyError = 0;
var mem_onlyEmpty = 0;
var mem_clear = 0;


//--------------------------BUTTON "onlyGood" ----------------------------------
var allRandom = document.getElementById("allRandom");
allRandom.style.background = "orangered";
allRandom.style.color = "yellow";
allRandom.style.fontWeight = "normal";
mem_allRandom = 1;


allRandom.addEventListener("click", function()
{
    if (!mem_allRandom)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
        mem_allRandom = 1;
        onBlur(onlyGood, onlyError, onlyEmpty, clear, 1, 0, 0, 0, 0);
        showStatistics();
    }
    else {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        mem_allRandom = 0;
        hideStatistics();
    }
});

allRandom.addEventListener("mouseover", function() {
    if (mem_allRandom === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "#ffcc00";
        this.style.color = "#ff6666";
        this.style.fontWeight = "bold";
    }

});

allRandom.addEventListener("mouseout", function() {
    if (mem_allRandom === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
    }
});


//--------------------------BUTTON "onlyGood" ----------------------------------
var onlyGood = document.getElementById("onlyGood");

onlyGood.addEventListener("click", function()
{
    if (!mem_onlyGood)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
        mem_onlyGood = 1;
        onBlur(allRandom, onlyError, onlyEmpty, clear, 0, 1, 0, 0, 0);
        showStatistics();
    }
    else {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        mem_onlyGood = 0;
        hideStatistics();
    }
});

onlyGood.addEventListener("mouseover", function() {
    if (mem_onlyGood === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "#ffcc00";
        this.style.color = "#ff6666";
        this.style.fontWeight = "bold";
    }

});

onlyGood.addEventListener("mouseout", function() {
    if (mem_onlyGood === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
    }
});

//--------------------------BUTTON "onlyError" ----------------------------------
var onlyError = document.getElementById("onlyError");

onlyError.addEventListener("click", function()
{
    if (!mem_onlyError)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
        mem_onlyError = 1;
        onBlur(allRandom, onlyGood, onlyEmpty, clear, 0, 0, 1, 0, 0);
        showStatistics();
    }
    else {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        mem_onlyError = 0;
        hideStatistics();
    }
});

onlyError.addEventListener("mouseover", function() {
    if (mem_onlyError === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "#ffcc00";
        this.style.color = "#ff6666";
        this.style.fontWeight = "bold";
    }

});

onlyError.addEventListener("mouseout", function() {
    if (mem_onlyError === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
    }
});

//--------------------------BUTTON "onlyEmpty" ----------------------------------
var onlyEmpty = document.getElementById("onlyEmpty");

onlyEmpty.addEventListener("click", function()
{
    if (!mem_onlyEmpty)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
        mem_onlyEmpty = 1;
        onBlur(allRandom, onlyGood, onlyError, clear, 0, 0, 0, 1, 0);
        showStatistics();
    }
    else {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        mem_onlyEmpty = 0;
        hideStatistics();
    }
});

onlyEmpty.addEventListener("mouseover", function() {
    if (mem_onlyEmpty === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "#ffcc00";
        this.style.color = "#ff6666";
        this.style.fontWeight = "bold";
    }

});

onlyEmpty.addEventListener("mouseout", function() {
    if (mem_onlyEmpty === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
    }
});

//--------------------------BUTTON "Clear" ----------------------------------
var clear = document.getElementById("clear");

clear.addEventListener("click", function()
{
    if (!mem_clear)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
        mem_clear = 1;
        
//        if(!allow_graphStat)
        
        onBlur(allRandom, onlyGood, onlyError, onlyEmpty, 0, 0, 0, 0, 1);   
    
        if(allow_graphStat)
           onBlurDisclear_Clear(disClear, 1, 0);      
            
        showStatistics();
    }
    else {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        mem_clear = 0;
        hideStatistics();
    }
});

clear.addEventListener("mouseover", function() {
    if (mem_clear === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "#ffcc00";
        this.style.color = "#ff6666";
        this.style.fontWeight = "bold";
    }

});

clear.addEventListener("mouseout", function() {
    if (mem_clear === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
    }
});


//==============================================================================
// only one button should be higlight in the same time
function onBlur(elmt1, elmt2, elmt3, elmt4,
        turnOn1, turnOn2, turnOn3, turnOn4, turnOn5)
{
    elmt1.style.background = "wheat";
    elmt1.style.color = "black";
    elmt1.style.fontWeight = "normal";

    elmt2.style.background = "wheat";
    elmt2.style.color = "black";
    elmt2.style.fontWeight = "normal";

    elmt3.style.background = "wheat";
    elmt3.style.color = "black";
    elmt3.style.fontWeight = "normal";

    elmt4.style.background = "wheat";
    elmt4.style.color = "black";
    elmt4.style.fontWeight = "normal";

    mem_allRandom = turnOn1;
    mem_onlyGood = turnOn2;
    mem_onlyError = turnOn3;
    mem_onlyEmpty = turnOn4;
    mem_clear = turnOn5;
}


// description behavior with buttons 'clear' and 'Disable Clear' 
var mem_disclear = 0;
var disClear = document.getElementById("disableClear");
// ---------------------- BUTTON 'Disable Clear' -------------------------------
disClear.addEventListener("click", function()
{
    if (!mem_disclear)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
        mem_disclear = 1;
        
        onBlurDisclear_Clear(clear, 0, 1);
        showStatistics();
    }
    else {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        mem_disclear = 0;
        hideStatistics();
    }
});

disClear.addEventListener("mouseover", function() {
    if (mem_disclear === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "#ffcc00";
        this.style.color = "#ff6666";
        this.style.fontWeight = "bold";
    }

});

disClear.addEventListener("mouseout", function() {
    if (mem_disclear === 1)
    {
        this.style.background = "orangered";
        this.style.color = "yellow";
        this.style.fontWeight = "normal";
    }
    else
    {
        this.style.background = "wheat";
        this.style.color = "black";
        this.style.fontWeight = "normal";
    }
});

// only one button should be higlight in the same time
function onBlurDisclear_Clear(elmt1, turnOn1, turnOn2)
{
    elmt1.style.background = "wheat";
    elmt1.style.color = "black";
    elmt1.style.fontWeight = "normal";

    mem_clear = turnOn1;
    mem_disclear = turnOn2;
}


//------------------------------------------------------------------------------

function hideStatistics()
{
    table.style.display = "none";
}

function showStatistics()
{
    table.style.display = "table";
}