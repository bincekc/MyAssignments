const longestWord = (input) => {
    const words = input.split(' ');
    return words.reduce((longest, current) => (current.length > longest.length) ? current : longest, '');
};

const inputString = 'Hello World Welcome';
console.log(longestWord(inputString));  
