
var pages = null;  // div for page buttons
var cnt_pages = 0; //  count for buttons
var btns = [];   // button pages 1,2,3,4,5,6,7,8,9,10
var selectedPage;  // to identify which page Button was pressed
var pageButtonClicked = false; // if false it means user use mode of current line of current page
// if true  it means user use mode of 'selectedPage' and show lines
//  only 'selectedPage'
var firstPageButtonClicked = false;
var inittt = 0;  //
var onlyFor_showAll = true;
var between, between2, nexxt, prev;


function showPages()
{
    showCurrentPage(line, showAll, 10); // show current line in current page 

    if (line === 9) // create 'DIV' element for launch page buttons
    {
        createDivForPageButtons(); // from file:pagesHidden.js

        if ((divFor_showAllPages === null) && (divFor_allButtonPages === null))
        {
            createDivForShowPageButtons(); // file: showAllpages.js
            createDivForAllButtonPages(); // file: showAllpages.js
        }
    }

    if (line % 10 === 9)  //   (only for First page)
    {
        inittt++;

        if (inittt === 1)
        {
            cnt_pages = 1; // 1
            createPageButtons(cnt_pages);
            listenerForFirstpage(cnt_pages, showAll);
        }
    }
    else if (line % 10 === 0) // add buttons each 10 lines
    {
        if (line > 9) // 
        {
            cnt_pages++; // Rest pages except '1'  e.g. 2,3,4,5,6,7,8,9,10
            createPageButtons(cnt_pages);

            // Rest pages except '1'  e.g. 2,3,4,5,6,7,8,9,10
            showOnlyDefinedLines(cnt_pages, showAll);
        }
    }

    repaintAllPageButtons();
    //highlightPageButton();
    if (cnt_pages > 0)
    {
        if (!pageButtonClicked && !firstPageButtonClicked)
        {
            selectedPage = cnt_pages;
            paintButtonPage(btns[cnt_pages]);
        } else if (pageButtonClicked && !firstPageButtonClicked)
            paintButtonPage(btns[selectedPage]);
        else if (!pageButtonClicked && firstPageButtonClicked)
            paintButtonPage(btns[1]);
    }
}


function createPageButtons(index)
{
    btns[index] = document.createElement("BUTTON");
    btns[index].style.background = "wheat";
    btns[index].style.color = "whitesmoke";
    btns[index].style.fontFamily = "Arial";
    btns[index].style.borderRadius = "4px 4px";
    btns[index].style.marginLeft = "5px";
    btns[index].style.marginTop = "4px";
    btns[index].setAttribute("id", "btn" + index);


    if (!showAndHideAllPageButtons)  // file: showAllPages.js
    {
        //---------------------- hidden pages --------------------
        positionButtonPages(0, index);  // file :pagesHidden.js

        if (selectedPage !== (btns.length - 1)) // user pressed any page button except last page button 
        {
            if (index <= 7)
            {
                between.style.display = "none"; // right
                between2.style.display = "none"; // left
            }
            else
            {
                // alert("!!!!!!");
                // repaintAllButtons(); // : pagesHidden.js
                for (var i = 0; i < btns.length; i++)  // 1 2 3 4 5 ... 10   first
                {
                    // alert(btns.length);
                    if (i < 7) {
                        positionButtonPages(0, i);
                    } else {
                        btns[i].style.position = "absolute";
                        btns[i].style.left = "250px";
                    }

                    if (i === 7) {
                        btns[i - 1].style.display = "none";
                        between.style.display = "inline";  // right

                        btns[i].style.position = "absolute";
                        btns[i].style.left = "250px";
                    }

                    if (i === (btns.length - 1)) { // last
                        btns[i].style.position = "absolute";
                        btns[i].style.left = "250px";
                    }
                }
            }
        }
        else //  user pressed last page button
            lastPageButtonClicked(index);
    }

    var name = document.createTextNode(index);
    btns[index].appendChild(name);

    if (!showAndHideAllPageButtons)
    {
        // animation: effect.js
        shh();
        pages.appendChild(btns[index]);
    }
    else
    {
        //pages.style.opacity = 0;
        pages.style.display = "none";
        // animation: effect.js
        shh1();
        divFor_allButtonPages.appendChild(btns[index]);
    }

}

