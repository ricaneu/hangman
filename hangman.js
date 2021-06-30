var fruit = [
    "banana",
    "apple",
    "peach",
    "pear",
    "passionfruit",
    "coconut",
    "pineapple",
    "orange",
    "grapefruit",
    "lemon",
    "mango",
    "guava",
    "papaya",
    "starfruit",
    "lychee",
    "rambutan",
    "persimmon",
    "longan",
    "kumquat",
    "breadfruit",
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = fruits[Math.floor(Math.random() * fruits.length)];
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => )
    `
    <button
    class ="btn btn-lg btn-primary m-2"
    id='` + letter + `'
    onClick="handleGuess('` + letter + `')"
    >
    ` + letter + `
        </button>
    `).join('');

document.getElementById(keyboard).innerHTML = buttonsHTML;
}

function input(e) {
    var tbInput = document.getElementById("tbInput”);
        tbInput.value = tbInput.value + e.value;
    }

    function del() {
        var tbInput = document.getElementById("tbInput");
        tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
    }

    function handleGuess(chosenLetter) {
        guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
        document.getElementById(chosenLetter).setAttribute('disabled', true);


        if (answer.indexOf(chosenLetter) >= 0) {
            guessedWord();
            checkIfGameWon();
        } else if (answer.indexOf(chosenLetter) === -1) {
            mistakes++;
            updateMistakes();
            checkIfGameLost();
            updateHangmanPicture();
        }
    }

    function updateHangmanPicture() {
        document.getElementById('hangmanPic').src = '' + mistakes + '.jpg'

    }

    function checkIfGameWon() {
        if (wordStatus === answer) {
            document.getElementById('keyboard').innerHTML = 'You Won!'
        }
    }

    function checkIfGameLost() {
        if (mistakes === maxWrong) {
            document.getElementById('wordSpotlight').innerHTML = 'Correct answer: ' + answer;
            document.getElementById('keyboard').innerHTML = 'You are hanged!'
        }
    }

    function guessedWord() {
        wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_")).join('');

        document.getElementById('wordSpotlight').innerHTML = wordStatus;
    }

    function updateMistakes() {
        document.getElementById('mistakes').innerHTML = mistakes;
    }

    function reset() {
        mistakes = 0;
        guessed = [];
        document.getElementById('hangmanPic').src = './240_F_195707186_qIWaoaAfthpRd5vpNmusXnMPuBJw8Bfo.jpg'

        randomWord();
        guessedWord();
        updateMistakes();
        generateButtons();
    }

    document.getElementById('maxWrong').innerHTML = maxWrong;

    randomWord();
    generateButtons();
    guessedWord();
}