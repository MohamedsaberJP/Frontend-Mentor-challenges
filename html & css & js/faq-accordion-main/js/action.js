let status_click = document.querySelectorAll(".status");
status_click.forEach(function(el){
    el.addEventListener("click" , function(e){
        let dd = this.hasAttribute("active");

        this.nextElementSibling.style.display = dd ? "none" : "block";
        this.querySelector(".plus").style.display = dd ? "block" : "none";
        this.querySelector(".minus").style.display = dd ? "none" : "block";

        this.toggleAttribute("active");
    });
});