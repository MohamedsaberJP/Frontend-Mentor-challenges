let text = document.querySelector(".p4 input");
let btn = document.querySelector(".p4 button");
let err = document.querySelector(".p4 > svg");
let err_msg = document.querySelector(".err_message");
let pattern = /^[a-z0-9]+@\w+\.\w+$/i;

btn.addEventListener("click" , function(e){
    // err.style.display = "none";
    // text.style.border = "1px solid #ddd";
    // err_msg.style.display = "none";

    let input_val = text.value;
    if(!input_val.test(pattern) || input_val == ""){
        err.style.display = "block";
        text.style.border = "1px solid red";
        err_msg.style.display = "block";
        e.preventDefault();
    }
});