function ffirstPageButtonClicked()
{
    strightOrder = true;
    strightOrder_cnt = 0;

    // situation : from 5  -- >  1
    if (directionOfMove === 0)
        directionOfMove = 1;

    directionOfMove = 1;
    // situation : from 1 -->  5
    if (directionOfMove === 1)
        onlyIfPageButtonFive = true;

    // 5 - 1


    if (cnt_pages <= 7)  // 1 2 3 4 5 6 7
    {
        between.style.display = "none";  // right
        between2.style.display = "none"; // left
    }
    else
    {
        //  between.style.display = "inline";
        for (var i = 0; i < btns.length; i++)  // 1 2 3 4 5 ... 10   first
        {
            if (i < 7) {
                positionButtonPages(0, i);
            } else {
                btns[i].style.position = "absolute";
                btns[i].style.left = "250px";
            }

            if (i === 7) {
                btns[i - 1].style.display = "none";
                between.style.display = "inline";// right
                between2.style.display = "inline";// left
            }

            if ((i === (btns.length - 1))) { // last
                btns[i].style.display = "inline";
                btns[i].style.position = "absolute";
                btns[i].style.left = "250px";
            }
        }
    }


}


function lastPageButtonClicked(index)
{
    // strightOrder = false;
    strightOrder_cnt = 0;

    directionOfMove = 2;
    // onlyIfPageButtonFive = false;

    if (index <= 7)  //  count for buttons
    {
        between.style.display = "none";  // right
        between2.style.display = "none"; // left
    }
    else
    {
        for (var i = 0; i < btns.length; i++)  // 1 ... 6 7 8 9 10   last
        {
            if (i > 1)
                btns[i].style.display = "none";

            positionButtonPages(4, i);  // right position

            if (i === 7) { // qty page Buttons on one page
                btns[2].style.display = "none";
                between2.style.display = "inline"; // left
                between.style.display = "none";    // right
            }

            if (i === (btns.length - 1)) { // last
                // positionButtonPages(4, i);  // reverse position
            }

        }
    }
}

