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
    // console.log("array",arr,countZero);
}

//pushToRight(array);

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
    //console.log('partionArray',arr);
}
//partionArray(array2);

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
  // console.log("arr",arr);
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
  // console.log(allText.join(''));
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
//console.log(attrib);
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


// insertion sort
function swap(first,second){
  var temp =second;
  second=first;
  first=temp;
}
var array12=[10,0,23,12,2,9];
function insertionSort(arr){
   for(var i=0;i<arr.length;i++){
        var temp=arr[i+1];
      for(var j=0;j<=i;j++){
            if(temp<arr[j] ){
                   var ds=arr[i+1];
                   arr[i+1]=arr[j];
                   arr[j]=ds; 
            }
      }
   }
   console.log('insertionSort',arr);
}
//insertionSort(array12);




// selection sort

function selectionSort(arr){
     for(var i=0;i<arr.length;i++){
         var first=i;
         var minm =i+1;
      for(var j=i+1;j<arr.length;j++){
         if(arr[minm] > arr[j+1]){
                 minm=j+1;
         }
        
      }
       if(arr[first] >arr[minm] ){
                   var ds=arr[minm];
                   arr[minm]=arr[first];
                   arr[first]=ds; 
            }
       
   }
    console.log('selectionSort',arr,minm);

}
//selectionSort(array12);



// quick sort 

var array13=[10,2,9,5,44,3,6,7];
function quickSort(arr,left,right){
  
    var i= left;
    var j=right;
    var pivot= Math.floor((left+right)/2);
    console.log("pivot",arr[pivot],pivot);
    while(i <=j){
          while(arr[i] < arr[pivot]){
                   i++;
          }
        while(arr[j] > arr[pivot]){
                  j--;
          }
          if(i <=j){
              var temp=arr[i];
              arr[i]=arr[j];
              arr[j]=temp;
              i++;
              j--;
          }
    }
    if(j>left){
        quickSort(arr,left,j)
    }
    if(i<right){
       quickSort(arr,i,right)
    }
console.log("quicksort",arr);
}
var quicklength =array13.length-1;
quickSort(array13,0,quicklength);





// linkedlist implementation in javascript
function Linkedlist(){
   this.root =null;
   this.length=0;
}
function Node(value){
    this.value= value;
    this.next = null;
}

Linkedlist.prototype = {
    constructor : Linkedlist,
    add : function (n){
        var node = new Node(n); 
        if(this.root == null){
            this.root =node;
        }else {
            var temp = this.root;
            while(temp.next){
                     temp = temp.next;
            }
            temp.next = node;     
        }
         this.length++;
    },

    remove : function(value){
             if(this.root.value == value){
                    this.root= this.root.next;
                    this.length--;
             }else{
                 var current=this.root;
                 var previous;
                 while(current.value != value){
                        previous=current;
                        current = current.next;
                        var temp=current;
                        console.log(current);
                        count++;
                 }
                 previous.next=current.next
                // current = current.next;
                
                // delete node.value;
                 this.length--;
             }
    },

    find : function (value){
        if(this.root == value){
                return true;
        }else {
            var node = this.root;
            var count=0;
           
            while(node && node.value !== value){
                    node = node.next;
                    console.log('node',node);
                    console.log(++count,node);
                   if(this.length === count){
                        console.log("not found");
                        break;
                    }
            }
            
            return node;
            
        }
    },
    reverse : function(){
        var root =this.root,
            current,prev,next;
                current=this.root;
                while(current !== null){
                    next = current.next;
                    current.next = prev;
                    prev = current;
                    current = next;
                }
                root=prev;
                console.log("prev prev : ",root);

    }
}

var ls= new Linkedlist();
ls.add(8);
ls.add(9);
ls.add(91);
ls.add(41);


ls.reverse();

console.log(ls);





// callback functions in javascripts

function makeIt(name,last,callback){
   console.log("name",name);
   var fnname="nameit"
   callback(name,last,fnname);
}

function callbackFn(last,namec,fnname){
  console.log("fgffhgfhfh fnname",last,namec,fnname);
}


