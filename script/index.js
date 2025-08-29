// Heart icon click and top nev heart count 1++
let hearts = document.getElementsByClassName('heart-icon');
let topHeartCount = document.getElementById('top-heart-count');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        let currentCount = parseInt(topHeartCount.textContent);
        topHeartCount.textContent = currentCount + 1;
    });
};

// Call buttons click, show alert and cut 20 coins 
let coin = 100;
let coinCounts = document.getElementById('coin-count');
let callButtons = document.querySelectorAll('.call-btn')

callButtons.forEach(buttons => {
    buttons.addEventListener('click', function () {
        let service = this.getAttribute('data-service');
        let number = this.getAttribute('data-number');

        if (coin >= 20) {
            coin -= 20;
            coinCounts.innerText = coin;
            alert(service + ' ' + number);
        }
        else {
            alert("You don't have enough coins. You need at least 20 coins to make a call.");
        }
    });
});

// copy btn click and number copy 
let copyBtn = document.getElementsByClassName('copy-btn')
let topCopyCount = document.getElementById('top-copy-btn');

for (let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener('click', function () {
        let currentCount = parseInt(topCopyCount.textContent);
        topCopyCount.textContent = currentCount + 1;
        let number = this.getAttribute('data-number');
        navigator.clipboard.writeText(number);
    });
};