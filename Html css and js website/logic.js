let isDOBOpen=false;
let dateOfBirth;
const settingsCog=document.getElementById("settings-icon");
const settingsContent=document.getElementById("settingsContent");
const InitialText=document.getElementById("InitialText");
const AfterDOBButton=document.getElementById("afterDOBButton");
const Buttons=document.getElementById("AddDOB");
const DOBinput=document.getElementById("input-date");
const Time1=document.getElementById("time1");
const toggleDateOfBirth=()=>{
     if(isDOBOpen){
        settingsContent.classList.add("hide");
     }
     else
     {
        settingsContent.classList.remove("hide");
     }
     isDOBOpen=!isDOBOpen;
};
const SetDOB=()=>{
dateOfBirth=DOBinput.value;
if(dateOfBirth){
    InitialText.innerText="How Much Life Journey Covered, Till Now";
    Time1.classList.remove("hide");
}
else
{
    Time1.classList.add("hide");
    InitialText.innerText="Enter Your Date Of Birth";
}};
settingsCog.addEventListener("click",toggleDateOfBirth);
Buttons.addEventListener("click",SetDOB);