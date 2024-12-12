let decreaseBtn = document.querySelectorAll(".counter button")[0];
let counterNum = document.querySelectorAll(".counter button")[1];
let increaseBtn = document.querySelectorAll(".counter button")[2];
let count = 0;
decreaseBtn.addEventListener("click", () => {
  count--;
  counterNum.innerText = count;
});
increaseBtn.addEventListener("click", () => {
  count++;
  counterNum.innerText = count;
});
