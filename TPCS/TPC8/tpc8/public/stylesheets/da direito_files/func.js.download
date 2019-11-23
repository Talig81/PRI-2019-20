function countWords(){var formcontent=document.textform.text.value;formcontent=formcontent.split(" ");alert("Word Count:\n\nYour document contains about\n\n"+formcontent.length+" Words");doWarn=0;}
function countChars(){var formcontent=document.textform.text.value;alert("Character Count:\n\nYour document contains about\n\n"+formcontent.length+" Characters (including whitespace)");doWarn=0;}
function openAsPopUp(){document.textform.action="/";document.textform.target="popupwin";doWarn=0;window.open('','popupwin','toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=500,height=400,top=0,left=0');document.textform.submit();document.textform.action="download.html";document.textform.target="download_frame";}
function checkForPopUp(){if(window.name!=="popupwin")
{openAsPopUp();}
else
{alert("PopUp Window is already open.");}}