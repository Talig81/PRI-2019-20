function trimAll(sString)
{while(sString.substring(0,1)==' ')
{sString=sString.substring(1,sString.length);}
while(sString.substring(sString.length-1,sString.length)==' ')
{sString=sString.substring(0,sString.length-1);}
return sString;}
function addEvent(obj,evType,fn){if(obj.addEventListener){obj.addEventListener(evType,fn,false);return true;}else if(obj.attachEvent){var r=obj.attachEvent('on'+evType,fn);return r;}else{return false;}}
function KeepOnPage(e)
{if(!e)
e=window.event;if(!e)
return;if(doWarn==1&&document.textform.text.value!==default_text&&trimAll(document.textform.text.value)!=="")
{e.cancelBubble=true;e.returnValue='Warning from EditPad.org:\n\nNavigating away from this page will delete your text if you haven\'t already saved it.';}
if(e.stopPropagation)
e.stopPropagation();doWarn=1;}
addEvent(window,'beforeunload',KeepOnPage);