const input=document.querySelector("#input");
const output=document.querySelector(".output");
input.addEventListener("input",()=>{
    let val=input.value;
    let out=Math.floor(val*2.2);
    output.innerHTML=out;
})
