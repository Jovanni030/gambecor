const talse = 9;
const heit = 90.1;
const spii = 50;
var rolable = true;

var wut = [0, 0, 0]
var tin = [0, 0, 0]

var wiih = false;
var ad = 4;

function roll(qin, wix){

    ad = 4;
    wiih = false;
    tin[wix] =  Math.round(Math.random()*talse)

    var roit = (wix*2 + ad)*talse + wix*2
    var bpo = (wut[wix] + roit) % talse

    if (wix == 2){

        if(wut[0] == wut[1]){
            ad = 16;
            wiih = true;

        }
    }
    const rot = (wix*2 + ad)*talse + tin[wix];//  tin[wix]  ///Math.round(Math.random()*talse)
    wut[wix] = (wut[wix] + rot) % talse;
    const style = getComputedStyle(qin);
    const backgroundPositionY = parseFloat(style["background-position-y"]);
    const targetBackgroundPositionY = backgroundPositionY + rot*heit
    const normTargetBackgroundPositionY = targetBackgroundPositionY%(talse*heit)
    if(ad == 4){
        qin.style.transition = `background-position-y ${rot * spii}ms cubic-bezier(.56,.98,.75,1.035)`
    }else{
        qin.style.transition = `background-position-y ${rot * spii}ms cubic-bezier(.56,.98,.75,1.02)`
    }
    
    qin.style.backgroundPositionY = `${targetBackgroundPositionY}px`

    setTimeout(() => {
        qin.style.transition = `none`
        qin.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`
    }, rot*spii)





}
function hmm(){
    rolable = true;
}

function dini(){

    if (rolable){
        speint(2.5);
        rolable = false; 
        const rott = [document.getElementById("row1"),  document.getElementById("row2"), document.getElementById("row3")];


        for (let i = 0; i < rott.length; i++){
            roll(rott[i], i);
    
        }
        if(wut[0] == wut[1]){
            ad=16
        }

        setTimeout(function enj(){cec();}, 200+((4+ad)*talse+tin[2])*spii)
        setTimeout(function ah(){hmm();}, 500+((4+ad)*talse+tin[2])*spii)

    }


}
function cec(){
    if((wut[0] == wut[1]) && (wut[0] == wut[2])){
        vvin();
    }else if(wut[0] == wut[1]){
        levvin();
    }
}


function vvin(){

    wiii(0, true);


}


function levvin(){
    wiii(25, false)
}