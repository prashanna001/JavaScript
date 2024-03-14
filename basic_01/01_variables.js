const acountId = 12345;

let acountEmail = "abc@gmail.com"; // it is the advance version of "var"

var acountPassword = "1234578";// prefer not to use var because of issue in block scope & functional scope

acountCity = "kathmandu"; // JS don't need to be  defined

let acountState; // if value is not define then the print value will be called "undefined"

// acountId = 25874; const value can't be changed

// console.log(acountId); 

acountEmail = "def@gmail.com";

acountPassword = "258974";

acountCity = "pokhara";

console.table([acountId, acountEmail, acountPassword, acountCity, acountState]);