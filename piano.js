function changecolor(){
    // Random Colors are taken using Random() function
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    // Colors for first set of white regular keys (C3 to B3)
    var mycolor = "rgb("+r+","+g+","+b+")"; 
    var mycolor1 = "rgb("+g+","+b+","+r+")";
    var mycolor2 = "rgb("+b+","+r+","+g+")";
    var mycolor3 = "rgb("+r+","+r+","+r+")";
    var mycolor4 = "rgb("+g+","+g+","+g+")";
    var mycolor5 = "rgb("+b+","+b+","+b+")";
    var mycolor6 = "rgb("+r+","+g+","+g+")";

    // Colors for second set of White regular keys (C4 to B4)
    var mycolor7 = "rgb("+r+","+b+","+b+")";
    var mycolor8 = "rgb("+g+","+r+","+r+")";
    var mycolor9 = "rgb("+g+","+b+","+b+")";
    var mycolor10 = "rgb("+b+","+r+","+r+")";
    var mycolor11 = "rgb("+b+","+g+","+g+")";
    var mycolor12 = "rgb("+r+","+g+","+b+")";
    var mycolor13 = "rgb("+g+","+b+","+r+")";

    // Colors for third set of white regular keys (C5 to B5)
    var mycolor14 = "rgb("+b+","+r+","+g+")";
    var mycolor15 = "rgb("+r+","+r+","+r+")";
    var mycolor16 = "rgb("+g+","+g+","+g+")";
    var mycolor17 = "rgb("+b+","+b+","+b+")";
    var mycolor18 = "rgb("+r+","+g+","+g+")";
    var mycolor19 = "rgb("+r+","+b+","+b+")";
    var mycolor20 = "rgb("+g+","+r+","+r+")";

    // Color for white regular key C6
    var mycolor21 = "rgb("+g+","+b+","+b+")";

    document.getElementById("common").style.background=mycolor;
    document.getElementById("common1").style.background=mycolor1;
    document.getElementById("common2").style.background=mycolor2;
    document.getElementById("common3").style.background=mycolor3;
    document.getElementById("common4").style.background=mycolor4;
    document.getElementById("common5").style.background=mycolor5;
    document.getElementById("common6").style.background=mycolor6;

    document.getElementById("common7").style.background=mycolor7;
    document.getElementById("common8").style.background=mycolor8;
    document.getElementById("common9").style.background=mycolor9;
    document.getElementById("common10").style.background=mycolor10;
    document.getElementById("common11").style.background=mycolor11;
    document.getElementById("common12").style.background=mycolor12;
    document.getElementById("common13").style.background=mycolor13;
    
    document.getElementById("common14").style.background=mycolor14;
    document.getElementById("common15").style.background=mycolor15;
    document.getElementById("common16").style.background=mycolor16;
    document.getElementById("common17").style.background=mycolor17;
    document.getElementById("common18").style.background=mycolor18;
    document.getElementById("common19").style.background=mycolor19;
    document.getElementById("common20").style.background=mycolor20;
    
    document.getElementById("common21").style.background=mycolor21;

}

const keys = document.querySelectorAll('.key');
const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');
const whites = ['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y','u','i','o','p','[',']'];
const blacks = ['a', 's', 'd', 'f', 'g','h','j','k','l','z','x','c','v','b','n'];

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = whites.indexOf(key)
    const blackKeyIndex = blacks.indexOf(key)

    if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex])
})

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note)
    noteSound.currentTime = 0
    noteSound.play()
    key.classList.add('active')
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}