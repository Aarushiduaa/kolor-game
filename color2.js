//1- fade out the incorrect div when we clicked
//2 - add the try again or correct message when square clicked
//3- set all thesquares to correct color
//4- pick random color from array

//ARROW FUNCTION SHOULD BE DECLARED IN THE STARTIONG,TRADITIONAL CAN BE DECLARED IN THE LAST
//************ */
//1. generate random colors to our array
//1a- generate a randomcolor function
//1b- generatea random colors function(calls 1a)
//2 change the title bg to correct color once picked
//******************** */

// 1-set up the stripe div
//2-add eventlistener to new colors button
//3- add logic to event listener
  //3a to generate new colors
  //3b- pick a new winning color
  //3c change the color display
  //3d- chang colors of the square
  //3e update the color display to new picked color
  //3f change the title background back to back


  //1- add comments to our code
  //2-add our easy/hard buttoms
  //2a. Add a "selected" class to our css 
  //3 add quick listnere to these button
  //4 add logic to easy button and hard
  //5 add numsqaures to track state, update as needed




//HELPER FUNCTION
//=======================================================
//this will return a color, a string of that color
const pickcolor = () => {
    //get a random number btw 0 and 5 , inclusive
    const random = Math.floor(Math.random() * colors.length) //floor will round it down to integer


    //return colors of that random number
    return colors[random]

}


const generaterandomcolor = () => {  //generate one random color
    //pick r, g ,b values btw 0 and 255
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    //return string
    //templates string
   return `rgb(${r}, ${g}, ${b})`;
}

const generaterandomcolors=(num)=>{
    //make an atrray
    let output=[];
    //add num random colors to array
    for(let i=0; i<num;i++) {
        output.push(generaterandomcolor())
    }
    return output

}

const changecolors = (color) => {
    //will loop through each of the sqaure to change the bg color
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}

//=====================================================
//init variables or initialising our variables
//===================================================
//state
let numsquares=6;


//select elements
const squares = document.querySelectorAll(".square");
const colordisplay = document.getElementById("colordisplay");
const message = document.getElementById("message");
const title=document.querySelector("h1");
const resetbutton=document.getElementById("resetbutton");
const easybutton=document.getElementById("easybutton");
const hardbutton=document.getElementById("hardbutton");




let colors=generaterandomcolors(numsquares);
//choose winning color
let pickedcolor = pickcolor();



//====================================================
//MAIN FUNCTION
//==============================================
//update color display
colordisplay.textContent = pickedcolor;


//reset colors button
resetbutton.addEventListener("click",function(){
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textcontent=pickedcolor;
    title.style.backgroundColor="black";
    for(let i=0;i<colors.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    colordisplay.textContent=pickedcolor;
   

})

//easy button  //93 video ka 5.28
easybutton.addEventListener("click",function(){
    this.classList.add("selected");
    hardbutton.classList.remove("selected");
    numsquares = 3;
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }

})

//hard button
hardbutton.addEventListener("click",function(){
    this.classList.add("selected");
    easybutton.classList.remove("selected");
    numsquares=6;
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(let i=0;i<squares.length;i++)
    {
        squares[i].background=colors[i];
        squares[i].style.display="block"
    }
})


//set up squares
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //add quick listener
    squares[i].addEventListener("click", function () {
        //get the color of the clicked quare
        const clickedcolor = this.style.backgroundColor;
        console.log(clickedcolor);

        //compare that color to picked color
        if (clickedcolor === pickedcolor) {
            message.textContent = "correct";
            changecolors(pickedcolor);
            title.style.backgroundColor=pickedcolor;
        }
        else {
            this.style.backgroundColor = "black";
            message.textContent = "try again";
        }
    })
};



