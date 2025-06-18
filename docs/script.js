const phrases = ["Flutter Developer.", "UI/UX Enthusiast.", "CS Student."];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function loop() {
    isEnd = false;
    typedText.innerHTML = currentPhrase.join("");

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
        }

        if (j === phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) i = 0;
        }
    }

    const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
    setTimeout(loop, speed);
}

loop();
