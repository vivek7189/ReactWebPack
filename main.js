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

// push all zeros to right side of array
var array=[4,5,0,0,8,0,1,0,0,0,8,99,66,22,4,0,4,0,3];
function pushToRight(array){
    var arr=array;
    var i=0;
    var arrlen=arr.length;
    var zeroPointStart=0;
    var zeroPointEnd=0;
    var countZero=0;
    for(i=0;i<arrlen;i++){
        if(arr[i] ===0 ){
             countZero++;
            if(zeroPointStart===0){
             zeroPointStart=i;
            }
            
        }
        if((zeroPointStart > 0) && arr[i] !== 0){
            arr[zeroPointStart]=arr[i];
            arr[i]=0;
            zeroPointStart++;
        }
    }
     console.log("array",arr,countZero);
}

pushToRight(array);

// array with 0 and 1 partition

var array2=[1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1];
function partionArray(arr){
    var left=0;
    var right =arr.length-1;
    while(left < right){

        while(arr[left] === 0 && left < right){
                left++;
        }
        while(arr[right] === 1 && left < right){
                right--;
        }
        if(1){
        arr[left] =0;
        arr[right]=1;
        left++;
        right--;
        }

    }
    console.log('partionArray',arr);
}
partionArray(array2);

// clouser add to button
function callIt(i){
   return function() {
      console.log('You clicked element #' + i);
   }

} 
var nodeAll = document.getElementsByTagName('input');
for(var i=0;i<nodeAll.length;i++){
        nodeAll[i].addEventListener('click',callIt(i));
         
}
/*
//or u can code in below format
function callIt(i){
      console.log('You clicked element #' + i);
} 
var nodeAll = document.getElementsByTagName('input');
for(var i=0;i<nodeAll.length;i++){
        nodeAll[i].addEventListener('click',callIt.bind(this,i));
         
}

*/

// longest common sustring

var str1='abcd';
var str2='abc';
var arr=[];
var j=6;
for ( var i = 1; i <= j; i++ ) {
     arr[i] = []; 
}
function longestSubStr(a,b){
   for(var i=1;i<=a.length;i++){
         for(var j=1; j<=b.length;j++){
                if(a[i] === a[j]){
                    var t=i-1;
                    var g=j-1;
                   arr[i][j]=arr[t][g] +1;
                }else{
                    arr[i][j]=0
                 }
         }

   }
   console.log("arr",arr);
}
//longestSubStr(str1,str2);
function getAllText(node){
  var allText = [];

  function getNodeText(node){
      if(node && node.childNodes && node.childNodes.length){
          for(var i = 0, len = node.childNodes.length; i<len; i++){
              getNodeText(node.childNodes[i]);
          }
      }
      else{
          allText.push(node.nodeValue);
     }
  }
  getNodeText(node);
   console.log(allText.join(''));
}

var elem = document.body;
//getAllText(elem);

// get all atribute of html page
var attrib =[];
function traverseDom(node){
//console.log('node',node);
     if(node.attributes){
         attrib.push(node.attributes);
     }
     if(node.childNodes.length > 0){
            var child =node.childNodes;
           // NodeList.prototype.map =Array.prototype.map;
            var child1=Array.prototype.slice.call(child);
            child1.map(function(value,index){
                console.log(index,value);
            });
            for(var i = 0, len = node.childNodes.length; i<len; i++){
              //traverseDom(node.childNodes[i]);
          }
     }
}
//traverseDom(elem);
console.log(attrib);
function isPrime(number) {
   // If your browser doesn't support the method Number.isInteger of ECMAScript 6,
   // you can implement your own pretty easily
   if (typeof number !== 'number' || !Number.isInteger(number)) {
      // Alternatively you can throw an error.
      return false;
   }

   if (number < 2) {
      return false;
   }
   
   if (number === 2) {
      return true;
   } else if (number % 2 === 0) {
      return false;
   }

   var squareRoot = Math.sqrt(number);
   for(var i = 3; i <= squareRoot; i += 2) {
      if (number % i === 0) {
         return false;
      }
   }

   return true;
}

// get getElementsByAttribute

function getElementsByAttribute(name){

}
//getElementsByAttribute(va);
//remove all children from an element
var element4 = document.getElementById('top');
var inner = document.getElementById('inner');
//while(element4.firstChild){
  //element4.removeChild(element4.firstChild);
//}

// remove a node without specifying the element parent nodevar 
var nodeToDel=document.getElementById('nested');
//var tt=nodeToDel.parentNode.removeChild(nodeToDel);
////console.log('tt',tt);
//tt.insertBefore(element4);
//element4.insertBefore(tt,null);

// longest common substring
var str1="abcdf";
var str2="dabc";
var tt={};
function longestStr(a,b){
    for(var i=0;i<a.length;i++){
            for(var j=0;j<b.length;j++){
               // console.log("a",i,"b",j);
                if(a[i] === b[j]){
                    console.log(i,j);
                }
                else{
                    console.log('no match');
                }
            }
    }
}
longestStr(str1,str2);

// linked list in javacript
var node ={data:'',next:''}
function Node(data){
    this.data=data
    this.next=null;
}
function LinkedList (){
            this.head=null;
}

LinkedList.prototype.add= function (data){
    var node = new Node(data);
    if(this.head === null){
            this.head=node;
    }else{
        var temp=this.head;
        while(temp.next){
                temp=temp.next
        }
        temp.next=node;
    }
}
LinkedList.prototype.reverse = function(){
    if(this.head == null){
        console.log('only one item is there in linkedt list');
        return;
    }else{
        var root= this.head;
        var current= this.head;
        var previous;
        var next;
        while(current !== null){
                next=current.next;
                current.next=previous;
                previous=current;
                current=next;
        }
        root=previous;
        console.log('rev',root);
    }
}
var list = new LinkedList();
list.add('vivek');
list.add('kapil');
list.add('kapil3');
list.reverse();
//console.log('list',list);


function isChild(node){

  while(node.parentNode !== null){
        if(node.parentNode === element4){
            console.log('yes child');
        }
        node =node.parentNode
  }
}

isChild(nodeToDel);