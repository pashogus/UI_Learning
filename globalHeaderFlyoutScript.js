/*......................................................................................................................*/
// Mega Menu Columns
$(document).ready(function() { 

	var localeCheckSession = $.cookie('agilent_locale');
	var sessionContents = {};
	switch(localeCheckSession){
		case "ja_JP":
			sessionContents.firstTitle = "Your session is about to expire";
			sessionContents.firstContent1 = "you will be logged out in";
			sessionContents.firstContent2 = "Would you like to stay logged into your Agilent Account?";
			sessionContents.firstButton1 = "NO, LOG ME OUT";
			sessionContents.firstButton2 = "YES, KEEP ME LOGGED IN";
			sessionContents.Footer = "For your security, we will log you out after 30 minutes of inactivity.";
			sessionContents.SecondTitle = "Your session has expired";
			sessionContents.SecondContent1 = "To access your  Agilent account, please log in again.";
			sessionContents.SecondButton = "LOGIN";
			break;
		case "zh_CN":
			sessionContents.firstTitle = "Your session is about to expire";
			sessionContents.firstContent1 = "you will be logged out in";
			sessionContents.firstContent2 = "Would you like to stay logged into your Agilent Account?";
			sessionContents.firstButton1 = "NO, LOG ME OUT";
			sessionContents.firstButton2 = "YES, KEEP ME LOGGED IN";
			sessionContents.Footer = "For your security, we will log you out after 30 minutes of inactivity.";
			sessionContents.SecondTitle = "Your session has expired";
			sessionContents.SecondContent1 = "To access your  Agilent account, please log in again.";
			sessionContents.SecondButton = "LOGIN";
			break;
		case "it_IT":
			sessionContents.firstTitle = "Your session is about to expire";
			sessionContents.firstContent1 = "You will be logged out in";
			sessionContents.firstContent2 = "Would you like to stay logged into your Agilent Account?";
			sessionContents.firstButton1 = "NO, LOG ME OUT";
			sessionContents.firstButton2 = "YES, KEEP ME LOGGED IN";
			sessionContents.Footer = "For your security, we will log you out after 30 minutes of inactivity.";
			sessionContents.SecondTitle = "Your session has expired";
			sessionContents.SecondContent1 = "To access your  Agilent account, please log in again.";
			sessionContents.SecondButton = "LOGIN";
			break;
		default:
			sessionContents.firstTitle = "Your session is about to expire";
			sessionContents.firstContent1 = "You will be logged out in";
			sessionContents.firstContent2 = "Would you like to stay logged into your Agilent Account?";
			sessionContents.firstButton1 = "NO, LOG ME OUT";
			sessionContents.firstButton2 = "YES, KEEP ME LOGGED IN";
			sessionContents.Footer = "For your security, we will log you out after 30 minutes of inactivity.";
			sessionContents.SecondTitle = "Your session has expired";
			sessionContents.SecondContent1 = "To access your  Agilent account, please log in again.";
			sessionContents.SecondButton = "LOGIN";
			break;
	}


/*$(function() {*/
//console.log('yayyy!!!');
    // number of columns
    var defaultNumCols = 5,    
    // get all nodes with class column-list. returns array
    container = $('.column-list'),
    listItem = 'li',
    listClass = 'col-fifth';
    var isCrossLab = false;
    // iterate every node matching to class column-list
    container.each(function() {
        if($(this).parent(".crosslab").length){
           //console.log("CrossLab reached");
           isCrossLab = true; 
           defaultNumCols = 4;
        }
	else{
 	isCrossLab = false; 
           defaultNumCols = 5;
	}


        var itemsPerCol = [];
        // get all nodes matching listItem ('li). Returns an array
        
        var tmpItems = $(this).find(listItem);
        var items = tmpItems;
        if(isCrossLab){
            items = tmpItems.slice(1);
        }
        // sort items based on leaf text
//        items.sort(function(a, b) {
//            return a.textContent === b.textContent
//            ? 0
//            : (a.textContent > b.textContent ? 1 : -1);
//        });
        
        //items.sort(function(a, b) { 
          //  var aText = a.textContent;
          //  var bText = b.textContent;
          //  if(aText > bText) return 1;
         //   if(aText < bText) return -1;
         //   return 0;
       // });
        
        var numCols = (items.length < defaultNumCols) ? items.length : defaultNumCols;
        var minItemsPerCol = Math.floor(items.length / numCols),
        difference = items.length - (minItemsPerCol * numCols);
        
        // compute number of items per column
        for (var i = 0; i < numCols; i++) {
            if (i < difference) {
                    itemsPerCol[i] = minItemsPerCol + 1;
            } else {
                    itemsPerCol[i] = minItemsPerCol;
            }
        }
        for (var h = 0; h < numCols; h++) {
            $(this).append($('<ul ></ul>').addClass(listClass));
            
            for (var j = 0; j < itemsPerCol[h]; j++) {
                var pointer = 0;
                for (var k = 0; k < h; k++) {
                        pointer += itemsPerCol[k];
                }
                $(this).find('.' + listClass).last().append(items[j + pointer]);
            }
        }
        
    
            
    });
//$(".nav.next.column-list").css("display","block !important");


	/*Session Time-out across the application*/
	$("body").append("<div id='sessionExp' style='display:none;' title='Your session has expired'><div class='expiredPop'><div>To access your  Agilent account, please log in again.</div><div class='expiringButton'><a id='logInRedirection' class='btn btn-primary'>LOGIN</a></div></div><div class='expiringFooter'><div>For your security, we will log you out after 30 minutes of inactivity.</div></div></div>");
	
	
	if($.cookie('loginFlag') == "true"){
				
		//$("body").append("<div id='sessionAbtExp' style='display:none;' title='Your session is about to expire'><div id='clockdiv'><div>you will be logged out in <span class='hours'>00</span>:<span class='dynaTime'>02:00</span></div><div class='accountContent'>Would you like to stay logged into your Agilent Account?</div><div class='expiringButton'> <a id='logMeOut' class='btn btn-primary'>NO, LOG ME OUT</a><a id='keepMeIn' class='btn btn-primary'>YES, KEEP ME LOGGED IN</a></div></div><div class='expiringFooter'><div>For your security, we will log you out after 30 minutes of inactivity.</div></div></div>");
		
		$("body").append("<div id='sessionAbtExp' style='display:none;'><div id='clockdiv'><div>"+sessionContents.firstContent1+" <span class='hours'>00:</span><span class='dynaTime'>05:00</span></div><div class='accountContent'>"+sessionContents.firstContent2+"</div><div class='expiringButton'> <a id='logMeOut' class='btn btn-primary'>"+sessionContents.firstButton1+"</a><a id='keepMeIn' class='btn btn-primary'>"+sessionContents.firstButton2+"</a></div></div><div class='expiringFooter'><div>"+sessionContents.Footer+"</div></div></div>");
	
		//title='"+sessionContents.firstTitle+"'
		
		localStorage.setItem('IsSession','true')
		
		//var _redirectUrl = 'index2.html'; // login URL
		var _redirectHandleFirst = null;_redirectHandleSecond = null;_eventCapturing = null;
		var _timeinFirst = "";_timeinSecond = "";
		var temp = 0;
		_timeinFirst = 1499 + "000"; 

		function startTimer(){
			if(localStorage.getItem('IsSession') == "true"){
				console.log('true')
				if($('#sessionAbtExp').parent().hasClass('ui-dialog')){
					$("#sessionAbtExp").dialog("close");
					clearInterval(_redirectHandleSecond);
					localStorage.setItem('IsSession','false')
				}
				clearTimeout(_redirectHandleFirst);
				temp = 1;
			}else{
				console.log('false')
				if(temp == 1){
					_redirectHandleFirst = setTimeout(function () {
						$("#sessionAbtExp").dialog({
							resizable: false,
							draggable: false,
							modal: true,
							dialogClass:"sessionAbtExp",
							position: { my: 'top', at: 'top+150' },
							title:sessionContents.firstTitle,
							height:356,
							width:560,
							open: function(event, ui) {
								$(document).off("mousemove mousedown keypress scroll mousewheel touchmove click");
								var timerMatch = true;					
								function startTimer(duration, display) {
									var timer = duration, minutes, seconds;
									_redirectHandleSecond = setInterval(function () {
										minutes = parseInt(timer / 60, 10);
										seconds = parseInt(timer % 60, 10);

										minutes = minutes < 10 ? "0" + minutes : minutes;
										seconds = seconds < 10 ? "0" + seconds : seconds;

										display.textContent = minutes + ":" + seconds;
										
										if (--timer < 0 && timerMatch == true) {		
											timerMatch = false;
											$.cookie('systemLogout','true');
											$("#sessionAbtExp").dialog("close");
											if($.cookie('IPU') == "True"){
												doLogout('?isHubSpanPage=true');
											}else{
												
												doLogout('?endURL='+encodeURIComponent(location.href));
											}
										}
										
									}, 1000);
								}

								var fiveMinutes = 60*5,
								display = document.querySelector('.dynaTime');
								startTimer(fiveMinutes, display);

								$('#sessionAbtExp #logMeOut').bind('click',function(){
									$.cookie('systemLogout','false')
									if($.cookie('IPU') == "True"){
										doLogout('?isHubSpanPage=true');
									}else{
										doLogout();
									}
								});
								
								$('#sessionAbtExp #keepMeIn').bind('click',function(){
									location.reload();
								});
							},
							close: function(){
								
							}
						});
					},_timeinFirst)
					temp = 0;
				}
			}
			setTimeout(function(){ startTimer(); },1000)
		}
		
		function eventCapturedCall(){
			if($.cookie('systemLogout') != 'true'){
				localStorage.setItem('IsSession','true');
				clearTimeout(_eventCapturing);
				_eventCapturing = setTimeout(function () {
					console.log('event capture call and changing IsSession value')
					localStorage.setItem('IsSession','false')
				},1000);
			}
		}
		
		if($.cookie('IPU') == "True"){
			$(document).on("click",function(e){
				eventCapturedCall(e);
			});
		}else{
			$(document).on("mousemove mousedown keypress scroll mousewheel touchmove",function(e){				
				eventCapturedCall(e);
			});
		}
		eventCapturedCall();
		startTimer();
	}
	/*Session Time-out across the application*/
	
	
	/*second modal expired*/
	if($.cookie('systemLogout') == 'true'){
		if($.cookie('IPU') != "True"){
			if(location.pathname == "/common/login.jsp"){
				$( "div.containerPanel" ).before( '<div id="error-messages" class="alert alert-dismissable alert-danger">Your session has expired. To access your Agilent account, please login again.</div>' );
				$.cookie('systemLogout','false');
			}else{
				$("#sessionExp").dialog({
					resizable: false,
					draggable: false,
					modal: true,
					dialogClass:"sessionExp",
					position: { my: 'top', at: 'top+150' },
					height:327,
					width:496,
					open: function(event, ui) { 
						$('#sessionExp #logInRedirection').bind('click',function(){
							$.cookie('systemLogout','false');
							doLogin();
						});
					},
					close: function(){
						$.cookie('systemLogout','false');
						//if(location.protocol == 'https:'){
						//	doLogin();
						//}
					}
				});
			}
		}
	}
	/*second modal expired*/

});



