// Heart Section
const hearts = document.querySelectorAll(".fa-heart");
const heartCounter = document.getElementById("heartCount");
let count = 0;

hearts.forEach((heart) => {
  heart.addEventListener("click", function () {
    count++;
    heartCounter.innerHTML = count;
  });
});

// Copy Button Section
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

// Call-Coin Section
const phones = document.querySelectorAll(".btn-success");
const coinCounter = document.getElementById("coin");
const instituteName = document.querySelectorAll(".instituteName");
let coin = 100;

phones.forEach((phone, index) => {
  phone.addEventListener("click", function () {
    if (coin > 0) {
      const iName = instituteName[index].innerHTML;
      const number = hotlineNumbers[index].innerHTML;
      alert(`Calling ${iName} ${number}...`);
      coin -= 20;
      console.log(coin);
      coinCounter.innerHTML = coin;
    } else {
      console.log("You have 0 coin");
      alert(`You need at least 20 coins to make a call.`);
    }
  });
});
