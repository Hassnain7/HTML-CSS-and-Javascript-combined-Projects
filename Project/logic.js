const Score=document.querySelector(".score");
const num1=document.querySelector("#num1");
const num2=document.querySelector("#num2");
const Input=document.querySelector("#input");
const Button=document.querySelector("#submit");
let count=0;
Button.addEventListener("click",()=>{
    let Number1=num1.textContent;
    Number1=Number(Number1);
    console.log(Number1);
    let Number2=num2.textContent;
    Number2=Number(Number2);
    console.log(Number2);
    let InputValue=Number(Input.value);
    console.log(InputValue);
    let Mul=Number1*Number2;
    console.log(Mul);
    if(InputValue===Mul)
    {
        count++;
        Score.innerHTML=`Score: ${count}`;
        num1.textContent=Math.floor(Math.random()*10);
        num2.textContent=Math.floor(Math.random()*10);
    }
    else
    {
        if(count!=0){
        count--;
        }
        else
        {
            count=0;
        }
        Score.innerHTML=`Score: ${count}`;
        num1.textContent=Math.floor(Math.random()*10);
        num2.textContent=Math.floor(Math.random()*10);
    }
})