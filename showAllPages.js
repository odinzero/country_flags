
var divFor_showAllPages = null;  // DIV for BUTTON 'show all pages'
var divFor_allButtonPages = null;  // DIV for page buttons
var showAllPages = null;  // BUTTON
var showAndHide = 0;  //  1 and 0
var showAndHideAllPageButtons = false; // if false - show page Buttons with hidden pages
// if true  - show all page buttons without hidden button pages 
var nameButton1, nameButton2;

function createDivForShowPageButtons(  )
{
    divFor_showAllPages = document.createElement("DIV");
    //pages.style.float = "left";
    divFor_showAllPages.style.position = "absolute";
    divFor_showAllPages.style.top = "350px";
    divFor_showAllPages.style.left = "1px";
    divFor_showAllPages.style.width = "390px";
    divFor_showAllPages.style.height = "30px";
    divFor_showAllPages.style.background = "#99ff99";
    divFor_showAllPages.style.float = "left";
    divFor_showAllPages.style.marginTop = "5px";
    divFor_showAllPages.style.borderBottom = "1px solid #66ff00";
    divFor_showAllPages.setAttribute("id", "div_showAllPages");

    prev = createShowAllPages(); // install Show All Pages 

    //divFor_allButtonPages = createDivForAllButtonPages( );

    stat.appendChild(divFor_showAllPages);
    
    return divFor_showAllPages;
}

function createShowAllPages()
{
    showAllPages = document.createElement("BUTTON");
    showAllPages.style.position = "absolute";
    showAllPages.style.left = "120px";
    showAllPages.style.background = "wheat";
    showAllPages.style.color = "orange";
    showAllPages.style.fontFamily = "Arial";
    showAllPages.style.borderRadius = "4px 4px";
    showAllPages.style.marginLeft = "5px";
    showAllPages.style.marginTop = "4px";
    showAllPages.setAttribute("id", "show_AllPages");

    nameButton2 = document.createTextNode(" Hide All Pages ");
    nameButton1 = document.createTextNode(" Show All Pages ");
    showAllPages.appendChild(nameButton1);

    showAllPages.addEventListener("click", function()  //--------------------------------------------- 
    {
        if (!showAndHide)   // show
        {
            showAllPages.removeChild(nameButton1);
            showAllPages.appendChild(nameButton2);

            divFor_allButtonPages.style.display = "inline";
            showAndHideAllPageButtons = true;
            showAndHide = 1;

            firstClick_ShowAllPages();

        } else             // hide
        {
            showAllPages.removeChild(nameButton2);
            showAllPages.appendChild(nameButton1);

            divFor_allButtonPages.style.display = "none";
            showAndHideAllPageButtons = false;
            showAndHide = 0;

            secondClick_ShowAllPages();
        }

        if (turn_showAll)
        {
            //showPages(); /// from file: pages.js
            resetDiv_ForPageButtons();
            filter_showAll_pages();
        }
        if (turn_showOnlyGood)
        {
            // reset page Buttons after clicking on button 'showAllPages' 
            resetDiv_ForPageButtons();
            filter_OnlyGood();
        }
        if (turn_showOnlyError)
        {
            // reset page Buttons after clicking on button 'showAllPages' 
            resetDiv_ForPageButtons();
            filter_OnlyError();
        }
        if (turn_showOnlyEmpty)
        {
            // reset page Buttons after clicking on button 'showAllPages' 
            resetDiv_ForPageButtons();
            filter_OnlyEmpty();
        }
    });

    divFor_showAllPages.appendChild(showAllPages);

    return showAllPages;
}

// for saving all Page Buttons at once
function createDivForAllButtonPages( )
{
    divFor_allButtonPages = document.createElement("DIV");
    divFor_allButtonPages.style.position = "absolute";
    divFor_allButtonPages.style.top = "390px";
    divFor_allButtonPages.style.left = "1px";
    divFor_allButtonPages.style.width = "390px";
    divFor_allButtonPages.style.height = "120px";
    divFor_allButtonPages.style.background = "#99ff99";
    divFor_allButtonPages.style.float = "left";
    divFor_allButtonPages.style.marginTop = "5px";
    divFor_allButtonPages.style.borderBottom = "1px solid #66ff00";
    divFor_allButtonPages.style.display = "none";
    divFor_allButtonPages.setAttribute("id", "div_AllButtonPages");

    stat.appendChild(divFor_allButtonPages);

    return divFor_allButtonPages;
}

function show_AllPageButtons()
{
    for (var index = 0; index < btns.length; index++)
    {
        btns[index] = document.createElement("BUTTON");
        btns[index].style.background = "wheat";
        btns[index].style.color = "orange";
        btns[index].style.fontFamily = "Arial";
        btns[index].style.borderRadius = "4px 4px";
        btns[index].style.marginLeft = "5px";
        btns[index].style.marginTop = "4px";
        btns[index].setAttribute("id", "btn" + index);

        var name = document.createTextNode(index);
        btns[index].appendChild(name);
        divFor_allButtonPages.appendChild(btns[index]);

    }
}

function resetDiv_ForPageButtons()
{
//    divFor_showAllPages = null;  // DIV for BUTTON 'show all pages'
//    divFor_allButtonPages = null;  // DIV for page buttons
//    
//    divFor_showAllPages = createDivForShowPageButtons();
//    divFor_allButtonPages = createDivForAllButtonPages();

    if (divFor_allButtonPages === null)
    {
        createDivForPageButtons(); // file pagesHidden.js
    }
    else {
        if (btns.length > 0)
        {
            var t = divFor_allButtonPages.firstChild;

            while (t) {
                divFor_allButtonPages.removeChild(t);
                t = divFor_allButtonPages.firstChild;
            }
        }
    }
}

function hideButton_showAllPages()
{
    if (showAllPages !== null)
    {
        showAllPages.style.display = "none";
        divFor_showAllPages.style.display = "none";
        divFor_allButtonPages.style.display = "none";
    }
}

function showButton_showAllPages()
{
    if (divFor_showAllPages !== null)
    {
        divFor_showAllPages.style.display = "inline";
        showAllPages.style.display = "inline";

        if (showAndHideAllPageButtons)
            divFor_allButtonPages.style.display = "inline";
        else
            divFor_allButtonPages.style.display = "none";

    }
}
