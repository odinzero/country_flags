

function positionButtonPages(pos, index)
{
    if (pos === 0) // 1 2 3 4 5 6 7  for  first
    {
        if (index === 1)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "75px";
        }
        if (index === 2)
        {
            prev.style.display = "inline";
            nexxt.style.display = "inline";

            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "100px";
        }
        if (index === 3)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "125px";
        }
        if (index === 4)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "150px";
        }
        if (index === 5)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "175px";
        }
        if (index === 6)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "200px";
        }
        if (index === 7)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "225px";
        }
    }


    if (pos === 1) // 1 2 3 4 5 ... 7  
    {
        if (index === 1)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "75px";
        }
        if (index === 2)
        {
            prev.style.display = "inline";
            nexxt.style.display = "inline";

            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "100px";
        }
        if (index === 3)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "125px";
        }
        if (index === 4)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "150px";
        }
        if (index === 5)
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "175px";
        }
        if (index === (btns.length - 2))
        {
            btns[index].style.display = "none";
            between.style.display = "inline";   // right
        }
        if (index === (btns.length - 1))
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "225px";
        }
    }


    if (pos === 4)   //  6 7 8 9 10   for last page Button
    {
        //.style.display = "none";

        if (index === (btns.length - 5))
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "125px";
            changePageButtonPosition(index);
        }
        if (index === (btns.length - 4))
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "150px";
            changePageButtonPosition(index);
        }
        if (index === (btns.length - 3))
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "175px";
            changePageButtonPosition(index);
        }
        if (index === (btns.length - 2))
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "200px";
            changePageButtonPosition(index);
        }
        if (index === (btns.length - 1))
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
            btns[index].style.left = "225px";
            changePageButtonPosition(index);

        }
    }


    if (pos === 3)   // 1 ... 4 5 6 ... 10  for any button except of first and last button
    {
        nexxt.style.display = "inline";

        if (onlyIfPageButtonFive)
        {
            if (index === (2 + strightOrder_cnt))
            {
                btns[index].style.display = "inline";
                btns[index].style.position = "absolute";
                btns[index].style.left = "125px";
                // changePageButtonPosition(index);
            }
            if (index === (3 + strightOrder_cnt))
            {
                btns[index].style.display = "inline";
                btns[index].style.position = "absolute";
                btns[index].style.left = "150px";
                // between2.style.display = "inline";   // left
                // changePageButtonPosition(index);
            }
            if (index === (4 + strightOrder_cnt))
            {
                btns[index].style.display = "inline";
                btns[index].style.position = "absolute";
                btns[index].style.left = "175px";
                // changePageButtonPosition(index);
            }
        } else
        {
            if (index === (btns.length - (5 + strightOrder_cnt))) // (5 + strightOrder_cnt)
            {
                btns[index].style.display = "inline";
                btns[index].style.position = "absolute";
                btns[index].style.left = "125px";
                changePageButtonPosition(index);
            }
            if (index === (btns.length - (4 + strightOrder_cnt))) //  (4 + strightOrder_cnt)
            {
                btns[index].style.display = "inline";
                btns[index].style.position = "absolute";
                btns[index].style.left = "150px";
                // between2.style.display = "inline";   // left
                changePageButtonPosition(index);
            }
            if (index === (btns.length - (3 + strightOrder_cnt))) // (3 + strightOrder_cnt)
            {
                btns[index].style.display = "inline";
                btns[index].style.position = "absolute";
                btns[index].style.left = "175px";
                changePageButtonPosition(index);
            }
        }

        if (index === (btns.length - 2))
        {
            btns[index].style.display = "none";
            between.style.display = "inline";   // right
            changePageButtonPosition(index);
        }
        if (index === (btns.length - 1))
        {
            btns[index].style.display = "inline";
            btns[index].style.position = "absolute";
//            btns[index].style.left = "225px";
            changePageButtonPosition(index);
        }
    }

}


