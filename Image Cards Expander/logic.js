const cards=document.querySelectorAll(".imgContainer");

cards.forEach(card => {
    card.addEventListener(("click"),()=>{
        Remove();
        card.classList.add("active");
    })
});

const Remove=()=>{
    cards.forEach(card => {
        card.classList.remove("active");
    });
   
}