function parents(){

    var namec="vivek342";
    var tt = function (){
        console.log('namec',namec);
        makeIt("viv",namec,callbackFn);
   }
   return tt;
}

var ff= parents();
console.log(ff());




// 
var calObj={a:4,b:6}
var cal ={
    text:"vivek",
    add : function (a,b){
    return this.a+this.b;
    },
    sub : function (a,b){
        return a-b;
    },
    format : function (){
            var th = this
        return function upper(){
                       // use this variable in outer function to get a refrence of this inside inner fn
                    var txt = th.text.toUpperCase();
                    return txt +"text";
        }
        //upper(th.text);
    }
}
console.log(cal.format("ram")());
console.log(cal.add.call(calObj,4,8));







// implement a 


var ls2= new Linkedlist();
ls2.add(25);
ls2.add(26);
ls2.add(27);
ls2.add(28);
ls2.add(29);
ls2.add(30);

//ls2.root.next.next.next.next.next.next = ls2.root;

console.log("dfd : ",ls2);

// function to detect a loop in side linked list

function detectLoop(ls2){
   var point1=ls2.root,point2=ls2.root;

   while(point1 && point2 && point2.next){
            point1 = point1.next;
            point2 =point2.next.next;
           if(point1 == point2){
                  return true;
           }
   }
   return false;
}


console.log(detectLoop(ls2));



// implement merge sort for arrays
var mergeArr=[4,5,7,8,9,6,5,8];
function divide(arr){
   for(var i=0;i<arr.length;i++){
        merge(arr[i],arr[i+1]);
   }
}

function merge(ar1,ar2){
   // console.log(arr1,ar2);
   
                
}
divide(mergeArr);













var Mergesort = (function() {

  /**
   * Sorts the array by breaking it down
   * into smaller chunks.
   *
   * @param {Array} array The array to sort
   */
  function sort(array) {

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    if(length === 1) {
      return array;
    }

    return merge(sort(left), sort(right));

  }

  /**
   * Merges two sublists back together.
   * Shift either left or right onto
   * the result depending on which is
   * lower (assuming both exist), and simply
   * pushes on a list if the other doesn't
   * exist.
   *
   * @param {Array} left The left hand sublist
   * @param {Array} right The right hand sublist
   */
  function merge(left, right) {

    var result = [];

    while(left.length || right.length) {

      if(left.length && right.length) {

        if(left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }

      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }

    }

    return result;

  }

  return {
    sort: sort
  };

})();

console.log(Mergesort.sort(mergeArr))


// make a binary search tree from an sorted array

var binaryArr=[1,4,5,6,7,8,9];

var binaryTree=function(){
             function Node(data){
                    this.data=data;
                    this.left=null;
                    this.right=null;
             }
             function arrayTobst(arr,start,end){
                 if(start > end ){
                     return null;
                 }
                 var mid =Math.floor((start + end)/2);
                 var node = new Node(arr[mid]);

                 node.left = arrayTobst(arr,start,mid-1);
                 node.right =arrayTobst(arr,mid+1,end);

                 return node;
             }   
             function findNode(node,key){
                 if(node === null){
                        return false;
                 }
                 if(node.data === key){
                        return true;
                 }
                 if(node.data > key){
                     var node= node.left
                     findNode(node,key);
                 }
                 if(node.data < key){
                     var node= node.right
                     findNode(node,key);
                 }
             }
             function inorder(node){
                 
                   if(node === null){
                       return;
                   }
                   inorder(node.left);
                   console.log(node.data);
                   inorder(node.right);
             }
             function preorder(node){
                 if(node === null){
                       return;
                   }
                   console.log(node.data);
                   inorder(node.left);
                   inorder(node.right);
             }
             function postorder(node){
                 if(node === null){
                       return;
                   }
                   postorder(node.left);
                   postorder(node.right);
                   console.log(node.data);
             }
             function mirror(node){
                 if(node === null){
                     return false;
                 }else{
                     var root =node;
                     var nodeleft = node.left;
                     var noderight =node.right;

                     root.left=noderight;
                     root.right=nodeleft;
                        mirror(root.left);
                        mirror(root.right);
                            console.log(root);
                 }
             }
             return{
                 Node:Node,
                 arrayTobst:arrayTobst,
                 findNode:findNode,
                 inorder:inorder,
                 preorder:preorder,
                 postorder:postorder,
                 mirror:mirror
             }
};
var btTree =new binaryTree();
var root = btTree.arrayTobst(binaryArr,0,binaryArr.length);
 console.log('binaryTree',btTree,root);
