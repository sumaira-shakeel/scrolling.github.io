
const navbarEl = document.querySelector(".navBar");
const bottomContainerEl = document.querySelector(".bottom_container")
console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);


console.log(navbarEl);
window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
    } else{
        navbarEl.classList.remove("active")
    }

        
    
})
