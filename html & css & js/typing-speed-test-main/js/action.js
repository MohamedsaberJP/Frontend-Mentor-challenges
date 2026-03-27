



let req = new XMLHttpRequest ;
req.onload = function(){
    let aa = JSON.parse(req.responseText)
    document.writeln(aa["easy"][0]["text"]);

    let i = 0;
    document.addEventListener("keydown" , function(e){
        // console.log(e.key , i);
        if(aa["easy"][0]["text"][i] == e.key){
            console.log("yes");
        } else {
            console.log("no")
        }

        i++;
    });


}
req.open("GET", "data.json");
req.send();


