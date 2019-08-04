(function($) {
    function g(elmt, b) {
        var _data = elmt.data("ddslick");
        var d = elmt.find(".dd-selected"), // a
                e = d.siblings(".dd-selected-value"), // input
               // f = a.find(".dd-options"), // ul
               // g = d.siblings(".dd-pointer"), // span
                h = elmt.find(".dd-option").eq(b),
                k = h.closest("li"),
                data_set = _data.settings, 
                m = _data.settings.data[b];
        elmt.find(".dd-option").removeClass("dd-option-selected");
        h.addClass("dd-option-selected");
        _data.selectedIndex = b;
        _data.selectedItem = k;
        _data.selectedData = m;
        if (data_set.showSelectedHTML) { 
            d.html((m.imageSrc ? '<img class="dd-selected-image' + 
                   (data_set.imagePosition == "right" ? " dd-image-right" : "") +
                   '" src="' + m.imageSrc + '" />' : "") + 
                   (m.text ? '<label class="dd-selected-text">' +  m.text + "</label>" : "") +
                    (m.description ? '<small class="dd-selected-description dd-desc' +
                    (data_set.truncateDescription ? " dd-selected-description-truncated" : "") +
                    '" >' + m.description + "</small>" : ""))
        } else
            d.html(m.text);
        e.val(m.value);
        _data.original.val(m.value);
        elmt.data("ddslick", _data);
        listUp(elmt);
        setOption(elmt);
        if (typeof data_set.onSelected == "function") {
            data_set.onSelected.call(this, _data)
        }
    }
    function moveUpDown(elmt) {
        var div = elmt.find(".dd-select"),
            ul = div.siblings(".dd-options"),
            span = div.find(".dd-pointer"), 
            vis = ul.is(":visible");
       // $(".dd-click-off-close").not(ul).slideUp(5000);
       // $(".dd-pointer").removeClass("dd-pointer-up");
        if (vis) {
            ul.slideUp("fast");
            span.removeClass("dd-pointer-up");
        } else {
            ul.slideDown("fast");
            span.addClass("dd-pointer-up");
        }
        setOption(elmt);
    }
    function listUp(a) {
        a.find(".dd-options").slideUp(50);// ul
       // a.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")
    }
    function saveDivHeight(elmt) {
        var divHeight = elmt.find(".dd-select").css("height"); // div
        var c = elmt.find(".dd-selected-description"); // ?
        var d = elmt.find(".dd-selected-image"); //
        if (c.length <= 0 && d.length > 0) {
            elmt.find(".dd-selected-text").css("lineHeight", divHeight);
        }
    }
    function setOption(elmt) {
        elmt.find(".dd-option").each(function() {
            var $this = $(this);
            var height = $this.css("height");
            var description = $this.find(".dd-option-description"); // <small>
            var imag = elmt.find(".dd-option-image");
            if (description.length <= 0 && imag.length > 0) {
                $this.find(".dd-option-text").css("lineHeight", height);
            }
        })
    }
    $.fn.ddslick = function(method) {
        if (object[method]) {
            return object[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof method === "object" || !method) {
            return object.init.apply(this, arguments)
        } else {
            a.error("Method " + method + " does not exists.")
        }
    };
    var object = {},
    parameters =
     {data: [], // JSON data to populate drop down plugin options
      keepJSONItemsOnTop: false, // You can use both HTML select elements and JSON data
                                 // to populate your drop down. By default JSON items are added in drop down
                                 //  after the select options.
      width: 260, // Width in px for the drop down plugin i.e. 400, or "400px".
      height: null, // Height in px for the drop down options i.e. 300, or "300px".
                    // The scroller will automatically be added if options overflows the height.
      background: "#eee",// Background for your drop down
      selectText: "", // Set default text to display when no option is selected.
      defaultSelectedIndex: null,//Set the default index to be selected when initializing plugin
                                 //If not provided then selectText will be displayed
      truncateDescription: true,
      imagePosition: "left", // Set positioning of image in your drop down, left or right.
      showSelectedHTML: true,// Setting false will only display title. Setting true displays title,
                             // description and image.
      clickOffToClose: true, 
      onSelected: function() { }},
    div = '<div class="dd-select">'+
        '<input class="dd-selected-value" type="hidden" />'+
        '<a class="dd-selected"></a>'+
        '<span class="dd-pointer dd-pointer-down"></span></div>',
    options = '<ul class="dd-options"></ul>',
    classes = '<style id="css-ddslick" type="text/css">' + 
        ".dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}" +
        ".dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }" +
        ".dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}" +
        ".dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}" + 
        ".dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }" + 
        
        ".dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}" +
        ".dd-options{ border:solid 1px #ccc; border-top:none;list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}" +
        ".dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }" + 
        ".dd-options > li:last-child > .dd-option{ border-bottom:none;}" +
        ".dd-option:hover{ background:#f3f3f3; color:#000;}" +
        ".dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }" +
        ".dd-option-selected { background:#f6f6f6; }" +
        ".dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}" +
        ".dd-image-right { float:right; margin-right:15px; margin-left:5px;}" +
        ".dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​"+
        "</style>";
    if ($("#css-ddslick").length <= 0) {
        $(classes).appendTo("head");
    }
    object.init = function(elmt) {
        var elmt = $.extend({}, parameters, elmt);
        
        return this.each(function() {
            var $this = $(this), _data = $this.data("ddslick");
            if (!_data) {
         //---------------- keepJSONItemsOnTop ---------------------      
                var optArray = [], j = elmt.data;   
                
                $this.find("option").each(function() {
                    var $this = $(this), c = $this.data();
                    optArray.push({text: $.trim($this.text()),//
                            value: $this.val(),
                            selected: $this.is(":selected"), 
                            description: c.description,
                            imageSrc: c.imagesrc});
                  // alert(optArray); 
                });
                if (elmt.keepJSONItemsOnTop) // true
                    $.merge(elmt.data, optArray);
                else  // false
                    elmt.data = $.merge(optArray, elmt.data);
         //----------------------------------------------------------       
                var orig = $this; 
               // alert($this.attr("id"));// demobasic1
                var ll = $('<div id="' + $this.attr("id") + '"></div>');
                $this.replaceWith(ll);
                $this = ll;
                $this.addClass("dd-container").append(div).append(options);
                
                var _div = $this.find(".dd-select");
                var ul = $this.find(".dd-options");
                ul.css({width: elmt.width});
                _div.css({width: elmt.width, background: elmt.background});
                $this.css({width: elmt.width});
                if (elmt.height != null)
                    ul.css({height: elmt.height, overflow: "auto"});
                
            $.each(elmt.data, function(a, c) {
                   // alert("!");
                    if (c.selected)
                        elmt.defaultSelectedIndex = a;
         ul.append("<li>" + '<a class="dd-option">' + 
       (c.value ? ' <input class="dd-option-value" type="hidden" value="' + c.value + '" />' : "") +
       (c.imageSrc ? ' <img class="dd-option-image' +
       (elmt.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + c.imageSrc + '" />' : "") +
       (c.text ? ' <label class="dd-option-text">' + c.text + "</label>" : "") +
       (c.description ? ' <small class="dd-option-description dd-desc">' + c.description + "</small>" : "") +
                            "</a>" + "</li>")
                });
                
        var n = {settings: elmt, original: orig, selectedIndex: -1, selectedItem: null, selectedData: null};
        $this.data("ddslick", n);
                
                if (elmt.selectText.length > 0 && elmt.defaultSelectedIndex == null) {
                    $this.find(".dd-selected").html(elmt.selectText);
                } else {
                    var o = elmt.defaultSelectedIndex != null && elmt.defaultSelectedIndex >= 0 &&
                            elmt.defaultSelectedIndex < elmt.data.length ? elmt.defaultSelectedIndex : 0;
                    g($this, o);
                }
                $this.find(".dd-select").on("click.ddslick", function() {
                  // !!! do div selected
                    alert(".dd-select");
                    moveUpDown($this);
                });
                $this.find(".dd-option").on("click.ddslick", function() {
                   // !!!  do option selected 
                   alert(".dd-option");
                    g($this, $(this).closest("li").index())
                });
                if (elmt.clickOffToClose) {
                    m.addClass("dd-click-off-close");
                    $this.on("click.ddslick", function(a) {
                        a.stopPropagation();
                    });
                    $("body").on("click", function() {
                        $(".dd-click-off-close").slideUp(50).siblings(".dd-select")
                           .find(".dd-pointer").removeClass("dd-pointer-up");
                    })
                }
            }
        })
    };
    object.select = function(b) {
        return this.each(function() {
            if (b.index)
                g($(this), b.index);
        })
    };
    object.open = function() {
        return this.each(function() {
            var b = $(this), c = b.data("ddslick");
            if (c)
                moveUpDown(b);
        })
    };
    object.close = function() {
        return this.each(function() {
            var b = $(this), c = b.data("ddslick");
            if (c)
                listUp(b);
        })
    };
    object.destroy = function() {
        return this.each(function() {
            var $this = $(this), data = $this.data("ddslick");
            if (data) {
                var data_orig = data.original;
                alert(data_orig);
                $this.removeData("ddslick").unbind(".ddslick").replaceWith(data_orig);
            }
        })
    }
})(jQuery)