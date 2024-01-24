const today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = daysOfWeek[today.getDay()];

let hours = today.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;

const minutes = today.getMinutes();
const seconds = today.getSeconds();

console.log(`Today is: ${day}.`);
console.log(`Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);
