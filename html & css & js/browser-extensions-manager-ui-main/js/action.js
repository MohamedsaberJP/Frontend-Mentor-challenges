let alldata ;
let  loaddata = async()=>{
    let data = await fetch("data.json")
    .then(req => req.json())
    .then(req => alldata=req)
}

let root = document.querySelector(".root");
let adding = async()=>{
    await loaddata();

    alldata.map(e=>{
        let box = `
        <div class="box ${e.isActive ? "active" : ""}">
            <div class="part1">
                <img src=${e.logo}>
                <div class="info">
                    <h3>${e.name}</h3>
                    <p>${e.description}</p>
                </div>
            </div>
            <div class="part2">
                <button>remove</button>
                <span class = "${e.isActive ? "active" : ""}">
                    <span style = "left : ${e.isActive ? "calc(60% - 3px)" : "3px"}"></span>
                </span>
            </div>
        </div>
        `
        root.innerHTML += box ;
})

// change button active 
let box = document.querySelectorAll(".box");
box.forEach(e => {
    let btn1 = e.querySelector(".part2 > span");
        let btn2 = e.querySelector(".part2 span span");
    btn1.addEventListener("click",()=>{
        btn2.style.left = (e.classList.contains("active")) ? "3px" : "calc(60% - 3px)"
        btn1.classList.toggle("active");
        e.classList.toggle("active");

        // to remove the box rigth now 
        // let value = document.querySelector(".links button.active").textContent;
        // if(value == "Active"){
        //     e.style.display = e.classList.contains("active") ? "flex" : "none";
        // }else if(value == "Inactive"){
        //     e.style.display = e.classList.contains("active") ? "none" : "flex";
        // }

})
});

}
adding();

// change theme icon
let sun =`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#FBFDFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>`
let moon =`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#091540" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>`

let theme = document.querySelector(".theme button");
let body = document.querySelector("body");
theme.addEventListener("click",()=>{
    theme.innerHTML = (theme.classList.contains("moon")) ? sun : moon ;
    body.classList.toggle("dark");
    theme.classList.toggle("moon");
})


let filterbtns = document.querySelectorAll("nav .links button");

filterbtns.forEach((el)=>{
    el.addEventListener("click",()=>{
        document.querySelectorAll(".root .box").forEach((box)=>{
            box.style.display = "block";
        })

        filterbtns.forEach((btn)=>{
            btn.classList.remove("active");
        })
        el.classList.add("active");

        if(el.textContent == "Active"){
            let activited = document.querySelectorAll(".root .box:not(.active)");
                activited.forEach((e)=>{
                    e.style.display = "none";
                })
        }
        else if(el.textContent == "Inactive"){
            let inactivited = document.querySelectorAll(".root .box.active");
                inactivited.forEach((e)=>{
                    e.style.display = "none";
                })
        }
    })
})