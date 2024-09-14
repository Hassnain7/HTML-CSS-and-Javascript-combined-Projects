let score=0;
let val;
const text=document.querySelector("#input");
const Button=document.querySelector(".buttonCheck");
const Output=document.querySelector(".Output");
text.addEventListener("input",()=>{
    val=text.value;

})
Button.addEventListener("click",()=>{
   if(val===''){
    Output.innerHTML='Please Enter some text'
   }
    else if(val==="A"||val==="E"|| val==="I"||val==="O"|| val==="U"){
        score++;
       Output.innerHTML=`The Vowel count is ${score}`;
       }
       else if(val==="a"||val==="e"|| val==="i"||val==="o"|| val==="u"){
        score++;
       Output.innerHTML=`The Vowel count is ${score}`;
       }
})