let inputs = document.querySelectorAll("form input");
let btn = document.querySelector("form button");

btn.addEventListener("click", function(e){
    inputs.forEach(el => {
        if(el.value == ""){
            el.style.borderColor = "hsl(0, 100%, 74%)";
            el.previousElementSibling.style.display = "block";
            el.setAttribute("placeholder" , "")
            e.preventDefault();
        }
        if(el.id == "mail" && el.value == ""){
            el.setAttribute("placeholder" , "email@example/com")
        }
    });
});