var strightOrder = false;
var strightOrder_cnt = 0;
var onlyIfPageButtonFive = false;
var shift = 0;
var historySelectedPagesClick = [];
var directionOfMove = 0;
function anyBetweenPageButtonClicked()
{
//    var myElement = document.querySelector("#btn2"); 
//    var position = getPositionElement(myElement);
//    alert("The image is located at: " + position.x + ", " + position.y);
    shift++;

    historySelectedPagesClick[shift] = selectedPage;
    if (historySelectedPagesClick[shift] > historySelectedPagesClick[shift - 1])
    {
        directionOfMove = 1;  // move to forward
        //alert(" 111 ");
    }
    if (historySelectedPagesClick[shift] === historySelectedPagesClick[shift - 1])
    {
        directionOfMove = 0;  // no equal
        //alert(" 000 ");
    }
    if (historySelectedPagesClick[shift] < historySelectedPagesClick[shift - 1])
    {
        directionOfMove = 2; // move  back
        //alert(" 222 ");
    }

    if (cnt_pages <= 7)  // 1 2 3 4 5 6 7
    {
        between.style.display = "none";  // right
        between2.style.display = "none"; // left
    }
    else
    {
        if (btns[1] === 1)
            alert("btns[1]");

        for (var i = 1; i < btns.length; i++)  // 1 ... 4 5 6 ... 10
        {
            if (i > 1) // besause i= 0 = undefined
                btns[i].style.display = "none";
//            if (i === (btns.length - 3))
//                btns[i].style.display = "inline";
            // positionButtonPages(3, i);


            if ((selectedPage === 2) || (selectedPage === 3) || (selectedPage === 4))
            {
                positionButtonPages(3, i);
                strightOrder_cnt = 0;
                onlyIfPageButtonFive = true;

                if (i < 7) {
                    positionButtonPages(0, i);
                } else {
                    btns[i].style.position = "absolute";
                    btns[i].style.left = "250px";
                }

                if (i === 7) {
                    btns[i - 1].style.display = "none";
                    between.style.display = "inline";// right
                    between2.style.display = "inline";// left
                }

                if ((i === (btns.length - 1))) { // last
                    btns[i].style.position = "absolute";
                    btns[i].style.left = "250px";
                }

            }


            if ((selectedPage <= (btns.length - 5)) && ((selectedPage > 4)))
            {
                // alert("!  " + selectedPage);

                if (directionOfMove === 2)  // direction to back < ------- 
                {
                    // alert(strightOrder_cnt);
                    onlyIfPageButtonFive = false;
                    strightOrder_cnt++;
                    alert(" -2-  " + strightOrder_cnt);
                    directionOfMove = -1;
                }

//                if (!strightOrder)  // <--- order  
//                {
//                    onlyIfPageButtonFive = false;

//                    
//                     if((selectedPage === 5))
//                    {
//                        onlyIfPageButtonFive = true;
//                        strightOrder_cnt = 1;
//                        //strightOrder_cnt--;
//                       // positionButtonPages(1, i);
//                        strightOrder = true; 
//                        //onlyIfPageButtonFive = false;
//                         alert("if " +  strightOrder_cnt);
//                    }
//                    else {
//                       
//                    strightOrder_cnt++;
//                    strightOrder = true;


//                        onlyIfPageButtonFive = false;
//                        
//                        alert("else " +  strightOrder_cnt);
//                    }
//                }

//                if (orderNext)      // --->  order
//                {
//                
                // situation : from 5  -- >  1
                if ((directionOfMove === 0))
                {
                    // alert("selectedPage === 1");
                    directionOfMove = 1;
                }

                if ((selectedPage === (btns.length - 1)) && (directionOfMove === 2))
                {
                    directionOfMove = 1;
                    alert("selectedPage === last");
                }

                if (directionOfMove === 1)  // direction to forward ------- >
                {
                    //alert(strightOrder_cnt);
                    if ((selectedPage === 5))
                        strightOrder_cnt = 1;
                    onlyIfPageButtonFive = true;
                    strightOrder_cnt++;
                    alert(" -1-  " + strightOrder_cnt);
                    directionOfMove = -1;
                }
                //alert("directionOfMove : ");
//                    if ((selectedPage === 5))
//                    {
//                        onlyIfPageButtonFive = true;
//                        strightOrder_cnt = 1;
//                    }
//
//                    if (onlyIfPageButtonFive)
//                    {
//                        strightOrder_cnt++; // --->
//                        orderNext = false;
//                    } else {
//                        strightOrder_cnt--; // <---
//                        orderNext = false;
//                    }


//                }


                positionButtonPages(3, i);

                // onlyIfPageButtonFive = false;

                between.style.display = "inline";// right
                between2.style.display = "inline";// left
                //btns[btns.length - 2].style.display = "none";
                //btns[2].style.display = "none";

//                if( i <= 8 ) // some bug : if pages less 8 then 6 button page should be visible
//                btns[6].style.display = "inline";
//                else    // else should be invisible
//                btns[6].style.display = "none"; 
//                

            }

            /// if( !prevSide.contains(btns[i]))
            if ((selectedPage === (btns.length - 2)) || (selectedPage === (btns.length - 3)) ||
                    (selectedPage === (btns.length - 4)))
            {
                //strightOrder = false;
                strightOrder_cnt = 0;
                positionButtonPages(4, i); // show end page buttons
            }

            // situation : from 12  -- >  1
//            if((selectedPage === (btns.length - 1))&&(directionOfMove === 2))
//                      directionOfMove = 1; 

        }
    }
}

