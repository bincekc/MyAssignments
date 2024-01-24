const Words = (input) => {
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
};

const inputString = 'this is a sample string';
console.log(Words(inputString));
