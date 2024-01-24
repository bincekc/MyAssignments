const longestt = (input) => {
    let longest = '';
    let current = '';

    for (const char of input) {
        if (current.includes(char)) {
            current = current.slice(current.indexOf(char) + 1);
        }
        current += char;
        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
};

console.log(longestt('google.com'));    
console.log(longestt('example.com'));   
