// let myDate = new Date(); // current date and time
// console.log("Current Date and Time:", myDate.toString());
// console.log("Current Date and Time:", myDate.toISOString());
// console.log("Current Date and Time:", myDate.toDateString());
// console.log("Current Date and Time:", myDate.toTimeString());
// console.log("Current Date and Time:", myDate.toJSON());
// console.log("Current Date and Time:", myDate.toLocaleDateString());
// console.log("Current Date and Time:", myDate.toLocaleString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023,0,3); // specific date and time
// let myCreatedDate = new Date(2023,0,3,15,6); // specific date and time
// let myCreatedDate = new Date("01-14-2023"); // specific date and time

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now(); // current timestamp in milliseconds
// console.log("Current Timestamp from 01-01-1970:", myTimeStamp);
// console.log("Type of myTimeStamp:", typeof myTimeStamp); // number
// console.log(Math.round(myTimeStamp / 1000 / 60 / 60 / 24 / 365), " years since 1970"); // approximate years since 1970

let newDate = new Date();
// console.log("Current Year:", newDate.getFullYear());
// console.log("Current Month (0-11):", newDate.getMonth()+1);

const formatedDate =newDate.toLocaleString("default", {
  weekday: "short",
  month: "long",
  day: "2-digit",
  year: "numeric"
});
console.log("Long Month and Weekday:", formatedDate)