//daalgavar1
//Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]
function pushNumber(arr) {
  arr.push(5);
  return arr;
}
let pushN = [1, 2, 4];

console.log("Анхны өгөгдсөн array тоонууд : ", pushN);
let find = pushNumber(pushN);
console.log("array д тоо нэмж оруулсаны дараа : ", find);

//daalgavar2
//Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]
function shineArrayUusgeh(arr) {
  arr.splice(0, 0, 1, 2, 3, 4, 5);
  return arr;
}
let newArr = [];
console.log("Анхны өгөдсөн хоосон array", newArr);
let findnewArr = shineArrayUusgeh(newArr);
console.log("Үүссэн шинэ array", findnewArr);

//daalgavar3
//Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.
function sumAverage(string) {
  let sum = 0;
  let average = 0;
  let strArr = string.split("");
  let numarr = [];
  for (let o = 0; o < strArr.length; o++) {
    numarr.push(Number(strArr[o]));
  }
  for (let u = 0; u < numarr.length; u++) {
    sum += numarr[u];
  }
  console.log("гараас өгсөн тоонуудын нийлбэр", sum);
  average = sum / numarr.length;
  return "гараас өгсөн тоонуудын дундаж " + average;
}

let toonuud = prompt("array д багтах тоонууд оруулна уу!!!");
console.log("таны оруулсан тоонууд : ", toonuud);
let findSumAndAve = sumAverage(toonuud);
console.log(findSumAndAve);
////
// let string = "12345789";
// let array = string.split("");
// console.log(array);
// let number = [Number(array)];

//daalgavar4
//Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '
function getCaption(string) {
  let stringArr = string.split(" ");
  console.log(stringArr);
  for (let p = 0; p<stringArr; p++) {
    
    }
  }
}

let text = "the quick brown fox";
console.log("өгөшдсөн текст : ", text);
let getcaptionLog = getCaption(text);
console.log("Үг болгоны эхний үсгийг томруулсан : ", getcaptionLog);
