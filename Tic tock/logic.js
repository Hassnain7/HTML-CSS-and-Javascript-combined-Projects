const boxes=document.querySelectorAll("#box");
const resetButton=document.querySelector(".msg");
const result=document.querySelector(".check");
const NewButton=document.querySelector(".new");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("Box was clicked");
    if(turnO)
    {
        box.innerText="O";
        turnO=false;
    }
    else
    {
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
})
});
const checkWinner=()=>{
for(let pattern of winPatterns)
{
  //  console.log(pattern[0],pattern[1],pattern[2]);
    //console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]]);
    //console.log(box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText);//
    
 let pos1=box[pattern[0]].innerText;
 let pos2=box[pattern[1]].innerText;
 let pos3=box[pattern[2]].innerText;
 if(pos1!="" && pos2!=""&& pos3!=""){
    if(pos1===pos2 && pos2===pos3)
    {
        console.log("Winner",pos1);
        for(box of boxes)
        {
            box.disabled=true;
        }
        result.innerText=`Winner is ${pos1}`;
    }
 
}
};
}
const enable=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
resetButton.addEventListener("click",enable);
NewButton.addEventListener("click",enable);