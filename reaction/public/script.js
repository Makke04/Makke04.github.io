var clickedTime;
var createdTime;
var reactionTime;
var highScore = [];

function makeBox() {

  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var time = Math.random() * 5000;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var top = (Math.random()*(windowHeight-400))+100;
  var left = Math.random()*(windowWidth-200);
  var shape = Math.random()*50;

  setTimeout(function() {
    document.getElementById("megis").style.display="block";
    //document.getElementById("box").style.background=hue;
    document.getElementById("megis").style.top=top + "px";
    document.getElementById("megis").style.left=left + "px";
    //document.getElementById("box").style.borderRadius=shape + "%";
    createdTime = Date.now();
  }, time);

  if(highScore.length > 0 && reactionTime == highScore[0]) {
    document.getElementById("highScore").style.color="red";
  } else {
    document.getElementById("highScore").style.color="white";
  }

};

document.getElementById("megis").onclick = function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/1000;
  highScore.push(reactionTime);
  highScore.sort(function(a, b){return a-b});
  document.getElementById("highScore").innerHTML = highScore[0];
  document.getElementById("time").innerHTML = reactionTime;
  this.style.display="none";
  makeBox();
}

makeBox();










