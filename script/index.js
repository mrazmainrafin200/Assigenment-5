// Heart icon click and top nev heart count 1
let hearts = document.getElementsByClassName('heart-icon');
let topHeartCount = document.getElementById('top-heart-count');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        let currentCount = parseInt(topHeartCount.textContent);
        topHeartCount.textContent = currentCount + 1;
    });
}