/*......................................................................................................................*/
// Mega Menu See All  Columns
 
$(function() {
    
    // number of column
    var defaultNumCols = 4,    
    // get all nodes with class column-list. returns array
    container = $('#seeall'),
    listItem = 'li',
    listClass = 'col-fifth_sa',
    spaceClass = 'listspace',
    headerClass = 'nav-header';
  

     if($(window).width() < 996 && $(window).width() > 796 ){
    	//alert("window <996");
        defaultNumCols = 3;  
        } 

	if ($(window).width()< 796){
        // alert("window <796 ", $(window).width());
         defaultNumCols = 2;  
   	 }  

     
    // iterate every node matching to class column-list
//    container.each(function() {
        var itemsPerCol = [];
        // get all nodes matching listItem ('li). Returns an array
        
        var tmpItems = $(container).find(listItem);
        if(tmpItems.length === 0){
            return;
        }
        
        
        var startChar = '^';
        var items = [];       
        for(var index = 0; index < tmpItems.length; index++){
            if($(tmpItems[index]).text().charAt(0).toUpperCase() !== startChar){
                startChar = $(tmpItems[index]).text().charAt(0).toUpperCase();
                var newNode = $('<li >' + startChar + '</li>').addClass(headerClass);
             
                items.push(newNode);
            }
            items.push(tmpItems[index]);
        }  
      

          
        var numCols = (items.length < defaultNumCols) ? items.length : defaultNumCols;
        var minItemsPerCol = Math.floor(items.length / numCols),
        difference = items.length - (minItemsPerCol * numCols);
        
        var startIndex = 0;
        var itemsConsumed = 0;
        // compute number of items per column
        for (var i = 0; i < numCols && itemsConsumed <= items.length; i++) {
            if (i < difference) {
                    itemsPerCol[i] = minItemsPerCol + 1;
            } else {
                    itemsPerCol[i] = minItemsPerCol;
            }
            if($(items[startIndex + itemsPerCol[i] - 1]).hasClass(headerClass)){
                itemsPerCol[i]++;
            }
            startIndex = startIndex + itemsPerCol[i];
            itemsConsumed += itemsPerCol[i];            
        }
        numCols = itemsPerCol.length;
        
        
        for (var h = 0; h < numCols; h++) {
	var ipadclass = document.getElementsByClassName("col-fifth_sa");
	//alert(ipadclass);
            $(container).append($('<ul ></ul>').addClass(listClass). addClass(spaceClass));
		if(defaultNumCols ==2){
		ipadclass[h].style.maxWidth =50 + "%";
		}
		if(defaultNumCols ==3){
		ipadclass[h].style.maxWidth =33 + "%";
		}



          	for (var j = 0; j < itemsPerCol[h]; j++) {
                var pointer = 0;
                for (var k = 0; k < h; k++) {
                        pointer += itemsPerCol[k];
                }
                if((j+pointer) < items.length){
                    $(container).find('.' + listClass).last().append(items[j + pointer]);
                }
            }


        } 
 
    $("#seeall").css("visibility", "visible");

//    });


});

