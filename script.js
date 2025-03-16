const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

let currentIndex = 0;
let showingTerm = true;

function displayCard() {
    let flashcard = document.getElementById('flashcard');
    let txt = document.getElementById('card-content');
    txt.innerText = flashcards[currentIndex].term;
}

function flipCard() {
    let txt = document.getElementById('card-content');

    // display the term or definition
    if (showingTerm) {
        txt.innerText = flashcards[currentIndex].definition;
    } else {
        txt.innerText = flashcards[currentIndex].term;
    }

    showingTerm = !showingTerm;
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    displayCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    displayCard();
}

function addCard() {
    let new_term = document.getElementById('new-term').value;
    let new_def = document.getElementById('new-definition').value;

    // add new term and def to flashcards array
    if (new_term != null && new_def != null) {
        flashcards.push({term: new_term, definition: new_def});
    }
}

window.onload = function() {
    displayCard();
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('next-btn').addEventListener('click', nextCard);
    document.getElementById('prev-btn').addEventListener('click', prevCard);
    document.getElementById('add-card-btn').addEventListener('click', addCard);
}
