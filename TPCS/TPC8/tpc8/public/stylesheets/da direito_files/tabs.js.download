function insertTab(event,obj){var tabKeyCode=9;if(event.which)
var keycode=event.which;else
var keycode=event.keyCode;if(keycode==tabKeyCode){if(event.type=="keydown"){if(obj.setSelectionRange){var s=obj.selectionStart;var e=obj.selectionEnd;obj.value=obj.value.substring(0,s)+
"\t"+obj.value.substr(e);obj.setSelectionRange(s+1,s+1);obj.focus();}else if(obj.createTextRange){document.selection.createRange().text="\t"
obj.onblur=function(){this.focus();this.onblur=null;};}else{}}
if(event.returnValue)
event.returnValue=false;if(event.preventDefault)
event.preventDefault();return false;}
return true;}