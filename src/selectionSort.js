import { speed } from "./takeDelayTime.js";


//Swap Function for Selection Sort, this would be same in all case.
function swap(el1, el2){
    //el1 is element one and el2 is element two.
    //checking the list of all styles corresponding to el1 and el2

    var style1 = window.getComputedStyle(el1);
    var style2 = window.getComputedStyle(el2);

    //hold the value of height.
    var transform1 = style1.getPropertyValue("height");
    var transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}


//code for delay time
const delay = ms => new Promise(res => setTimeout(res, ms));

//code for selectionSort

async function selectionSort(n){
    //hold i as potential sorted place.
    for(let i = 0; i<n; i++){
        //say i th place is minimum value.
        var minIndex = i;
        //compute the miniMum value from i+1 to n-1

        for(let j = i+1; j<n; j++){
            
            //give blue color to ith position
            document.getElementsByClassName("barStyle")[i].style.background="blue";

            var el1 = document.getElementsByClassName("barStyle")[minIndex];
            var el2 = document.getElementsByClassName("barStyle")[j]
            //color minimum div as red 
            if(i!=minIndex){
                el1.style.background="red";
            }
            //color red this current div, since j is never i, so this
            //color won't affect the ith div which is already colored.
            el2.style.background="red";
            //color last visited div as cyan if that is not a min or i+1
            if(j!=i+1 && ((j-1)!=minIndex)) 
                document.getElementsByClassName("barStyle")[j-1].style.background="cyan";

            await delay(speed);
            
            if(parseInt(el1.style.height) > parseInt(el2.style.height)){
                // color last minIndex as cyan
                el1.style.background="cyan";
                minIndex = j;
            } 
        }
    swap(document.getElementsByClassName("barStyle")[i] , document.getElementsByClassName("barStyle")[minIndex])

        
        document.getElementsByClassName("barStyle")[minIndex].style.background = "cyan";
        document.getElementsByClassName("barStyle")[n-1].style.background = "cyan";
    //After swapping done make the div as green
document.getElementsByClassName("barStyle")[i].style.background = "green";
}

}

export {selectionSort};
