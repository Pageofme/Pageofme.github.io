/*Name this external file gallery.js*/

function upDate(previewPic){
 
  x=document.getElementById('image');
  x.innerHTML=previewPic.alt;
  x.style.backgroundImage='url(' + previewPic.src + ')';
	}

function unDo(){
    
   y=document.getElementById('image');
   y.style.backgroundImage="url('')";
   y.innerHTML='Hover over or press the tab button an image below to display here.';
	}

function tabfocus(){

  var tabindex=document.querySelectorAll('img');
   for(let i=0;i<tabindex.length; i++){
      console.log("tabindex",i)
      tabindex[i].setAttribute("tabindex","0");
      tabindex[i].setAttribute("onfocus","upDate(this)");
      tabindex[tabindex.length-1].setAttribute("onblur","unDo()")
   }
}

 