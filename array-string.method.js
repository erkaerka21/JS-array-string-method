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
  for (let p = 0; p < stringArr.length; p++) {
    stringArr[p] =
      stringArr[p].charAt(0).toUpperCase() + stringArr[p].substring(1);
  }
  return stringArr.join(" ");
}

let text = "the quick brown fox";
console.log("өгөшдсөн текст : ", text);
let getcaptionLog = getCaption(text);
console.log("Үг болгоны эхний үсгийг томруулсан : ", getcaptionLog);

//daalgavar5
//Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
function urvuulah(array) {
  //   let urvuuW = "";
  //   let alphabet;
  //   let urvuuArr = [];
  //   for (i = 0; i < array.length; i++) {
  //     let word = array[i];
  //     for (j = word.length - 1; j >= 0; j--) {
  //       alphabet = word[j];
  //       urvuuW = urvuuW + alphabet;
  //       for (j = 0; j < word.length; j++) {
  //         urvuuArr.push(urvuuW);
  //         urvuuArr.join(" ");
  //       }
  //     }
  //   }
  //   return urvuuArr;
  let urvuulsanArr = [];
  for (let i = 0; i < array.length; i++) {
    let urvuulsanStr = array[i].split("").reverse().join("");
    urvuulsanArr.push(urvuulsanStr);
  }
  return urvuulsanArr;
}
let arrayText = ["hello", "world", "javascript", "array"];
console.log("Анхны өгсөн array текст : ", arrayText);
let reverse = urvuulah(arrayText);
console.log("Анх өгсөн array доторхи текстүүдийг урвуулсан нь : ", reverse);

//daalgavar6
//Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
function search(string) {
  let arr = string.split(" ");
  console.log(arr);
  let searchWord = prompt("animal эсвэл cat хоёрын аль нэг утгыг оруулна уу");
  console.log("Таны оруулсан утга : ", searchWord);
  let searchWordArr = searchWord.split(" ");
  for (let p = 0; p < searchWordArr.length; p++) {
    console.log(
      "хайх үг : " +
        searchWordArr[p] +
        ", хайх үг нь хайх үгсийн array д байгаа эсэх : ",
      arr.includes(searchWordArr[p])
    );
  }
  return;
}
let searchArea = "animal world";
console.log("хайх үгсийн талбар : ", searchArea);
let findSearch = search(searchArea);
// console.log(findSearch);

//daalgavar7
//Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн.
// productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна.
// Өгөгдлийг өөрсдөө зохионо.
// Дараах даалгаварыг хийж гүйцэтгэнэ үү.
// 1. Нийт борлуулалтын дүнг тооцоолох.
// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 4. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Milk",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 5400,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Cookie",
    unitPrice: 2800,
    amount: 198,
    totalPrice: 670000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 180,
    totalPrice: 1909000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate-candy",
    unitPrice: 5000,
    amount: 67,
    totalPrice: 900000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Coca-cola",
    unitPrice: 30,
    amount: 18,
    totalPrice: 28000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Orange-Juice",
    unitPrice: 500000,
    amount: 200,
    totalPrice: 4890000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Banana",
    unitPrice: 4890,
    amount: 9000,
    totalPrice: 3243200,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Protein-bar",
    unitPrice: 17000,
    amount: 1000,
    totalPrice: 17000000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Protein-shake",
    unitPrice: 30070,
    amount: 456,
    totalPrice: 569000,
    casherId: 1,
    date: "2022-11-01",
  },
];
console.log("Өгөгдсөн бараа бүтээгдэхүүний борлуулалтын мэдээ : ", data);

// 1. Нийт борлуулалтын дүнг тооцоолох.
function calcTotPrice(arr) {
  let totalSumPrice = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSumPrice += arr[i].totalPrice;
  }
  return totalSumPrice;
}
let findTotPrice = calcTotPrice(data);
console.log(
  "Өгөгдсөн бараа бүтээгдэхүүний нийт борлуулалтын мөнгөн дүн : ",
  findTotPrice
);

// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
function calcTotAmount(arr) {
  let totalSumAmount = 0;
  for (let j = 0; j < arr.length; j++) {
    totalSumAmount += arr[j].amount;
  }
  return totalSumAmount;
}
let findTotAmount = calcTotAmount(data);
console.log(
  "Өгөгдсөн бараа бүтээгдэхүүний нийт борлуулалсан тоо ширхэг : ",
  findTotAmount
);

// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// function findMax5(arr) {
//   let dataArr = [];
//   for (let w = 0; w < arr.length; w++) {
//     dataArr.push(arr[w].totalPrice);
//   }
//   console.log(dataArr);
//   let maxBorluulalt = dataArr[0];
//   let max5 = [];
//   for (let q = 0; q < dataArr.length; q++) {
//     if (maxBorluulalt < dataArr[q]) {
//       maxBorluulalt = dataArr[q];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(maxBorluulalt), 1);
//   max5.push(maxBorluulalt);
//   //   console.log(max5);
//   //   console.log(dataArr);
//   let maxBorluulalt1 = dataArr[0];
//   for (let e = 0; e < dataArr.length; e++) {
//     if (maxBorluulalt1 < dataArr[e]) {
//       maxBorluulalt1 = dataArr[e];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(maxBorluulalt1), 1);
//   max5.push(maxBorluulalt1);
//   //   console.log(dataArr);
//   //   console.log(max5);
//   let maxBorluulalt2 = dataArr[0];
//   for (let r = 0; r < dataArr.length; r++) {
//     if (maxBorluulalt2 < dataArr[r]) {
//       maxBorluulalt2 = dataArr[r];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(maxBorluulalt2), 1);
//   max5.push(maxBorluulalt2);
//   //   console.log(dataArr);
//   //   console.log(max5);
//   let maxBorluulalt3 = 0;
//   for (let t = 0; t < dataArr.length; t++) {
//     if (maxBorluulalt3 < dataArr[t]) {
//       maxBorluulalt3 = dataArr[t];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(maxBorluulalt3), 1);
//   max5.push(maxBorluulalt3);
//   //   console.log(dataArr);
//   //   console.log(max5);
//   let maxBorluulalt4 = 0;
//   for (let y = 0; y < dataArr.length; y++) {
//     if (maxBorluulalt4 < dataArr[y]) {
//       maxBorluulalt4 = dataArr[y];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(maxBorluulalt4), 1);
//   max5.push(maxBorluulalt4);

//   //   console.log(maxBorluulalt);
//   console.log("хамгийн их борлуулалтын дүн : ", max5);
//   //   console.log(dataArr4);
// }
// let findMaximum5 = findMax5(data);
// // console.log(findMaximum5);
function findmax5(arr) {
  let dataArr = [];
  for (let w = 0; w < arr.length; w++) {
    dataArr.push(arr[w].totalPrice);
  }
  console.log("борлуулалтын нийт үнийн дүнгүүд : ", dataArr);
  dataArr.sort(function (a, b) {
    return a - b;
  });
  console.log(
    "Хамгийн их борлуулалтын нийт үнийн дүнгүүд : ",
    dataArr.slice(5, 11)
  );
}

let findMax5 = findmax5(data);

// 4. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
// function findmin5(arr) {
//   let dataArr = [];
//   for (let w = 0; w < arr.length; w++) {
//     dataArr.push(arr[w].totalPrice);
//   }
//   console.log(dataArr);
//   let minBorluulalt = dataArr[0];
//   let min5 = [];
//   for (let q = 0; q < dataArr.length; q++) {
//     if (minBorluulalt < dataArr[q]) {
//       minBorluulalt = dataArr[q];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(minBorluulalt), 1);
//   min5.push(minBorluulalt);
//   //   console.log(max5);
//   //   console.log(dataArr);
//   let minBorluulalt1 = dataArr[0];
//   for (let e = 0; e < dataArr.length; e++) {
//     if (minBorluulalt1 < dataArr[e]) {
//       minBorluulalt1 = dataArr[e];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(minBorluulalt1), 1);
//   min5.push(minBorluulalt1);
//   //   console.log(dataArr);
//   //   console.log(max5);
//   let maxBorluulalt2 = dataArr[0];
//   for (let r = 0; r < dataArr.length; r++) {
//     if (minBorluulalt2 < dataArr[r]) {
//       minBorluulalt2 = dataArr[r];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(minBorluulalt2), 1);
//   min5.push(minBorluulalt2);
//   //   console.log(dataArr);
//   //   console.log(max5);
//   let minBorluulalt3 = 0;
//   for (let t = 0; t < dataArr.length; t++) {
//     if (minBorluulalt3 < dataArr[t]) {
//       minBorluulalt3 = dataArr[t];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(minBorluulalt3), 1);
//   max5.push(maxBorluulalt3);
//   //   console.log(dataArr);
//   //   console.log(max5);
//   let maxBorluulalt4 = 0;
//   for (let y = 0; y < dataArr.length; y++) {
//     if (maxBorluulalt4 < dataArr[y]) {
//       maxBorluulalt4 = dataArr[y];
//     }
//   }
//   dataArr.splice(dataArr.indexOf(maxBorluulalt4), 1);
//   max5.push(maxBorluulalt4);

//   //   console.log(maxBorluulalt);
//   console.log("хамгийн их борлуулалтын дүн : ", max5);
//   //   console.log(dataArr4);
// }
// let findMinimum5 = findMin5(data);
// // console.log(findMinimum5);
function findmin5(arr) {
  let dataArr = [];
  for (let w = 0; w < arr.length; w++) {
    dataArr.push(arr[w].totalPrice);
  }
  dataArr.sort(function (a, b) {
    return b - a;
  });
  console.log(
    "Хамгийн бага борлуулалтын нийт үнийн дүнгүүд : ",
    dataArr.slice(5, 11)
  );
}

let findMin5 = findmin5(data);
