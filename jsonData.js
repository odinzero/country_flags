
var returnValue = null;

function json_Data()
{

    var xhp = new XMLHttpRequest();
    xhp.open('GET', 'countries.json', true);

    xhp.onreadystatechange = function()
    {
        if (xhp.readyState === 4)
        {
            var json = eval('(' + xhp.responseText + ')');

            var returnValue = json.country[0].flag;

            // OnStateChanged(returnValue);

            //resp = JSON.parse(xhp.responseText);

//            if (typeof callback == "function") {
//                // apply() sets the meaning of "this" in the callback
//                callback.apply(xhr);
//            }
        }

    }
    xhp.send();

}

function OnStateChanged(x)
{
    returnValue = x;
}


var xmlhttp;
function loadXMLDoc(url, cfunc)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function AJAX( callback1 )
{ 
    var fValue = [];     // data store for image path 
    var sValue = [];     // data store for rus names
    var sValue_eng = []; // data store for eng names 
    
    if (window.XMLHttpRequest) {
        var xmlhttp = new XMLHttpRequest();
    } else {
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
            var json = eval('(' + xmlhttp.responseText + ')');
//            rValue = json.country[i].flag; 
            
            for( var i = 0; i < 248; i++) 
            {
                  fValue[i] = json.country[i].flag;
                  flagData[i] = fValue[i];
                 
                  sValue[i] = json.country[i].state; 
                  stateData[i] = sValue[i];
                 
                  sValue_eng[i] = json.country[i].en_name; 
                  stateData_eng[i] = sValue_eng[i];
             }
              callback1(flagData, stateData, stateData_eng  ); 
//              callback2(stateData);
        }
    }
    xmlhttp.open("GET", "countries.json", true);
    xmlhttp.send();
    
    //return callback(rValue);
}

  var flagData = [];  // data store for image path
  var stateData = [];  // data store for rus names
  var stateData_eng = []; // data store for eng names 
  var commonArray = []; 
  
 function loadSomething() {
     //   var queryString = "value=" + document.getElementById("foo").value;
        
        AJAX( function( response1, response2, response3) {
           // document.getElementById("output").innerHTML = response;
//           for(var i = 0; i < arr1.length; i++) {
            flagData      = response1;
            stateData     = response2;
            stateData_eng = response3;
            
            for( var i = 0; i < flagData.length; i++) {
            if(flagData[i] === undefined)  alert("!!!! " + i);
                 //alert(stateData[0]);
             }
        });
        
       setTimeout(function(){ 
            for( var i = 0; i < arr1.length; i++) {
               // alert(ajaxData[i]);
            }
            
       }, 150);     
       
    }
    
    
    function ttt()
    {
        jQuery.get('countries.json', { "country[]": ["flag"] }  )
                .done(function( d ) {
                   // d = country[0].flag;
                   alert( "Data Loaded: " + country[0].flag );
        });
       
       //alert(":  " + t);
    }