function showOnlyDefinedLines(cnt_pag, array)
{
    //    var max = cnt_pag * 10; // 20, 40, 60
    //    var min = max - 11;     // 9,  29, 49

    var max = cnt_pag * 10 - 1; // 19, 29, 39 
    var min = max - 11;      // 11, 21, 31

    // for each button_page add EventListener to show only lines from 1-9, 10-19, 20-29
    btns[cnt_pag].addEventListener("click", function()
    {
        pageButtonClicked = true;
        firstPageButtonClicked = false;

        selectedPage = cnt_pag;

        // if button 'show All Pages' is not clicked
        // from file : showAllPages.js
        if (!showAndHideAllPageButtons)
        {
            // for displaying hidden pages
            anyBetweenPageButtonClicked();
        }

        repaintAllPageButtons();
        paintButtonPage(btns[cnt_pag]);

        for (var i = 0; i < array.length; i++)
        {
            if ((i <= min) || (i >= max))
                array[i].style.display = "none";
            else
                array[i].style.display = "table-row";
        }


        prev.style.display = "inline"; // show << button
        nexxt.style.display = "inline";// show >> button 

        // if button page is last button. It is need to cancel show choosed pages
        // and show only current page and lines
        if (cnt_pag === (btns.length - 1))
        {
            alert(" length");
            pageButtonClicked = false;
            firstPageButtonClicked = false;

            selectedPage = cnt_pag;

            // if button 'show All Pages' is not clicked
            // from file : showAllPages.js
            if (!showAndHideAllPageButtons)
            {
                lastPageButtonClicked(cnt_pag);
            }

            repaintAllPageButtons();
            paintButtonPage(btns[cnt_pag]);

            nexxt.style.display = "none";
            prev.style.display = "inline"; // show << button
        }

    });
}

function listenerForFirstpage(cnt_pag, array)
{
    // First page
    if (cnt_pag === 1) // First page  1
    {
        btns[cnt_pag].addEventListener("click", function()
        {
            firstPageButtonClicked = true;
            pageButtonClicked = false;

            selectedPage = cnt_pag;

            alert("first");

            for (var i = 0; i < array.length; i++)
            {
                if (i > 9)
                    array[i].style.display = "none";
                else
                    array[i].style.display = "table-row";
            }

            // if button 'show All Pages' is not clicked
            // from file : showAllPages.js
            if (!showAndHideAllPageButtons)
            {
                ffirstPageButtonClicked();
            }

            repaintAllPageButtons();
            paintButtonPage(btns[cnt_pag]);

            avoidDisplay_ShowAllPages();

            prev.style.display = "none";    // hide << button
            nexxt.style.display = "inline"; // show >> button 
        });

    }
}

function pageButtonClicked_true(cnt_pag, array)
{
    var max = cnt_pag * 10 - 1; // 19, 29, 39    
    var min = max - 11;      // 11, 21, 31  

    if (firstPageButtonClicked)  // when first page button is clicked
    {
        // alert("firstPageButtonClicked ");
        for (var i = 0; i < array.length; i++)
        {
            if (i > 9)
                array[i].style.display = "none";
            else
                array[i].style.display = "table-row";
        }
    }

    if (pageButtonClicked) // when all page buttons clicked except of  first and last page
    {
        // alert("pageButtonClicked ");
        for (var i = 0; i < array.length; i++)
        {
            if ((i <= min) || (i >= max))
                array[i].style.display = "none";
            else
                array[i].style.display = "table-row";
        }
    }

}

function showCurrentPage(cnt_line, array, divider)
{
    var currentPage = cnt_line; // current line in page

    if (currentPage % divider === 0)  // show only 10 lines
    {
        if (!pageButtonClicked && !firstPageButtonClicked) // show current page and current line
        {
            if (selectedPage !== undefined)
                selectedPage = cnt_pages + 1;

            for (var i = 0; i < array.length; i++) {
                if (!onlyFor_showAll)
                {
                    if ((i < (currentPage)))
                        array[i].style.display = "none";
                    else
                        array[i].style.display = "table-row";
                }
                else // onlyFor_showAll = true
                {
                    if ((i < (currentPage - 1)))
                        array[i].style.display = "none";
                    else
                        array[i].style.display = "table-row";
                }
            }
        }
        else  // not show current page and current line because of page button is clicked
                // and only show defined lines for page button
                {
                    pageButtonClicked_true(selectedPage, array);
                    //alert("NOT CURRRENT " + cnt_pages);
                }
    }
    else // show selected page and line
    {
        if (pageButtonClicked || firstPageButtonClicked)
            pageButtonClicked_true(selectedPage, array);
    }
}

