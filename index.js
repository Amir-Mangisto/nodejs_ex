// for (let i = 0; i < 10; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// let randomNUmbers = [
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
// ];
// randomNUmbers.filter((ele)=>{
//     if(ele % 2 ==0){
//         console.log(ele);
//     }
// })

class Kid {
  firstName;
  age;
  isInSchool;
  constructor(firstName, age, isInSchool) {
    this.firstName = firstName;
    this.age = age;
    this.isInSchool = isInSchool;
  }
}
const kid1 = new Kid("aaa", 12, true);
const fs = require("fs");
const { json } = require("stream/consumers");

// fs.writeFile('task4.json',JSON.stringify(kid1),()=>{});

// let kidsArray = [
//   new Kid("ben", 13, false),
//   new Kid("ben", 10, true),
//   new Kid("shay", 14, false),
//   new Kid("ben", 11, true),
//   new Kid("ben", 16, false),
// ];
//4
// fs.writeFile("kids.json", JSON.stringify(kidsArray), () => {});

//5
// let array=[
//     new Kid("ben", 13, false),
//     new Kid("ben", 10, true),
//     new Kid("shay", 14, false),
//     new Kid("ben", 11, true),
//     new Kid("ben", 16, false),
// ]
// fs.writeFile('task5.txt',JSON.stringify(array),()=>{})
//6
// fs.readFile("./kids.json", () => {
//   for (let i = 0; i < kidsArray.length; i++) {
//     if (kidsArray[i].isInSchool == true) {
//       console.log(kidsArray[i]);
//     } else {
//       console.log("try again");
//     }
//   }
// });

//7
// let randomArray = [];
// for (let i = 0; i < 100; i++) {
//   let random = Math.floor(Math.random() * 100);
//   randomArray.push(random);
// }
// // fs.writeFile("task7.txt", randomArray.toString(), () => {});
// fs.readFile("task7.txt", (err, res) => {
//   let x = res.toString().split(",");
//   x.forEach((item)=>{
//     if(item>50){
//         console.log(item);
//     }
//   })
// });

//9
// const myEvent9=require('./event9.js')
// myEvent9.emitEvent9('event9.txt')

//צרו מחלקה של אירועים, צרו פונקציה מאזינה שמקבלת שם קובץ ומידע ואז מדפיסה לקובץ את המידע וקראו לה בבנאי, ייבאו מופע של המחלקה באינדקס והפעילו את האירוע. 
//10
// const event10 = require('./event10')
// event10.emitEvent10('event10.txt',"hello world")
//11
// const event11 = require('./event11');
// event11.emitEvent11('event11.json',["amir","avi","ermi","eli"])