const result=document.querySelector("#input");
const Buttons=document.querySelectorAll("button");
let str="";
Buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target.textContent);
        if(e.target.textContent==="AC")
        {
           str="";
           result.value=str;
        }
        else if(e.target.textContent==="=")
        {
           str=eval(str);
           result.value=str;
        }
        else if(e.target.textContent==="DEL")
        {
            str=str.substring(0,str.length-1);
            result.value=str;
     }
     else{
        str+=e.target.textContent;
        result.value=str;
     }
    })
})