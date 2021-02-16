const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var interval ;
var timerRunning=false;
var timer =[0,0,0,0];
function leadingZero(time){
    if(time <= 9){
        time = "0" + time ;
      
    }
    return time;
}

function runTimer(){
    let currentTime=leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100)-(timer[0]*60));
    timer[2] = Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
}

function spellCheck(){
   let textEntered = testArea.value;
   let originTextMatch = originText.substring(0,textEntered.length);
   if(textEntered == originText)
   {    
       clearInterval(interval);
       testArea.style.borderColor = "#429890";
    //    clearInterval(interval);

   }
   else {
        if(textEntered ==  originTextMatch)
        {
       testArea.style.borderColor= "#65ccf3";
   
   }
       else {
       testArea.style.borderColor = "#e95d0f";
   }
}
console.log(textEntered);

}
function start(){

    let textEnteredLength = testArea.value.length;
    
    if(textEnteredLength === 0 && !timerRunning){
        timerRunning = true;
       interval = setInterval(runTimer,10);
    }

    console.log(textEnteredLength);
}

function reset(){
    clearInterval(interval);
    interval = null ;
    timer = [0,0,0,0];
    timerRunning = false;
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";

    testArea.style.borderColor = "gray";




    // console.log("The reset Button Has Been Clicked");
}
testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);