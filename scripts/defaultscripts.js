function submitUserInput() {
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;
    const userNumber = document.getElementById('userNumber').value;

    const greeting = `Ken's Design Enterprices welcomes you, ${userName}!\nWe're glad you are doing ${userMood}!`;
    alert(greeting);

    const parsedNumber = parseInt(userNumber);
    if (!isNaN(parsedNumber) && parsedNumber >= 0) {
        const polygonNames = ["", "Monogon", "Digon", "Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
        const polygonName = polygonNames[Math.min(parsedNumber, polygonNames.length - 1)];
        alert(`Your favorite polygon based on the number ${parsedNumber} is a ${polygonName}.`);
    } else {
        alert("Please enter a valid positive number.");
    }
}
function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
    alert(result);
}
function showColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    displayResult(`Random Color: ${randomColor}`);
}

function showQuote() {
    const quotes = [
        "The universe is not hostile, nor yet is it friendly. It is simply indifferent. -J.H Holmes", 
        "I was gratified to be able to answer promptly. I said I don't know. -Mark Twain" 
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    displayResult(`Random Quote: ${randomQuote}`);
}

function showCompliment() {
    const compliments = [
        "you're doing amazing!",
        "you're beautiful inside and out."
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    displayResult(`Compliment: ${randomCompliment}`);
}

function showInsult() {
    const insults = [
        "you kind of suck at coding :/ ",
        "booooooo!!!!!"
    ];
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    displayResult(`Insult: ${randomInsult}`);
}
function showPolygon() {
    const userNumber = parseInt(prompt("Enter your favorite number (0 to 10):"));
    if (isNaN(userNumber) || userNumber < 0) {
        alert("Please enter a valid positive number.");
    } else {
        const polygonNames = ["", "Monogon", "Digon", "Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
        const polygonName = polygonNames[Math.min(userNumber, polygonNames.length - 1)];
        displayResult(`Your favorite polygon based on the number ${userNumber} is a ${polygonName}.`);
    }
}