console.log("getHeight",getHeight(root));
//console.log('binaryTree inorder',btTree.inorder(root));


//console.log('binaryTree findNode',btTree.findNode(root,7));

//btTree.mirror(root);

//var heightl=0,heightr=0;
function getHeight(node){
    if(node==null){
            return -1;
    }
        return (1+ Math.max( getHeight(node.left),getHeight(node.right)));

    //or below code 
   /* var  heightl= getHeight(node.left);
    var heightr= getHeight(node.right);

    if(heightl >heightr){
            return heightl+1
    }
    else{
        return heightr+1;
    } */
}


// function to implement a queue

function Queue(){
    this.head=null;
    this.data=[];
}

Queue.prototype ={
    constructor:constructor,
    enque : function (value){
        if(value != null){
             this.data.push(value);   
        }
    },
    dequeue : function (){
            return this.data.shift();
    }
}







// implement graphs Breadth first search


var bfs = function (){
    var adjancyArray=[];

    var Graph = function (v){
            this.length=v;
            this.adjancyList =new Array(v);
            for(var i=0;i<v;i++){
                this.adjancyList[i]= new Linkedlist();     
            }

    }

    var addEdge = function(a,b){
            this.adjancyList[a].add(b);
    }

    var BFSTraverse = function (start){
            var s= start;
            var arr=[];
            var queue = new Queue();
            var adjList=this.adjancyList;
            queue.enque(s);
            arr.push(s);
            var adj =adjList[s].root
            while(queue.data.length){
                s = queue.dequeue();    
                console.log("traverse the graph :",s);
                while(adj.next !== null){
                    if(arr.indexOf(adj.value) == -1 ){
                        queue.enque(adj.value);
                        arr.push(adj.value);
                        adj =adj.next;
                    }
                }
                if(adj.next == null){
                     if(arr.indexOf(adj.value) == -1){
                        arr.push(adj.value);
                        queue.enque(adj.value);
                     }
                }

            }
            console.log("bsf push array :",arr,queue);
    }


    return{
    Graph:Graph,
    addEdge:addEdge,
    BFSTraverse:BFSTraverse
    }
}

var bfs = new bfs();
bfs.Graph(5);

bfs.addEdge(0,1);
bfs.addEdge(0,2);
bfs.addEdge(1,2);
bfs.addEdge(2,0);
bfs.addEdge(2,3);
bfs.addEdge(3,3);
bfs.addEdge(1,4);
bfs.addEdge(0,4);

bfs.BFSTraverse(0);
console.log("bfs",bfs);




// chekc for balanced paranthesis of some expressions
var exp= '((a()))';
function validateExp(exp){
        console.log('exp',exp);
        if(exp == ''){
           return true;
        }else{
            var temp=exp.split('');
            var arr=[];
            var start =['(','{','['];
            var end =[')','}',']'];
            var mapkey ={
                    "(" :")",
                    "[" : "]",
                    "{" : "}"
            };
            for(var i=0;i<temp.length;i++){
                var value=temp[i];
                    if(start.indexOf(value) >= 0){
                        arr.push(value);
                    }else if(end.indexOf(value) >=0){
                        var key =arr.pop(value)
                            if(value !== mapkey[key]){
                                return false;
                            }

                    }
            }
            if(arr.length === 0){
                return true;
            }else{
                return false
            }
            
        }
}

console.log("validateExp .. :",validateExp(exp));





// permutation of string
//recPerm("abcd", '');

