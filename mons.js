var moony;

var dd;

const japot = new Audio("audi.mp3")

function ent(){
    dd = document.getElementById("mm");
    if(localStorage.getItem("inero") != null){
        moony = parseFloat(localStorage.getItem("inero"));
    }else{
        localStorage.setItem("inero", "100");
        moony = parseFloat(localStorage.getItem("inero"));
    }
    dys();
}


function speint(hu){

    moony -= hu;
    localStorage.setItem("inero", moony);
    dys()
    dd.classList.add("mob")
    setTimeout(() => {dd.classList.remove("mob");}, 200)
}

function wiii(hb, jakp){
    moony += hb;
    localStorage.setItem("inero", moony);
    dys()
    dd.classList.add("vi")
    setTimeout(() => {dd.classList.remove("vi");}, 500)

    if (jakp){
        let win = document.createElement('img');
        win.id = "widiwi"
        win.src = "fi.gif";
        document.getElementById("wi").appendChild(win);

        japot.play()

        setTimeout(function wer(){axd();}, 10000)
    }
}

function axd(){
    let wim = document.getElementById("widiwi");
    wim.remove();
}

function dys(){

    dd.innerHTML = moony + " $";
}