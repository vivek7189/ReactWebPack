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
//longestStr(str1,str2);

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

LinkedList.prototype.remove= function(data){
   if(this.head === null || this.head.next === null){
       console.log('linked list is empty');
   }
   else{
       var temp=this.head;
       var previous;
       var next;
       while(temp.data !== data){
            previous=temp;
            temp=temp.next;
       }
       var nodeTodel =temp;
        next =temp.next;
        console.log('previous',previous);
        console.log('nodeTodel',nodeTodel);
        console.log('next',next);
        previous.next=next;

        console.log('final lis',list);
        

   }
}
LinkedList.prototype.reverse2= function(){
    var temp=this.head;
    var current=this.head;
    var next;
    var pre=null;
   while(current.next !== null){ 
    next =current.next;
    current.next=pre;
    pre=current;
    current=next;
   }
   temp=pre;
   console.log('list reverse2',temp,next,pre);
}
var list = new LinkedList();
list.add('vivek');
list.add('kapil');
list.add('kapil1');
list.add('kapil2');
list.add('kapil3');

//list.remove('kapil1');
//list.reverse();
//list.reverse2();
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


// function merge sort
var array6=[7,1,6,3,4];
function mergeSort(arr){
    var arrLen=arr.length;
    var mid=Math.floor(arrLen/2);
    var left=arr.slice(0,mid)
    var right=arr.slice(mid);
    if(arrLen === 1){
        console.log('return',arr);
        return arr;
    }else{
        left= mergeSort(left);
        right =mergeSort(right);
        console.log('left',left);
        console.log('right',right);
        return merge(left,right);
    }
}

function merge(left, right){
    console.log('merge Left',left,"merge right",right);
    var result=[];
    var leftIndex=0;
    var rightIndex=0;
  
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]>right[rightIndex])
        {
  
            result.push(right[rightIndex]);
            rightIndex++;
        }
        else
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex<left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    console.log('result',result);
    return result;
}

//console.log(mergeSort(array6));


// get the sum of data from array
var array7=[99,4,97,6,4,3];
function findSumInArray(arr,sum){
    var arrLen=arr.length;
    var tempArr=[];
    for(var i=0;i<arrLen;i++){
            tempArr[i]=sum-arr[i];
            if(tempArr.indexOf(arr[i]) > -1){
                console.log('got it at posiotn');
            }

            for(var j=0;j<arrLen;j++){

            }
    }
    console.log('array7',tempArr);
}
//findSumInArray(array7,100);




function Trie(parent, prev, key, value) {
    if (key !== void 0)
        this.key = key;      // single-character key
    if (value !== void 0)
        this.value = value;  // user-defined value
    if (prev)
        prev.next = this;    // next sibling node
    else if (parent)
        parent.child = this; // first child node
}

// put a key/value pair in the trie
Trie.prototype.put = function(name, value) {
    var i = 0, t = this, len = name.length, prev, parent;
    down: while (t.child) {
        parent = t;
        t = t.child;
        // if first child didn't match, get next sibling
        while (t.key != name[i]) {
            if (!t.next) {
                prev = t;
                t = parent;
                break down;
            }
            t = t.next;
        }
        // key already exists, update the value
        if (++i > len) {
            t.value = value;
            return;
        }
    }
    // found any existing parts of the key, add the rest
    t = new this.constructor(t, prev, name[i]);
    while (++i <= len)
        t = new this.constructor(t, null, name[i]);
    t.name = name;
    t.value = value;
};

// get a value from the trie at the given key
Trie.prototype.get = function(name) {
    var i = 0, t = this.child, len = name.length;
    while (t) {
        if (t.key == name[i]) {
            if (i == len)
                return t.value;
            t = t.child;
            ++i;
        } else {
            t = t.next;
        }
    }
};

// --------

var dict = new Trie();
dict.put("abob", "Bob");
dict.put("true", "yes");
dict.put("bob", "Bob");


console.log("true:", dict.get("true"));

console.log(dict);



// rotate the matrix by 90 degree clockwise
var array10=[[1,2,3,25],[4,5,6,26],[7,8,9,27],[10,11,12,28]];
function rotateMatrix(arr){
    var arrLen= arr.length;
    var N=4;
  /*for(var x=0;x<N/2;x++){
       for(var y=x;y<N-x-1;y++){
            var temp = arr[x][y];
 
            // move values from right to top
            arr[x][y] = arr[y][N-1-x];
 
            // move values from bottom to right
            arr[y][N-1-x] = arr[N-1-x][N-1-y];
 
            // move values from left to bottom
            arr[N-1-x][N-1-y] = arr[N-1-y][x];
 
            // assign temp to left
            arr[N-1-y][x] = temp;
       }
  }*/

  for(let i=0;i<N;i++){
       for(let j=i;j<N;j++){
                var temp=arr[i][j];
                arr[i][j]=arr[j][i];
                arr[j][i]=temp;
       }
  }
 
  
  console.table(arr);
  for(let k=0;k<N;k++){
       for(let l=0;l<N/2;l++){
            var temp=arr[k][l];
            arr[k][l]=arr[k][N-1-l];
            arr[k][N-1-l]=temp;
       }
  }
 
  console.table(arr);
}
//console.table(array10);
//rotateMatrix(array10);



// traverse a dom in depth first manner
var domNode= document.getElementById('traverse');
function domDFS(node){
   var data=node;
   console.log(data);

preOder(data);

}

function preOder(node){
  if(node && node.childElementCount === null){
        return;
  }
  console.log(node);
  if(node){
   preOder(node.firstElementChild);
   preOder(node.lastElementChild);
  }
 
}
preOder(domNode);