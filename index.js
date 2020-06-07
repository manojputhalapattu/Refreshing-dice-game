
var random=Math.floor(Math.random()*6)+1
//var rand="dice"+random+".png"
//var source="images\"+rand;
var name="dice"+random+".png"
document.querySelectorAll("img")[0].setAttribute("src",name);
var random2=Math.floor(Math.random()*6)+1
var d1="dice"+random2+".png"
document.querySelectorAll("img")[1].setAttribute("src",d1);
if(random>random2){
    document.querySelector("h2").innerHTML="Player 1 wins";
}
else if(random2>random){
    document.querySelector("h2").innerHTML="Player 2 wins";
}
if(random==random2){
document.querySelector("h2").innerHTML="Draw";
}
