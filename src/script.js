const hearts = document.querySelectorAll(".fa-heart");
const heartCounter = document.getElementById("heartCount");
let count = 0;

hearts.forEach((heart) => {
  heart.addEventListener("click", function () {
    count++;
    heartCounter.innerHTML = count;
  });
});

const copyBtns = document.querySelectorAll(".btn-outline");
const hotlineNumbers = document.querySelectorAll(".hotlineNumber");
let copyCount = document.getElementById("copyCounter");
let copyCounter = 0;

copyBtns.forEach((copyBtn, index) => {
  copyBtn.addEventListener("click", function () {
    const text = hotlineNumbers[index].innerHTML;
    navigator.clipboard.writeText(text);
    alert(`The number has been copied. ${text}`);
    copyCounter++;
    copyCount.innerText = copyCounter;
  });
});