//---------------BUTTONS: 'All' 'OnlyGood' 'OnlyError' 'OnlyEmpty' -------------

function resetPageButtons()
{
//    if (pages === null)
//    {
//       // createDivForPageButtons();
//       // pages.style.display = "none";
//    }
//    else
    if (pages !== null)
    {
        if (btns.length > 0)
        {
            var t = pages.firstChild;

            while (t) {
                pages.removeChild(t);
                t = pages.firstChild;
            }
        }
        stat.removeChild(pages);
        pages = null;
    }
}

function removePagePanel()
{
    if (pages !== null)
    {
        stat.removeChild(pages);
        pages = null;

    }
}

function filter_showAll_pages()
{
    // reset page Buttons after clicking on button 'showAll' 
    // to avoid doubling page buttons when 'Show All Pages' is clicked
    // from file: showAllpages.js
    resetDiv_ForPageButtons();

    resetPageButtons();

    inittt = 0; // reset this variable in order to set again first pageButton

    cnt_pages = 0; // index in array 'btns'
    btns = [];

    // show button 'Show All Pages' if page buttons exists
    avoidDisplay_ShowAllPages();

    // if  BUTTON 'Clear' is  clicked  --> statistics is not exists
    // it need cancel action BUTTON 'Clear'
    clearBlock = false;

    onlyFor_showAll = true;

    pageButtonClicked = false;      // turn off any page button clicked 
    firstPageButtonClicked = false; // turn off first page button clicked

    for (var i = 0; i < showAll.length; i++) {
        table.appendChild(showAll[i]);
        displayLikePages(i, showAll);
    }

    highlightPageButton();
}

function filter_OnlyGood_pages()
{
    // reset page Buttons after clicking on button 'onlyGood'
    // to avoid doubling page buttons when 'Show All Pages' is clicked 
    // from file: showAllpages.js
    resetDiv_ForPageButtons();

    resetPageButtons();
    inittt = 0; // reset this variable in order to set again first pageButton

    cnt_pages = 0; // index in array 'btns'
    btns = [];     // button pages

    // show button 'Show All Pages' if page buttons exists
    avoidDisplay_ShowAllPages();

    // if  BUTTON 'Clear' is  clicked  --> statistics is not exists
    // it need cancel action BUTTON 'Clear'
    clearBlock = false;

    onlyFor_showAll = false;

    //    pageButtonClicked = false;      // turn off any page button clicked 
    //    firstPageButtonClicked = false; // turn off first page button clicked

    for (var i = 0; i < showOnlyGood.length; i++)
    {
        table.appendChild(showOnlyGood[i]);
        displayLikePages(i, showOnlyGood);
    }

    highlightPageButton();
}


function filter_OnlyError_pages()
{
    // reset page Buttons after clicking on button 'OnlyError'
    // to avoid doubling page buttons when 'Show All Pages' is clicked  
    // from file: showAllpages.js
    resetDiv_ForPageButtons();

    resetPageButtons();
    inittt = 0; // reset this variable in order to set again first pageButton

    cnt_pages = 0; // index in array 'btns'
    btns = [];     // button pages

    // show button 'Show All Pages' if page buttons exists
    avoidDisplay_ShowAllPages();

    // if  BUTTON 'Clear' is  clicked  --> statistics is not exists
    // it need cancel action BUTTON 'Clear'
    clearBlock = false;

    onlyFor_showAll = false;

    //    pageButtonClicked = false;      // turn off any page button clicked 
    //    firstPageButtonClicked = false; // turn off first page button clicked

    for (var i = 0; i < showOnlyError.length; i++)
    {
        table.appendChild(showOnlyError[i]);
        displayLikePages(i, showOnlyError);
    }

    highlightPageButton();
}

