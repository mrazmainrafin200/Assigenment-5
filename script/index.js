// Heart icon click and top nev heart count 1++
let hearts = document.getElementsByClassName('heart-icon');
let topHeartCount = document.getElementById('top-heart-count');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        let currentCount = parseInt(topHeartCount.textContent);
        topHeartCount.textContent = currentCount + 1;
    });
}

// Call buttons click and show alert 
let callButtons = document.querySelectorAll('.call-btn')
callButtons.forEach(buttons => {
    buttons.addEventListener('click', function () {
        let service = this.getAttribute('data-service');
        let number = this.getAttribute('data-number');
        alert(service + "-" + number);
        console.log(service, Number);
    });
});