import { speed } from "./takeDelayTime.js";


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

const delay = ms => new Promise(res => setTimeout(res, ms));



async function insertionSort(n)  
{   
    let hole, i;
    for (i = 1; i < n; i++) 
    {   
        var el1 = document.getElementsByClassName("barStyle")[i]; 
        let value = parseInt(el1.style.height);  
        hole = i;
        
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        document.getElementsByClassName("barStyle")[i-1].style.background="green";
        document.getElementsByClassName("barStyle")[hole].style.background="red";
        while (hole > 0 && (parseInt(document.getElementsByClassName("barStyle")[hole-1].style.height)>value)) 
        {   
            await delay(speed);
            
            document.getElementsByClassName("barStyle")[hole-1].style.background="red";
              document.getElementsByClassName("barStyle")[hole].style.background="green"; 
            var ell1 = document.getElementsByClassName("barStyle")[hole];
            var ell2 = document.getElementsByClassName("barStyle")[hole-1];
            swap(ell1,ell2); 
            hole = hole - 1;  
        } 
        await delay(sleep);
            
        document.getElementsByClassName("barStyle")[hole].style.background="green"; 
    }       
}  
    

export {insertionSort};