function filter_OnlyEmpty_pages()
{
    // reset page Buttons after clicking on button 'Only Empty' 
    // to avoid doubling page buttons when 'Show All Pages' is clicked 
    // from file: showAllpages.js
    resetDiv_ForPageButtons();

    resetPageButtons();
    inittt = 0; // reset this variable in order to set again first pageButton

    cnt_pages = 0; // index in array 'btns'
    btns = [];     // button pages

    // show button 'Show All Pages' if page buttons exists
    avoidDisplay_ShowAllPages();

    // if  BUTTON 'Clear' is  clicked  --> statistics is not exists
    // it need cancel action BUTTON 'Clear'
    clearBlock = false;

    onlyFor_showAll = false;

    //    pageButtonClicked = false;  

    for (var i = 0; i < showOnlyEmpty.length; i++)
    {
        table.appendChild(showOnlyEmpty[i]);
        displayLikePages(i, showOnlyEmpty);
    }

    highlightPageButton();
}

function displayLikePages(i, array) // algorythm adding page buttons
{
    showCurrentPage(i, array, 10); // show current line in current page

    avoidDisplay_ShowAllPages();

    if (i % 10 === 9)  //   (only for First page)  i % 9 === 8
    {
        inittt++;

        if (inittt === 1) {

            if ((divFor_showAllPages === null) && (divFor_allButtonPages === null))
            {
                createDivForShowPageButtons(); // file: showAllpages.js
                createDivForAllButtonPages(); // file: showAllpages.js
            }

            //if( pages === 'undefined')
            createDivForPageButtons();  // create 'DIV' element for launch page buttons
            cnt_pages = 1; // 1
            createPageButtons(cnt_pages);
            listenerForFirstpage(cnt_pages, array);
        }
        //  alert("odd  :  " + cnt_pages + "   :   " + line);
    }
    else if ((i % 10 === 0)) // add buttons each 10 lines  i % 9 === 1
    {
        if (i > 9) // 
        {
            cnt_pages++; // Rest pages except '1'  e.g. 2,3,4,5,6,7,8,9,10
            createPageButtons(cnt_pages);

            //alert( cnt_pages );

            // Rest pages except '1'  e.g. 2,3,4,5,6,7,8,9,10
            showOnlyDefinedLines(cnt_pages, array);
        }

    }

}

function highlightPageButton()
{
    if ((selectedPage !== undefined)) // paint selected page Button to red color
    {
        //alert("selectedPage " + selectedPage + " " + btns.length);
        if (selectedPage === (btns.length - 1)) // if selected page Button is last one
        {                                       // save selection during creation new page Button
            selectedPage === btns.length - 1;
            paintButtonPage(btns[selectedPage]);
        }

        if (cnt_pages > 0)
        {
            if (!pageButtonClicked && !firstPageButtonClicked)
            {
                selectedPage = cnt_pages;
                paintButtonPage(btns[cnt_pages]);
            } else if (pageButtonClicked && !firstPageButtonClicked)
                paintButtonPage(btns[selectedPage]);
            else if (!pageButtonClicked && firstPageButtonClicked)
                paintButtonPage(btns[1]);
        }
        else // highlight selection any page Button except first one
        {
//            alert(selectedPage);
//            if(btns[selectedPage] !== 0)
//            paintButtonPage(btns[selectedPage]);
        }
    }
}

// if any of  buttons is clicked 'All', 'OnlyGood', 'OnlyEmpty', 'OnlyError'
// and page buttons is absent then  need not show  'showAllPages' button
function avoidDisplay_ShowAllPages()
{
    // alert(cnt_pages);
    if (cnt_pages < 1)
        hideButton_showAllPages(); // from file:showAllPages.js
    else
        showButton_showAllPages(); // from file:showAllPages.js
}

function repaintAllPageButtons()
{
    for (var index = 1; index < btns.length; index++)
    {
        btns[index].style.background = "wheat";
        btns[index].style.color = "whitesmoke";
    }
}

function paintButtonPage(x)
{
    if (x !== 0)
    {
        x.style.background = "red";
        x.style.color = "whitesmoke";
    }
}



