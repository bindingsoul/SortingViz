import { insertionSort } from "./insertionSort.js";
import { selectionSort } from "./selectionSort.js";
import {bubbleSort} from "./bubbleSort.js";
import {takeSpeedValue} from "./takeDelayTime.js";
// import {mergeSort} from "../src/mergeSort.js";
// import {quickSort} from "../src/quickSort.js";

console.log("started");

var array = [];


 //for pushing the random number in the array.

function CreatElement(m){
    var ranNumber = Math.floor(Math.random()*500);
    array.push(ranNumber);
    //create the div element here.
    const diver = document.createElement("div");
    diver.classList.add("barStyle");
    document.getElementById("bars").appendChild(diver);
    //change the height of the element.
    var val = array[m];
    val = val;
    let text1 = val.toString();
    let text2 = "px";
    let result = text1.concat(text2);
    document.getElementsByClassName("barStyle")[m].style.height = result;
}

function lele(){
    var audio = new Audio("Windows Ding.wav");
    function audioBajega(){
        audio.play();
    }
    audioBajega();

   console.log(array,'\n');
    var element = document.getElementsByClassName("barStyle");
    if(element.length!=0){
            document.querySelectorAll('.barStyle').forEach(e => e.remove());
            array =[];
    }
   
    
    //Hello this is the code in the new branch.
    //this is the second code here.
    for(let j = 0; j<size; j++){
        CreatElement(j);
    }
console.log(element.length,'\n');
console.log("clicked");
}




let delayElement = document.querySelector('#speed_input');
let delay = 0;

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
     var delay = 320 - parseInt(delayElement.value);
     takeSpeedValue(delay);    
     console.log("delay is"+ delay);
});

let size = document.getElementById("arr_sz").value;
let sizeElement = document.querySelector('#arr_sz');
// Event listener to update delay time 
sizeElement.addEventListener('input', async function(){
    console.log(sizeElement.value, typeof(sizeElement.value));
    size = 0 + parseInt(sizeElement.value);
    lele();    
    //  console.log("size is"+ size);
});


//Disabled Buttons and Enabled buttons.
// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it

function disableSortingBtn(){
    document.getElementById("bubble-sort").disabled = true;
    document.getElementById("insertion-sort").disabled = true;
    document.getElementById("merge-sort").disabled = true;
    document.getElementById("quick-sort").disabled = true;
    document.getElementById("selection-sort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
   document.getElementById("bubble-sort").disabled = false;
    document.getElementById("insertion-sort").disabled = false;
    document.getElementById("merge-sort").disabled = false;
    document.getElementById("quick-sort").disabled = false;
    document.getElementById("selection-sort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.getElementById("new-Array").disabled = true;
}
// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.getElementById("new-Array").disabled = false;
}
//################################
//if clicked make a new array
document.getElementById("new-Array").onclick = function() {lele()};



//if clicked bubble Sort then do the Selection Sort.
// document.addEventListener("DOMContentLoaded", function(event) {

// });

  document.getElementById("bubble-sort").onclick = async function() {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    console.log("buttons disabled");
    await bubbleSort(size);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    // console.log("buttons enabled");
};


document.getElementById("insertion-sort").onclick = async function() {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    console.log("buttons disabled");
    await insertionSort(size);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    // console.log("buttons enabled");
};

document.getElementById("selection-sort").onclick = async function() {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await selectionSort(size);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    // console.log("buttons enabled");
};

// document.getElementById("insertion-sort").onclick = function() {
//     SortingStarted();
//      insertionSort(size)
//     SortingCompleted();
// };


//if clicked Selection Sort then do the Selection Sort.
// document.getElementById("merge-sort").onclick = function() {mergeSort(100)};
// //if clicked quick Sort then do the Selection Sort.
// document.getElementById("quick-sort").onclick = function() {quickSort(100)};