function changePageButtonPosition(index)
{
    if ((index > 0) && (index < 99))
    {
        switch (index)
        {
            case (btns.length - (5 + strightOrder_cnt)):
                btns[index].style.left = "125px";
                break;
            case (btns.length - (4 + strightOrder_cnt)):
                btns[index].style.left = "155px";
                break;
            case (btns.length - (3 + strightOrder_cnt)):
                btns[index].style.left = "185px";
                break;
            case (btns.length - 2):
                btns[index].style.left = "215px";
                break;
            case (btns.length - 1):
                btns[index].style.left = "245px";
                break;
        }
    }
    if ((index >= 99) && (index <= 999))
    {
        switch (index)
        {
            case (btns.length - 5):
                btns[index].style.left = "125px";
                break;
            case (btns.length - 4):
                btns[index].style.left = "160px";
                break;
            case (btns.length - 3):
                btns[index].style.left = "195px";
                break;
            case (btns.length - 2):
                btns[index].style.left = "230px";
                break;
            case (btns.length - 1):
                btns[index].style.left = "265px";
                break;
        }
    }
}

function repaintAllButtons()
{
    for (var i = 0; i < btns.length; i++)  // 1 2 3 4 5 ... 10   first
    {
        if (i !== 0)
            btns[i].style.display = "none";
    }
}

function prevButton()
{
    prev = document.createElement("BUTTON");
    var name = document.createTextNode(" << ");
    prev.appendChild(name);
    prev.style.display = "inline";
    prev.style.position = "absolute";
    prev.style.left = "1px";
    prev.style.background = "lightblue";
    prev.style.color = "white";
    prev.style.fontFamily = "Arial";
    prev.style.borderRadius = "4px 4px";
    prev.style.marginLeft = "5px";
    prev.style.marginTop = "4px";
    prev.addEventListener("click", function() 
    {
        if (selectedPage >= 1)
        {
            selectedPage--; 
        }
        else {
            selectedPage = 1;
        }
        
        if(selectedPage <= 1)  selectedPage = 1;
         //alert("selectedPage " + selectedPage + " " + btns.length);

        var max = selectedPage * 10 - 1; // 19, 29, 39 
        var min = max - 11;      // 11, 21, 31

        pageButtonClicked = true;
        firstPageButtonClicked = false;
    
        anyBetweenPageButtonClicked();
        
        // if first page button is clicked
        if(selectedPage === 1)
        {
            ffirstPageButtonClicked();
            prev.style.display = "none"; 
        }

        repaintAllPageButtons();
        paintButtonPage(btns[selectedPage]);

        
        for (var i = 0; i < showAll.length; i++)
        {
            if ((i <= min) || (i >= max))
                showAll[i].style.display = "none";
            else
                showAll[i].style.display = "table-row";
        }

        // if button page is last button. It is need to cancel show choosed pages
        // and show only current page and lines
        if (selectedPage === (btns.length - 1))
        {
            pageButtonClicked = false;
            firstPageButtonClicked = false;

            lastPageButtonClicked(selectedPage);

            repaintAllPageButtons();
            paintButtonPage(btns[selectedPage]);
        }
        
        // hide << button when "1" page button is selected
         if((selectedPage === 1)||(selectedPage === 0)) 
        {
            prev.style.display = "none"; 
            nexxt.style.display = "inline"; 
        }
        else
         {
            nexxt.style.display = "inline"; 
            prev.style.display = "inline";
         }
    });
    
    pages.appendChild(prev);

    return prev;
}

function betweenSpan()  // right
{
    between = document.createElement("DIV");
    var name = document.createTextNode(" ... ");
    between.appendChild(name);
    between.style.position = "absolute";
    between.style.fontSize = "20px";
    between.style.color = "blue";
    between.style.left = "225px"; // for init position
    between.style.display = "none";
    pages.appendChild(between);

    return between;
}

function between2Span()  // left
{
    between2 = document.createElement("DIV");
    var name = document.createTextNode(" ... ");
    between2.appendChild(name);
    between2.style.position = "absolute";
    between2.style.fontSize = "20px";
    between2.style.color = "blue";
    between2.style.left = "105px"; // for init position
    between2.style.display = "none";
    pages.appendChild(between2);

    return between2;
}

