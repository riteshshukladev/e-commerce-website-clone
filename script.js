const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector(".close");


if(bar){
    bar.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}