// page1
let rate = document.querySelectorAll(".rates span");
let btn = document.querySelector(".page1 button");
let choice = "";
rate.forEach(e => {
    e.addEventListener("click",function(){{
        rate.forEach(e => {e.removeAttribute("active");});
        this.setAttribute("active","");
        choice = this.textContent;
    }});
});

// page2
let pp1 = document.querySelector(".page1");
let pp2 = document.querySelector(".page2");
let chosedrate = document.querySelector(".page2 .state span");
btn.addEventListener("click", function(){
    if(choice != ""){
        chosedrate.textContent = choice;
        pp1.style.display = "none";
        pp2.style.display = "flex";
    }
});