/*for genemoics pages */
$(document).ready(function() {
$(".nav.next.column-list").removeAttr("style");
});


/* for 13374 careerpage */

$(document).ready(function(){
   
if(window.location.href.indexOf("agilent-stage") > -1) {
//$('.globalHeader meta[name=viewport]').remove();
$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1');
}


var BrowserUpdateAlert=$.cookie("BrowserUpdateAlert");
if(BrowserUpdateAlert==null){
	var userBrowser = navigator.userAgent;
	if(userBrowser!=null && userBrowser.indexOf("compatible; MSIE 7.0")>-1){
					var currURL = location.href;
					var destURL = "//stgwww.agilent.com/cs/ContentServer?pagename=Sapphire/BrowserUpdateAlert" + "&returnURL=" + encodeURIComponent(currURL);
					location.href = destURL;
	}
           
     }  
});

$(document).ready(function(){
//for home page carousel
	/*$('.homeContainer div[id^="bx-pager"] ul a').mousedown(function(e){
		console.log("hasdasi");
		var sliderLabel = e.target.firstChild.innerTEXT;
		console.log(sliderLabel);
		agilentEventTracker('eventTracker','Home Page Clicks','Carousel',sliderLabel,0)
	
	});*/

/************************************************************************
*********************G_O_O_G_L_E__A_N_A_L_Y_T_I_C_S**********************
*************************************************************************/	
/************* start of header navigation tracking**********************/

//for top nav primary links
//	$('.globalHeaderContainer ol.column-list ul.col-fifth li a').mousedown(function(e){
	$('.page.globalHeaderContainer .nav.next a').mousedown(function(e){

		try {
			var navLabel = e.target.innerText;
			var breadCrumbLevel1 = '';
			var breadCrumbLevel2 = '';
			var breadCrumbLabel = '';
			//var breadCrumbLevel1 = e.target.parentElement.parentElement.parentElement.previousElementSibling.children[0];
			//var breadCrumbLevel2 = e.target.parentElement.parentElement.parentElement.previousElementSibling.children[1];
			var closestParentObject = ''; 
			try{
				closestParentObject = e.target.closest('div.globalHeaderContainer');
			}catch (err){
				//fix for ie which does not recognize jquery closest
				closestParentObject = closestByClass(e.target, 'page globalHeaderContainer active' );
			}
			if (isMobil()){ /////////////// logic for womp
				breadCrumbLevel1 = e.target.dataset.sectionName.split(':')[1];
				breadCrumbLevel2 = e.target.dataset.sectionName.split(':')[2];
				if (typeof(breadCrumbLevel1) !== "undefined"){
					breadCrumbLabel = breadCrumbLevel1;
					if (typeof(breadCrumbLevel2) !== "undefined" && breadCrumbLevel2.toLowerCase() != navLabel.toLowerCase() ){
						breadCrumbLabel = breadCrumbLabel + ' > ' + breadCrumbLevel2;
					}	
				}
			}else{ /////////// logic for the desktop version
				breadCrumbLevel1 = $(closestParentObject).find('ol.globalHeaderBreadcrumb')[0].children[0];
				breadCrumbLevel2 = $(closestParentObject).find('ol.globalHeaderBreadcrumb')[0].children[1];
				if (typeof(breadCrumbLevel1) !== "undefined"){
				breadCrumbLabel = breadCrumbLevel1.innerText;
					if (typeof(breadCrumbLevel2) !== "undefined"){
						breadCrumbLabel = breadCrumbLabel + ' > ' + breadCrumbLevel2.innerText;
					}	
				}
			}	
			agilentEventTracker('eventTracker','Primary Navigation Clicks',breadCrumbLabel,navLabel,0);
		}catch(err){
			console.log(" error in header ga tracking : " + err.message);
		}
	});
	
	//for the see all products link only
		/*<sl:translate>*/var see_all_product = 'See All Products'/*</sl:translate>*/;
		$('a:contains('+see_all_product+')').mousedown(function(e){
		try {
				agilentEventTracker('eventTracker','Header Navigation Clicks','Products','See All Products',0)
			}catch (err){
				console.log(" error in footer contact info ga tracking : " + err.message);
			}
		});
/************* end of header navigation tracking**********************/

/************* start of footer navigation tracking**********************/
//for footer social bar
	$('#homeSocialBar.homeSocialBar.globalHeaderContainer a').mousedown(function(e){
		try {
			var navLabel = e.target.alt;
			if (typeof(navLabel) !== "undefined"){
				agilentEventTracker('eventTracker','Footer Navigation Clicks','Connect with Agilent',navLabel,0)
			} 
		}catch (err){
			console.log(" error in footer social ga tracking : " + err.message);
		}		
	});
	
//for footer links
	$('footer[id="footer"] .footer-nav  .footer-links a').mousedown(function(e){
		try {
			var navLabel = e.target.innerText;
			var parentObject = '';
			try{
				parentObject = e.target.closest('div');
			} catch (err){
				parentObject = closestByClass(e.target, 'DIV' );
			}
			var evenActionLabel = '';
			if (typeof(parentObject) !== "undefined"){
				var className = 	$(parentObject).attr('class');
				if ((className.trim() == 'col-sixth')){
					evenActionLabel = $(parentObject).find('span')[0].innerText;
				}else if (className.trim() == 'legal') {
					evenActionLabel = 'Legal Notice';
				} else {
					evenActionLabel = 'default';
				}
			agilentEventTracker('eventTracker','Footer Navigation Clicks',evenActionLabel,navLabel,0)
			}	
		}catch (err){
			console.log(" error in footer navigation ga tracking : " + err.message);
		}
	});	
		
//for footer links ( contact us section)
	$('footer[id="footer"] .footer-nav  .agilent-details a').mousedown(function(e){
		try {
			var navLabel = e.target.innerText;
			agilentEventTracker('eventTracker','Footer Navigation Clicks','Contact Info',navLabel,0)
		}catch (err){
			console.log(" error in footer social ga tracking : " + err.message);
		}
	});
	

//CHECK IF THE PAGE LOADED WOMPMOBIL VERSION ////////////////////
	//var objValid= $("[id*='womp']").get();
	if ( isMobil()) {
	//for footer links ( contact us section) WOMPMOBIL VERSION 
		$('#footer .agilent-details a').mousedown(function(e){
			try {
				var navLabel = e.target.innerText;
				agilentEventTracker('eventTracker','Footer Navigation Clicks','Contact Info',navLabel,0)
			}catch (err){
				console.log(" error in footer contact info ga tracking : " + err.message);
			}
		});
		
	//for footer links ( legal notice section) WOMPMOBIL VERSION
		$('#footer .legal a').mousedown(function(e){
			try {
				var navLabel = e.target.innerText;
				agilentEventTracker('eventTracker','Footer Navigation Clicks','Legal Notice',navLabel,0)
			}catch (err){
				console.log(" error in footer legal ga tracking : " + err.message);
			}
		});	
	}

//END OF WOMPMOBIL VERSION 
/************* end of footer navigation tracking**********************/

})