function recPerm(rest, soFar) {
    var next;
    var remaining;

    if (rest == '') {
        console.log(soFar);
    } else {

        for (var i = 0; i < rest.length; i++) {
            remaining = rest.substr(0,i) + rest.substr(i+1,rest.length-1);
            next = soFar + rest[i];
            recPerm(remaining, next);
        }

    }   

}












// merge sort injavascript

function mergeSort (arr) {    
    if (arr.length < 2) return arr;
    console.log(.5)
    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0,mid));
    var subRight = mergeSort(arr.slice(mid));
    console.log(1,subLeft,subRight);
    return merge(subLeft, subRight);
}

function merge (a,b) {
  console.log(2);
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}

var test = [1,2,9,3,2,5,14,0];
//console.log(mergeSort(test)); // -> [0, 1, 2, 2, 3, 5, 9, 14]







// find max n mim diff
var arrMarkit=[50,80,10,180,45,57,70,100,200,10,300,400,30];
var arrMarkit2=[100, 180, 260, 310, 40, 535, 695];
function findMaxProfit(arr){
    var firstMinm =arr[0];
    var lstMax=0;
    for(var i=0;i<=arr.length;i++){
            
            if(arr[i] >arr[i+1]){
                firstMinm=arr[i+1];
            }

            if(arr[i] > arr[i+1]){
                lstMax=arr[i]
            }
             if(i+1 ==arr.length){
                // lstMax=arr[i+1]
            }
            console.log("firstmin",firstMinm,"lastmax",lstMax);
    }
}

//findMaxProfit(arrMarkit);
var arrMaze=[[1,1,1,0],[1,0,0,0],[1,1,1,1],[1,0,0,1]];
var sol=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var N=4;
function getPath(){
    var N=4;
    if(!solveUtil(0,0)){
        console.log('no solution');
    }
    console.table(arrMaze);
    console.table(sol);   
}
var count=0;
function solveUtil(x,y){
   // console.log("cal util",count++);
   if(x==N-1 && y==N-1){
       sol[x][y]=1;
       return true;
   }
   if(x>=0 && y>=0 && y<N && x<N && arrMaze[x][y] ===1){
       console.log("count :",count++);
             sol[x][y]=1;
            if(solveUtil(x+1,y)){
                return true;
            }
         if(solveUtil(x,y+1)){
                return true;
        }
        sol[x][y]=0;
        //return false;      
   }
   return false;
}
getPath();



var arr20=[1,2,3,0,9];
var solution =[0,0,0,0,0];
function backTrack(x){
    if(x===5){
       solution[x]=10;
       return true;
    }
    if(arr20[x] !== 0){
            solution[x]=11;

            if(backTrack(x+1)){
                return true;
            }
            solution[x]=2;
    }
    return false;
}
if(!backTrack(0)){
        console.log('no solution');
    }
console.log(arr20,solution);


// longestSubStr substring algo

var string1 ="12abcf123456f";
var string2= "2abcdf12345678";
function longestCommonSubstring(string1, string2){
	// init max value
	var longestCommonSubstring = 0;
	// init 2D array with 0
	var table = [],
            len1 = string1.length,
            len2 = string2.length,
            row, col;
	for(row = 0; row <= len1; row++){
		table[row] = [];
		for(col = 0; col <= len2; col++){
			table[row][col] = 0;
		}
	}
	// fill table
        var i, j;
	for(i = 0; i < len1; i++){
		for(j = 0; j < len2; j++){
			if(string1[i] === string2[j]){
				if(table[i][j] === 0){
					table[i+1][j+1] = 1;
				} else {
					table[i+1][j+1] = table[i][j] + 1;
				}
				if(table[i+1][j+1] > longestCommonSubstring){
					longestCommonSubstring = table[i+1][j+1];
				}
			} else {
				table[i+1][j+1] = 0;
			}
		}
	}
    console.table(table);
	return longestCommonSubstring;
}
longestCommonSubstring(string1,string2);

function lonsubSequence(str1,str2){
    var l1=str1.length;
    var l2= str.length;
        if(str1.length === 0 || str2.length===0){
            return 0;
        }
        if(str1[l1-1] === str1[l2-1]){

        }
}

lonsubSequence(string1,string2);