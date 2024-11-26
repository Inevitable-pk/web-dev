const sweety = document.querySelector("#sweety")
const menu = document.querySelector("#menu")

sweety.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    sweety.classList.toggle("bg-white")
})