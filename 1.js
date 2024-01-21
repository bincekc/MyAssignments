var imp=new Date();

var day=imp.getDay();
switch (day) {
    case 1: {
      console.log("Today is Monday");
      break;
    }
    case 2:
      console.log("Today is Tuesday");
      break;
    case 3:
      console.log("Today is Wednedday");
      break;
    case 4:
      console.log("Today is Thusday");
      break;
    case 5:
      console.log("Today is Firday");
      break;
    case 6:
      console.log("Today is Saturday");
      break;
    case 7:
      console.log("Today is Sunday");
      break;
    default:
      console.log("Invaid day");
  }
  
var time=imp.getHours() + ":" +imp.getMinutes() + ":" + imp.getSeconds();
//console.log(`Today is ${day}`);
console.log(`Time is ${time}`);