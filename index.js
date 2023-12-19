function random() {
  var value = Math.floor(Math.random() * 6) + 1;
  return value;
}
var p1Value;
var p2Value;
function result() {
  p1Value = random();
  p2Value = random();

  if (p1Value > p2Value) {
    return "Player 1 Wins";
  } else if (p2Value > p1Value) {
    return "Player 2 Wins";
  } else {
    return "Draw";
  }
}
document.querySelector("h2").textContent = result();
document
  .querySelector("img.img1")
  .setAttribute("src", "./images/dice" + p1Value + ".png");
document
  .querySelector("img.img2")
  .setAttribute("src", "./images/dice" + p2Value + ".png");
