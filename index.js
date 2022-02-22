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
// fs.readFile("./kids.    ", () => {
//   for (let i = 0; i < kidsArray.length; i++) {
//     if (kidsArray[i].isInSchool == true) {
//       console.log(kidsArray[i]);
//     } else {
//       console.log("try again");
//     }
//   }
// });

//7
let randomArray = [];
for (let i = 0; i < 100; i++) {
  let random = Math.floor(Math.random() * 100);
  randomArray.push(random);
}
fs.writeFile("task7.txt", randomArray.toString(), () => {});
fs.readFile("task7.txt", (err,res) => {
    let x = res.toString().split(',')
    console.log(x);
});
