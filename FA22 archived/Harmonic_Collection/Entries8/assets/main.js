// define mode in var
//trigger var with audio played once
//make answer appear by adding class ; mode have divverent div
//
//

const button = document.getElementById('button');

const now = new Date();
var current = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
console.log(current);





function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min);
}

button.addEventListener ("click", function() {

let random = getRandomInt(0,4);
let resultVar = random + 1;


console.log("the result :", resultVar);



let resultShow = document.getElementById('result-text');
let theWheel = document.getElementById('the-wheel');
let veil = document.getElementById('result-veil');



if (resultVar == 1) {
  //so goes on with other mode (draft here)
   veil.style.opacity = 100;
   resultShow.innerHTML += current;
  resultShow.innerHTML += 'Polite but selfish <br>';

theWheel.style.animationPlayState="running";
console.log(theWheel);

}else if (resultVar == 2) {
   veil.style.opacity = 100;
   resultShow.innerHTML += current;
     resultShow.innerHTML += 'Delightful but selfish <br>';
 theWheel.style.animationPlayState="running";
 console.log(theWheel);

}else if (resultVar == 3) {
   veil.style.opacity = 100;
   resultShow.innerHTML += current;
  resultShow.innerHTML += 'Agressive& selfish  <br>';

 theWheel.style.animationPlayState="running";
 console.log(theWheel);
}else if (resultVar == 4) {
   veil.style.opacity = 100;
   resultShow.innerHTML += current;
  resultShow.innerHTML += 'Emo & selfish';

 theWheel.style.animationPlayState="running  <br>";
 console.log(theWheel);
}else if (resultVar == 5) {
   veil.style.opacity = 100;
   resultShow.innerHTML += current;
  resultShow.innerHTML += 'Something messed up, cannot predict  <br>';

 theWheel.style.animationPlayState="running";
 console.log(theWheel);
}




} )


var Roll = document.getElementById("audio-roll");
var RollPlay = false;


function togglePlayRoll() {  RollPlay ? Roll.pause() : Roll.play();};

Roll.onplaying = function() {RollPlay = true;};
Roll.onpause = function() {  RollPlay = false;};