function nexxtButton()
{
    nexxt = document.createElement("BUTTON");
    var name = document.createTextNode(" >> ");
    nexxt.appendChild(name);
    nexxt.style.display = "none";
    nexxt.style.position = "absolute";
    nexxt.style.right = "5px";
    nexxt.style.background = "lightblue";
    nexxt.style.color = "white";
    nexxt.style.fontFamily = "Arial";
    nexxt.style.borderRadius = "4px 4px";
    nexxt.style.marginLeft = "5px";
    nexxt.style.marginTop = "4px";
    nexxt.addEventListener("click", function()
    {
        if (selectedPage !== (btns.length - 1 ))
        {
            selectedPage++; 
        }
        else {
            selectedPage = (btns.length - 1);
        }
        
        // hide  >> button  when last page button is clicked
         if(selectedPage === (btns.length - 1))
         {
            nexxt.style.display = "none"; 
            prev.style.display = "inline"; 
         }
         else
         {
            nexxt.style.display = "inline"; 
            prev.style.display = "inline";
         }
        
         //alert("selectedPage " + selectedPage + " " + btns.length);

        var max = selectedPage * 10 - 1; // 19, 29, 39 
        var min = max - 11;      // 11, 21, 31

        pageButtonClicked = true;
        firstPageButtonClicked = false;

        // alert("selectedPage " + selectedPage + " " + btns.length);
        anyBetweenPageButtonClicked();

        repaintAllPageButtons();
        paintButtonPage(btns[selectedPage]);

        // alert(" Listener :  " + cnt_pag);

        for (var i = 0; i < showAll.length; i++)
        {
            if ((i <= min) || (i >= max))
                showAll[i].style.display = "none";
            else
                showAll[i].style.display = "table-row";
        }

        // if button page is last button. It is need to cancel show choosed pages
        // and show only current page and lines
        if (selectedPage === (btns.length - 1))
        {
            pageButtonClicked = false;
            firstPageButtonClicked = false;

            lastPageButtonClicked(selectedPage);

            repaintAllPageButtons();
            paintButtonPage(btns[selectedPage]);
        }
//
    });
    pages.appendChild(nexxt);

    return nexxt;

}

function createDivForPageButtons()
{
    if(pages === null)
    {
    pages = document.createElement("DIV");
    //pages.style.float = "left";
    pages.style.position = "absolute";
    pages.style.top = "310px";
    pages.style.width = "390px";
    pages.style.height = "30px";
    pages.style.background = "#99ff99";
    pages.style.float = "left";
    pages.style.marginTop = "5px";
    pages.style.borderBottom = "1px solid #66ff00";
    pages.setAttribute("id", "pages_id");
    stat.appendChild(pages);
    }
    
    if(prev !== null)
    prevButton(); // install prev button   : pagesHidden.js
    if(nexxt !== null)
    nexxtButton();  // install next button : pagesHidden.js
    between = betweenSpan();  // install between span  : pagesHidden.js  right
    between2 = between2Span();  // install between span  : pagesHidden.js  left
   // prevSideElement();
   //  nexxtSideElement();

}

var prevSide, nexxtSide;
var orderNext;

function  prevSideElement()
{
    prevSide = document.createElement("DIV");
    prevSide.style.position = "absolute";
    prevSide.style.left = "130px";
    prevSide.style.top = "0px";
    prevSide.style.width = "25px";
    prevSide.style.height = "30px";
    prevSide.style.borderRadius = "4px 4px";
    prevSide.style.background = "green";   // #99ff99
    prevSide.style.opacity = "0.5";
    prevSide.style.zIndex = "0";
    prevSide.setAttribute("id", "prev");

    prevSide.addEventListener("mouseover", function() {
        //alert("prevSide");
        strightOrder = false;
        // orderNext = false;
    });
    prevSide.addEventListener("mouseout", function() {
        // alert("prevSide");
        // strightOrder = true;
        orderNext = false;
    });

    pages.appendChild(prevSide);
}

function  nexxtSideElement()
{
    nexxtSide = document.createElement("DIV");
    nexxtSide.style.position = "absolute";
    nexxtSide.style.left = "178px";
    nexxtSide.style.top = "0px";
    nexxtSide.style.width = "25px";
    nexxtSide.style.height = "30px";
    nexxtSide.style.borderRadius = "4px 4px";
    nexxtSide.style.background = "green";   // #99ff99
    nexxtSide.style.opacity = "0.5";
    nexxtSide.style.zIndex = "0";
    nexxtSide.setAttribute("id", "prev");

    nexxtSide.addEventListener("mouseover", function() {
        //alert("prevSide");
        orderNext = true;
        //strightOrder = true;
    });
    nexxtSide.addEventListener("mouseout", function() {
        // alert("prevSide");
        strightOrder = true;
        // orderNext = false;
    });

    pages.appendChild(nexxtSide);
}
