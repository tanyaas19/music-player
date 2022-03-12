console.log("Welcome")
let audioelement = new Audio('perfect.mp3');
var songs = ['perfect.mp3', 'woman.mp3', 'closer.mp3', 'let me.mp3', 'neweules.mp3'];
var ind = 0, f = 0, t = 0, x = 0, y = 0;

function p() {

    setInterval(rng, 1000);
}
function rand(n) {
    if (document.getElementById(n).className == "fa-solid fa-circle-pause") { play(); return; }
    var g = String(ind);
    document.getElementById(g).className = "fa-solid fa-circle-play";
    console.log(g);
    ind = n;
    g = String(ind);
    document.getElementById(g).className = "fa-solid fa-circle-pause";
    abc.className = "fas fa-2x fa-solid fa-circle-pause";
    audioelement.pause();
    audioelement = new Audio(songs[ind]);
    audioelement.play();
    f = 1;
    document.getElementById("myprogressbar").value = 0;
    t = 0;
    x = (audioelement.duration) / 100;
    p();
}

function play() {
    if (f == 0) audioelement.play(), f = 1, abc.className = "fas fa-2x fa-solid fa-circle-pause", p(), document.getElementById(ind).className = "fa-solid fa-circle-pause";
    else audioelement.pause(), f = 0, abc.className = "fas fa-2x fa-solid fa-circle-play", document.getElementById(ind).className = "fa-solid fa-circle-play";
}
function next() {
    var g = String(ind);
    document.getElementById(g).className = "fa-solid fa-circle-play";
    ind = (ind + 1) % 5;
    rand(ind);
}
function back() {
    var g = String(ind);
    document.getElementById(g).className = "fa-solid fa-circle-play";
    ind = (ind - 1 + 5) % 5;
    rand(ind);
}
function rng() {
    myprogressbar.value = parseInt((audioelement.currentTime * 100) / audioelement.duration);
    var w = String(parseInt(audioelement.currentTime) % 60);
    if (w.length == 1) w = "0" + w;
    cur.innerHTML = "0" + parseInt((audioelement.currentTime) / 60) + ":" + w;
    w = String(parseInt(audioelement.duration) % 60);
    if (w.length == 1) w = "0" + w;
    tot.innerHTML = "0" + parseInt((audioelement.duration) / 60) + ":" + w;
    if (f) image.style.opacity = 1;
    else image.style.opacity = 0;
}
function change() {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
}