/*for  datalayer event push*/
function agilentEventTracker (eventVal, eventCatVal , eventActVal, eventLblVal , eventValVal){
	
	if (typeof dataLayer === 'undefined') {
		dataLayer = [{ 'event':eventVal, 'eventCat': eventCatVal, 'eventAct':eventActVal, 'eventLbl': eventLblVal, 'eventVal':eventValVal  }]
	}
	else {
		dataLayer.push({'event':eventVal, 'eventCat': eventCatVal, 'eventAct':eventActVal, 'eventLbl': eventLblVal, 'eventVal':eventValVal });
	}
}	

/*utility function*/
/**
 * Get the closest element of a given element by class
 */
var closestByClass = function(el, clazz) {
    // Traverse the DOM up with a while loop
	if (typeof(el) !== "undefined"){
		while (el.className.trim() != clazz && el.nodeName != clazz ) {
			// Increment the loop to the parent node
			el = el.parentNode;
			if (!el) {
				return null;
			}
		}
	}
    return el;	
}

/**
 * Check if device is Mobil
 */
function isMobil(){
	var objValid= $("[id*='womp']").get();
	var scriptObj = document.getElementsByTagName("script");
    var iter=0;
	var x = '';
	if ( !isEmpty(objValid) ) {
		//commented code for mobliescript check
		/*while (iter<scriptObj.length){
			if ( typeof scriptObj[iter] !== 'undefined') {
				x = scriptObj[iter].src;
				if ( typeof x !== 'undefined' &&  x.indexOf('MobileScript.js') > -1){
					console.log ('is mobil ');
					return true;
				}
				iter++;
			}
		}*/return true;
	}
	return false;
}

