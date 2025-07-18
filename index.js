function moveDodgerLeft() {
  const dodger = document.getElementById("dodger");
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});