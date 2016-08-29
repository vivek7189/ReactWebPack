import Hello from './hello.jsx';
import World from './world.jsx';
import SearchBar1 from './search.jsx'




var main = document.getElementById('main');
var con = document.getElementsByClassName('content');
var lstElem =con[0].lastChild;
 var list = document.getElementById("list");
 var index=0;
function updateContent(e){
    //console.log('event',e);
var docHeight = window.document.body.scrollHeight;
var winHeight = window.innerHeight;
var scrHeight = window.document.body.scrollTop;

    if((docHeight <= winHeight+scrHeight) && (e.wheelDelta <0)){
        console.log('bottom reached');
        //console.log('con',con);
      index= index+1;
        var text = document.createTextNode(index);
       //document.body.appendChild(main.firstChild.cloneNode(true));
       var node=main.firstElementChild;
       var cln=node.cloneNode(true);
       console.log('noe',node);
        main.appendChild(cln);
        main.appendChild(text);
       //console.log('tt',tt);
    }
     if((docHeight <= winHeight+scrHeight) && (e.wheelDelta >0)){
        console.log('remove content');
       index= index-1;
        main.removeChild(main.lastElementChild);
         main.removeChild(main.lastElementChild);
        }
}
window.addEventListener('mousewheel',updateContent,true);