/**
* Check if the value is empty
**/
function isEmpty(value){
  return (typeof value === 'undefined' || value == null || value.length === 0);
}
/*utility function*/
/************************************************************************
***************E_N_D__O_F__G_O_O_G_L_E__A_N_A_L_Y_T_I_C_S****************
*************************************************************************/	

/*APP-12850*/

$('.jpModal').click(function(){
    $(this).addClass("japanModal"); 
    

          var cur = $(this);
	      $(this).addClass("japanModal");
	     var url = $(this).attr('h-ref');
		 		 
		 $("#dialog").addClass("japanModal");

                $("#dialog").dialog({
                    resizable: false,
                    modal: true,
                    height:250,
                    width:650,
					position: { my: 'top', at: 'top+150' },
                    closeOnEscape: false,
                    open: function(event, ui) { 
						$(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
						var dialogBody = $(event.target).parents(".ui-dialog.ui-widget").addClass("japanModalBox");
						$('.japanModalBox button').removeClass("ui-state-hover ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-focus ");

					//console.log(dialogBody);
					 },
					buttons: [
					{
                    text: function (){
                                         	if($.cookie('AG_LOCALE') == "JPjpn") {
						return "いいえ";
						}
						else {
						return "No";
						}

					},
					
					class: "btn btn-primary pull-right",
           	              click: function () {
                	                    $(this).dialog("close");
                              }
                   },{
				text: function (){
				if($.cookie('AG_LOCALE') == "JPjpn") {
					 return "はい";
				}
				else {
				 return "Yes";
				}
			},
	   	 class: "btn btn-primary pull-right",
	   	 click: function () {
		            cur.attr('href',url);
		           cur.trigger('click');
	                    cur.removeAttr('href');
            		        $(this).dialog("close");
                           }
        	}
    	]

	});


$(".japanModalBox button").mouseover(function() {
    $('button').removeClass("ui-state-hover ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-focus ");
  });

$(".japanModalBox button").focusin(function() {
  $( this).removeClass("ui-state-focus");
});

$('.japanModalBox button span').removeClass("ui-button-text");

$(".japanModalBox button").focusin(function() {
  $( this).removeClass("ui-state-focus");
});
$(".japanModalBox button").focus(function() {
  $( this).removeClass("ui-state-focus");
});

})


/*APP-4750*/
/////////////////search box placeholder code//////////////
/*$(document).ready(function () {
                var placeHolderText = $('.homeSearchBox').attr('placeholder');
                //var searchBoxObj = $('.homeSearchBox');
                var isOperaMini = Object.prototype.toString.call(window.operamini) === '[object OperaMini]'
                var cond = 'placeholder' in document.createElement('input') && !isOperaMini ;
                if (cond){// this is override the default placeholder behaviour where text must be removed on focus instead of on change
                                $('.homeSearchBox').focus(function () {
                                                $(this).attr('placeholder','');
                                }).blur(function () {
                                                   $(this).attr('placeholder',placeHolderText);
                                });
                }else{
                                //fix for ie9 where placeholder does not work
                                $('.homeSearchBox').val($('.homeSearchBox').attr('placeholder')).addClass( "searchPlaceHolder" );
                                $('.homeSearchBox').focus(function () {
                                                if ($(this).val() == $(this).attr('placeholder')) {
                                                                $(this).val('');
                                                                $(this).removeClass( "searchPlaceHolder" )
                                                }
                                }).blur(function () {
                                                if ($(this).val() == '') {
                                                                $(this).val($(this).attr('placeholder'));
                                                                $(this).addClass( "searchPlaceHolder" )
                                   }
                                });
                }
});*/

/////////////////search box placeholder code//////////////


/*CR 026*/
$(document).ready(function(){
var count = 0;
$("li.brandlist").each(function (index, value) {
                count++;
                var parentUlNode = $(this).closest("ul.col-fifth");
                parentUlNode.addClass('ImgBrand');

});
})







