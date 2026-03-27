let text = document.querySelector(".content form input:nth-of-type(1)");
let btn = document.querySelector(".content form input:nth-of-type(2)");
let pp = document.querySelector("form label");
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

btn.addEventListener("click" , function(e){
    let input_val = text.value;

    if(!pattern.test(input_val) || input_val == ""){
        pp.style.display = "block";
        text.style.border = "1px solid red";
        e.preventDefault();
    }
});