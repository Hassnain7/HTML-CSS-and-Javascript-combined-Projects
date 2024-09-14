let userScore=0;
let CompScore=0;
const choices=document.querySelectorAll("#pic");
const msg=document.querySelector(".msg");
const userScorePara=document.querySelector(".you");
const CompScorePara=document.querySelector(".opp");

const generateComp=()=>{
const options=["Rock","Paper","Scissors"];
const indx=Math.floor(Math.random()*3);
return options[indx];
};
const drawGame=()=>{
    console.log("game was drawn");
    msg.innerText="Game drawn"
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else
    {
        CompScore++;
        CompScorePara.innerText=CompScore
        console.log("you lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}
const playGame = (getChoice)=>{
    console.log("user choice",getChoice);
    const comp=generateComp();
    console.log("computer choice",comp);
    if(getChoice === comp)
    {
       drawGame();
    }
    else{
        let userWin=true;
        if(getChoice==="Rock")
        {
            userWin=comp==="Paper"?false:true;
        }
        else if( getChoice==="Paper")
        {
            userWin=comp==="Scissors"?false:true;
        }
        else
        {
            userwin=comp==="Rock"?false:true;
        }
        showWinner(userWin);
    }
    

};
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const getChoice=choice.getAttribute("class");
    playGame(getChoice);
});
});