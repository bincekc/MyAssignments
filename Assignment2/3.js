const Number = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt('Enter your guess (between 1 and 10):'));

if (userGuess === Number) {
    console.log('Good Work!');
} else {
    console.log('Not matched. The correct number was ' + Number);
}
