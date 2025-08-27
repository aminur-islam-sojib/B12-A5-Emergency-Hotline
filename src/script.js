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
    alert(` 📋 The number has been copied, in your clipboard. ${text}`);
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
      alert(`📞 Calling ${iName} ${number}...`);
      coin -= 20;
      coinCounter.innerHTML = coin;
      loadHistory(iName, number);
    } else {
      alert(`❌ You need at least 20 coins to make a call.`);
    }
  });
});

const historySection = document.getElementById("history-section");
const clearBtn = document.querySelector(".btn-accent");
const loadHistory = (iName, number) => {
  const div = document.createElement("div");
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  div.innerHTML = `<div
            class="flex mt-3 p-2 rounded-md justify-between align-middle items-center bg-gray-100"
          >
            <div>
              <h1 class="font-medium text-[18px]">${iName}</h1>
              <h3>${number}</h3>
            </div>
            <div>
              <h1>${time}</h1>
            </div>
          </div>`;
  historySection.appendChild(div);
};

clearBtn.addEventListener("click", function () {
  historySection.innerHTML = "";
});
