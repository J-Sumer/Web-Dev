var block = document.querySelectorAll(".c");
var text = document.querySelector("#color");
var won = document.querySelector("#youWon");
len = 9;
colors = [];
selected = 0;
function genRandClr() {
  for (var i = 0; i < len; i++) {
    rgb = [];
    for (var j = 0; j < 3; j++) {
      rgb[j] = Math.floor(Math.random() * 255);
    }
    colors[i] = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
  }
  for (var k = 0; k < len; k++) {
    block[k].style.backgroundColor = colors[k];
  }
}

var newGame = document.querySelector("#s1");
newGame.addEventListener("click", function () {
  won.innerHTML = "Keep Clicking";
  for (var dis = 0; dis < len; dis++) {
    block[dis].style.visibility = "visible";
  }
  genRandClr();
  selected = Math.floor(Math.random() * len);
  console.log(selected);
  text.innerHTML = colors[selected];
  for (var a = 0; a < len; a++) {
    block[a].addEventListener("click", function () {
      clickedColor = this.style.backgroundColor;
      if (clickedColor == colors[selected]) {
        won.innerHTML = "YOU WON";
        console.log("YOU WON");
      }
      if (clickedColor != colors[selected]) {
        this.style.visibility = "hidden";
        console.log("hidden");
      }
    });
  }
});

var easy = document.querySelector("#s2");
easy.addEventListener("click", function () {
  len = 3;
  for (var dis = 3; dis < block.length; dis++) {
    block[dis].style.visibility = "hidden";
  }
});

var hard = document.querySelector("#s3");
hard.addEventListener("click", function () {
  len = 9;
  for (var dis = 3; dis < block.length; dis++) {
    block[dis].style.visibility = "visible";
  }
});
