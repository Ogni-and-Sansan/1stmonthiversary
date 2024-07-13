// Poem Generator
function generatePoem() {
    const name = document.getElementById('name').value;
    const poem = `Roses are red, violets are blue, ${name}, I love you.`;
    document.getElementById('poemOutput').innerText = poem;
}

// Love Notes
const loveNotes = [
    "You are my sunshine.",
    "I miss you every day.",
    "Can't wait to see you again.",
    "You mean the world to me."
];

function showNote() {
    const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    document.getElementById('noteOutput').innerText = randomNote;
}

// Fortune Cookie
const fortunes = [
    "You will have a wonderful day.",
    "Love is just around the corner.",
    "Happiness is coming your way.",
    "You will achieve your dreams."
];

function revealFortune() {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById('fortuneOutput').innerText = randomFortune;
}

// Love Quotes
const quotes = [
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "To love and be loved is to feel the sun from both sides. - David Viscott",
    "Love is the greatest refreshment in life. - Pablo Picasso",
    "We are most alive when we're in love. - John Updike"
];

function showQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteOutput').innerText = randomQuote;
}

// Memory Quiz
function submitQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');

    if (!q1 || !q2 || !q3 || !q4) {
        alert("Please answer all questions.");
        return;
    }

    let score = 0;

    if (q1.value === "a") score++;
    if (q2.value === "b") score++;
    if (q3.value === "b") score++;
    if (q4.value === "b") score++;

    const output = `You scored ${score}/4. Well done!`;
    document.getElementById('quizOutput').innerText = output;
}

// Send Email with Things to Do
function sendEmail() {
    const thingsToDo = document.getElementById('thingsToDo').value;
    const email = "your-email@example.com";
    const subject = "Things to Do";
    const body = encodeURIComponent(thingsToDo);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}
