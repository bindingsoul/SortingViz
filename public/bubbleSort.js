import { speed } from "../src/takeDelayTime.js";
//Function to swap two divs.
function swap(el1,el2)
{
 
    //getComputedStyle returns the all the CSS corresponding
    //to the element which is passed. 
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
 
 
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");   
    el1.style.height = transform2;
    el2.style.height = transform1;


}

//code for delay time
const delay = ms => new Promise(res => setTimeout(res, ms));


//code for bubble sort.

async function bubbleSort(n){
    console.log("bubble-Sort Started");

    for(let i = 0; i<n-1; i++){
        for(let j = 0; j<n-1-i; j++){
            var el1 = document.getElementsByClassName("barStyle")[j]; 
            var el2 = document.getElementsByClassName("barStyle")[j+1];
            document.getElementsByClassName("barStyle")[j].style.background="red";
            document.getElementsByClassName("barStyle")[j+1].style.background="red";
            if(parseInt(el1.style.height) > parseInt(el2.style.height))
            {
                await delay(speed);
                swap(el1,el2);      

            }    

            document.getElementsByClassName("barStyle")[j].style.background="cyan";
            document.getElementsByClassName("barStyle")[j+1].style.background="cyan";
            //console.log("colore changed");
            
        }
    document.getElementsByClassName("barStyle")[n-i-1].style.background="green";
    }
    document.getElementsByClassName("barStyle")[0].style.background="green";

}

export {bubbleSort};
