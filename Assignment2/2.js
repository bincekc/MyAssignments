const currentDate = new Date();
const mm = currentDate.getMonth() + 1;
const dd = currentDate.getDate();
const yyyy = currentDate.getFullYear();

console.log(`${mm}-${dd}-${yyyy}`);
// or
console.log(`${mm}/${dd}/${yyyy}`);
// or
console.log(`${dd}-${mm}-${yyyy}`);
// or
console.log(`${dd}/${mm}/${yyyy}`);
