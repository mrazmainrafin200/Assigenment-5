// Heart icon click and top nev heart count 1++
let hearts = document.getElementsByClassName('heart-icon');
let topHeartCount = document.getElementById('top-heart-count');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        let currentCount = parseInt(topHeartCount.textContent);
        topHeartCount.textContent = currentCount + 1;
    });
}

// Call buttons click, show alert and cut 20 coins 
let coin = 100;
let coinCounts = document.getElementById('coin-count');
let callButtons = document.querySelectorAll('.call-btn')

let messages = {
    "1": document.getElementById("msg1"),
    "2": document.getElementById("msg2"),
    "3": document.getElementById("msg3"),
    "4": document.getElementById("msg4"),
    "5": document.getElementById("msg5"),
    "6": document.getElementById("msg6"),
    "7": document.getElementById("msg7"),
    "8": document.getElementById("msg8"),
    "9": document.getElementById("msg9"),
};

callButtons.forEach(buttons => {
    buttons.addEventListener('click', function () {
        let service = this.getAttribute('data-service');
        let number = this.getAttribute('data-number');

        if (coin >= 20) {
            coin -= 20;
            coinCounts.innerText = coin;
            alert(service + "-" + number);

            Object.values(messages).forEach(msg => {
                if (msg) {
                    msg.classList.add("hidden");
                    msg.classList.remove("flex");
                }
            });

            let msgId = (index + 1).toString();
            let msg = messages[msgId];
            if (msg) {
                msg.classList.remove("hidden");
                msg.classList.add("flex");
            }
        }
        else {
            alert("Not enough coins! Please recharge.");
        }
    });
});