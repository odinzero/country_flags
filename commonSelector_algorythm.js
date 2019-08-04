var sortitems = 1; // Automatically sort items within lists? (1 or 0)

var allowRusLang = true; // if true option.text only in russian lang
// if false option.text only in eng    lang

function move(fbox, tbox) {
    // alert("move");
    for (var i = 0; i < fbox.options.length; i++) {
        if (fbox.options[i].selected && fbox.options[i].value !== "") {
            var no = new Option();
            no.value = fbox.options[i].value;
            no.text = fbox.options[i].text;
//            bindBackground(no);
            setRussOrEngBackground(no);

            tbox.options[tbox.options.length] = no;

            fbox.options[i].value = "";
            fbox.options[i].text = "";
            fbox.options[i].style.background = "none";
        }
    }
    BumpUp(fbox);
    if (sortitems)
        SortD(tbox);
}

function BumpUp(box) {
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].value == "") {
            for (var j = i; j < box.options.length - 1; j++) {
                box.options[j].value = box.options[j + 1].value;
                box.options[j].text = box.options[j + 1].text;
//                bindBackground(box.options[j]);
                setRussOrEngBackground(box.options[j]);

            }
            var ln = i;
            // alert(ln);
            break;
        }
    }
    if (ln < box.options.length) {
        box.options.length -= 1;
        BumpUp(box);
    }
}

function SortD(box) {
    var temp_opts = new Array();
    var temp = new Object();
    for (var i = 0; i < box.options.length; i++) {
        temp_opts[i] = box.options[i];
//        bindBackground(temp_opts[i]);
        setRussOrEngBackground(temp_opts[i]);
    }
    for (var x = 0; x < temp_opts.length - 1; x++) {
        for (var y = (x + 1); y < temp_opts.length; y++) {
            if (temp_opts[x].text > temp_opts[y].text) {

                temp = temp_opts[x].text;
                temp_opts[x].text = temp_opts[y].text;
                temp_opts[y].text = temp;

//                bindBackground(temp_opts[x]);
//                bindBackground(temp_opts[y]);
                setRussOrEngBackground(temp_opts[x]);
                setRussOrEngBackground(temp_opts[y]);

                temp = temp_opts[x].value;
                temp_opts[x].value = temp_opts[y].value;
                temp_opts[y].value = temp;


            }
        }
    }
    for (var i = 0; i < box.options.length; i++) {
        box.options[i].value = temp_opts[i].value;
        box.options[i].text = temp_opts[i].text;
//        bindBackground(box.options[i]);
        setRussOrEngBackground(box.options[i]);
    }
}

function SortR(box) {
    var temp_opts = new Array();
    var temp = new Object();
    for (var i = 0; i < box.options.length; i++) {
        temp_opts[i] = box.options[i];
//        bindBackground(temp_opts[i]);
        setRussOrEngBackground(temp_opts[i]);
    }
    for (var x = 0; x < temp_opts.length - 1; x++) {
        for (var y = (x + 1); y < temp_opts.length; y++) {
            if (temp_opts[x].text < temp_opts[y].text) {
                temp = temp_opts[x].text;
                temp_opts[x].text = temp_opts[y].text;
                temp_opts[y].text = temp;

//                bindBackground(temp_opts[x]);
//                bindBackground(temp_opts[y]);
                setRussOrEngBackground(temp_opts[x]);
                setRussOrEngBackground(temp_opts[y]);

                temp = temp_opts[x].value;
                temp_opts[x].value = temp_opts[y].value;
                temp_opts[y].value = temp;
            }
        }
    }
    for (var i = 0; i < box.options.length; i++) {
        box.options[i].value = temp_opts[i].value;
        box.options[i].text = temp_opts[i].text;
//        bindBackground(box.options[i]);
        setRussOrEngBackground(box.options[i]);
    }
}

function noSorting()
{
    // forbid right order
    sortitems = 0;
}

function rightOrder1(tbox)
{
    // allow right order
    sortitems = 1;
    SortD(tbox);
}

function reverseOrder1(tbox)
{
    // forbid right order
    sortitems = 0;
    SortR(tbox);
}

function setRussOrEngBackground(option)
{
    if (allowRusLang)
        bindBackground(option);
    else
        bindBackground_eng(option);
}


