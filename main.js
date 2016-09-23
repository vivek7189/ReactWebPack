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

// longest common substring

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
   for(var i = 3; i <= squareRoot; i ++) {
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
dict.put("abobe", "Bobt");
dict.put("true", "yes");
dict.put("crue", "tyes");
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




var obj={
    name:'vive',
    print: function (){
        console.log('get it',this.name);
    }
}
var obj2={
    name:"test"
}
obj.print.call(obj2);

Object.prototype.callIt = function (obj){
    console.log('comot',this,obj);
    //this.name=obj.name;
   // obj.name="test1";
       return this['[[Call]]'](func, obj);
}
//obj.print.callIt(obj2);


Function.prototype.apply1 = function apply (thisArg, argArray) {
    var len = argArray.length;
    //var n =  ToUint32(len);
    var argList = []; // where this is a List not an array.
    var index = 0;
    var indexName;
    var nextArg;

    return this['[[Call]]'](thisArg, argList); // ignore the syntax however
                                                     // This is the line where the function
                                                     // will be called and provide 
                                                     // the thisArg and thisArray
}

//obj.print.apply1(obj2,[1,2]);



function main2(){
     var arr90=[1,5,8,9];
   this.fe =function fe(){
      
        setTimeout(function(arr) {
            
            console.log("tyyyy",this);
            for(var i=0;i<arr90.length;i++){
                console.log("gy",arr[i]);
            }
        }.bind(this,arr90), 1000)
   }
   ;
}
//new main2().fe();


// maxmum possible values
function reverse(arr,left ,right,){
    var lndx=left-1;
    var rndx=right-1;
    for(var i=lndx;i<rndx;i++){
            var temp=arr[lndx];
            arr[lndx]=arr[rndx];
            arr[rndx]=temp;
            rndx--;
            lndx++;
    }
    //console.log("reve",arr);
   // return arr;
}
var array60=[1,2,3,4,5,6,7,8,9,10,11,12];
//reverse([1,2,3,4,5,6],2,5);
function arrReverse(n){
    var left=1;
    var right=n;
    reverse(array60,left,right)
        for(var i=0;i<array60.length;i++){
            if(i%n === 0 && i>n){
                left=i+1;
                right=i+n;
              reverse(array60,left,right)   
           }
        } 
        console.log("reve1",array60);      
}
arrReverse(4);
// check prime number

function checkPrime(n){
   if(n<2) return false;
    var str=Math.sqrt(n);
    for(var i=2;i<n;i++){
        if(n%i === 0){
            return false;
        }
    }
    return true
}
console.log("prime number is : ",checkPrime(19));






// make a binary saerch tree from an sorted array

var binaryArr=[1,4,5,6,7,8,9,10,11,12,13,14];
//var binaryArr=[1,2,3,4,5];

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

 function finLCAbinary(node,n1,n2){
    if(node === null){
        return null;
    }
    if(node.data >n1 && node.data > n2){
        finLCAbinary(node.left,n1,n2);
    }
    if(node.data < n1 && node.data < n2){
        finLCAbinary(node.right,n1,n2);
    }
    return node.data;
 }
 console.log("finLCAbinary : ",finLCAbinary(root,6,12));



 function finLCAbinaryTree(node,n1,n2){
    if(node === null){
        return null;
    }
    if(node.data === n1 || node.data === n2){
        return node;
    }
    var nodeLeft= finLCAbinaryTree(node.left,n1,n2);
    var nodeRight= finLCAbinaryTree(node.right,n1,n2);
    if(nodeLeft !== null && nodeRight !== null){
            return node;
    }
    //console.log('nodeLeft',nodeLeft,"nodeRight",nodeRight);
    return (nodeLeft !== null) ? nodeLeft: nodeRight;
   
} 
console.log('finLCAbinaryTree',finLCAbinaryTree(root,6,4));
// find a node path in binary tree not BST
var BSTPathArray=[];
function findPathBST(node,n){
    if(node === null){
        return false;
    }
    if(node.data === n || findPathBST(node.left,n) || findPathBST(node.right,n)){
        BSTPathArray.push(node.data);
        return true;
    }

 return false;
}
console.log(findPathBST(root,11));
console.log("BSTPathArray",BSTPathArray);

//inorder traversal of BST without recursion and stack (morris traversal)

function morrisTravesal(node){
        if(node == null){
            return false;
        }
        var current =node;
        var pre;
        while(current !== null){
             if(current.left === null){
                 console.log('morrise data',current.data);
                 current =current.right;
             }else{
                 pre = current.left;
                while (pre.right !== null && pre.right !== current) 
                    pre = pre.right;
                if (pre.right == null) {
                    pre.right = current;
                    current = current.left;
                } 
                 else {
                    pre.right = null;
                    console.log("morris data",current.data + " ");
                    current = current.right;
                }   /* End of if condition pre->right == NULL */
                
             }
        }
       }
morrisTravesal(root);
// find a pattern in string

function stringPattern(str,pattern){
    var i=0;
    var a=str;
    for(var i=0;i<arr.length;i++){
        if(a[i] === 'a'){
            if(a[++i] === 'b'){
                while(a[++i] === "c"){
                    i++
                }
                while(a[++i] === "d"){
                    i++
                }
                if(a[--i] === "e"){
                     console.log('found');
                return true;
                }else{
                    console.log('not found');
                }              
            }
            else{
                console.log("no found");
                return false
            }
        }
    }
}
stringPattern('abccctddde',"abc*d*");


// find all pair where sum is some given number

function findPair(a,n){
    var obj={};
    var i=0;
    var j=arr.length;
  while(i<j){
            if(a[i]+a[j] ===n){
                console.log("sum find at",a[i],"+",a[j],"gh",n);
                i++;
                j--;
            }
           else if(a[i]+a[j] <n){
                i++;
            }else if(a[i]+a[j]>n){
                    j--;
            }
  } 
}
console.log(findPair([1,2,3,4,5,6,7,8],9));



// find next largest number from given digits

function nextNumber(num){
  var arr =num.toString().split('');
   var arrlen=arr.length;
   for(var i=arrlen;i>0;i--){
        if(arr[i] > arr[i-1]){
               var temp=arr[i];
               arr[i]=arr[i-1];
               arr[i-1]=temp; 
               break;
        }
   }
   console.log('next number',arr.toString());
}
nextNumber(12345321);



function getIt(e){
     var currentheight=e.currentTarget.scrollTop;
     console.log(currentheight);
 
   
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
 console.log('delta point',delta);
 e.currentTarget.scrollTop = 30 +currentheight;
   if(scrollHeight <= offHeigtht+currentheight){
      console.log('bottom');
   }
   
}
var topid= document.getElementById('top');
var innerTop= document.getElementById('innerTop');
var scrollHeight=topid.scrollHeight;
var offHeigtht =topid.offsetHeight;
topid.addEventListener('mousewheel',getIt,true);






// custome scroll in javscript

var all = document.getElementById('everything');
var elem = document.getElementById('scroll-area');
var    track = all.children[1];
var    thumb = track.children[0];
var    height = parseInt(elem.offsetHeight, 10);
var    cntHeight = parseInt(elem.children[0].clientHeight, 10);
var    trcHeight = parseInt(track.offsetHeight, 10);
var    mean = 80; // For multiplier (go faster or slower);
var    current = 0;

console.log(all,elem,track,thumb,height,cntHeight,trcHeight);
thumb.style.height = Math.round(height / cntHeight * trcHeight) + 'px'; // Set the scrollbar thumb height

var doScroll = function (e) {

    // cross-browser wheel delta
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    
    var scrolltop = elem.scrollTop;
    
    // scrollTop property takes positive values when you scroll down and our delta variable behaves otherwise, so the equation will be:
    elem.scrollTop = scrolltop - delta * mean;
    
    // set top position for the scrollbar thumb
    //thumb.style.top = (elem.scrollTop / cntHeight * trcHeight) + 'px';

    //e.preventDefault();
};

if (elem.addEventListener) {
    elem.addEventListener("mousewheel", doScroll, false);
    elem.addEventListener("DOMMouseScroll", doScroll, false);
} else {
    elem.attachEvent("onmousewheel", doScroll);
}




function User(login){
  this.login =login;
  this.sayHi = function (){
      console.log(this.login);
  }
}

var user = new User('Vivek');
//setTimeout(user.sayHi.bind(user),3000);
setTimeout(function (){
    console.log(this);
user.sayHi();
},3000);



function animation (options){
  var start= new Date();
 var id = setInterval(function (){
      var timePassed = new Date()-start;
  var progress = timePassed/options.duration;
  if(progress >1){
        progress=1;
  }
  var delta = options.delta(progress);
  options.step(delta);

  if(progress === 1){
        clearInterval(id);
  }
 },options.delay || 10);
}


/*

  function content(){
    var http = new XMLHttpRequest();
    http.open('GET','http://localhost:3000/getFile',true);
    http.onreadystatechange = function (){
        if(http.readyState ===4 && http.status === 200){
            console.log("res is",http.responseText);
            processData(http.responseText);
        }
    }
    http.send();
}

var idButton = document.getElementById('getIt');
idButton.addEventListener('click',content,true);
var dataObj={};
function processData(data){
        var file= data;
        var selectorName = '(-?[_a-z]+[_\\w-]*)';
          var selectorSuffix = '((?=[\\s:#\\.\\{,\\>\\~+\\[\\]]))(?=(?:.|\n|\r)*{)';

        //var selectorName = '(-?[_a-z]+[_\\w-]*)';
        //selectorName: new RegExp(selectorName, 'g'),
        var classSelector =new RegExp('(\\.|\\[class[\\^\\$\\|\\*]?=)' + selectorName + selectorSuffix, 'gi');
        var matches=  file.replace(/class="(.*?)"/gi , replacer);
        console.log("matches",matches);
}
 var selectorName1 = '(-?[_a-z]+[_\\w-]*)';
  var selectorName =new RegExp(selectorName1, 'g');
  function replacer(attributes){
    	var attribute = attributes.split('=');
		return attribute[0] + '=' + attribute[1]
			.replace(selectorName, function(match,selectorName) {
        console.log('match',match);
				switch (attribute[0]) {
					case 'id':
					case 'for':
						return 'ghj'//idLibrary.get(selectorName);
					default: //class
						return 'komal ghghg'//classLibrary.get(selectorName);
				}
			});
  }

*/