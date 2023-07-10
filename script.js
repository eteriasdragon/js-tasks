// знаю, що в деяких завданнях можна використати методи по типу reduce, але хотілось більше спробувати самостійно прописати логіку
// регулярні вирази не використовувала впродовж завдань з тієї ж причини

// task1

function calcDiff(arr) {
  if (arr.length <= 1) return 0;
  const sortedArr = arr.sort((a,b) => a - b);
  return sortedArr[sortedArr.length - 1] - sortedArr[0];
}

// console.log(calcDiff([3,9,0,4,-5]));

// task 2

function calcStringByNumber(stringToCheck, limitNumber) {
 return stringToCheck.replace(",", "").replace(".", "").split(" ").filter(word => word.length > limitNumber);
}

// console.log(calcStringByNumber("hello, worlds how are confident you thanks.", 5));

// task 3
const checkLastSubstr = (stringToCheck, argument) => stringToCheck.endsWith(argument);

// console.log(checkLastSubstr("thankyoutoo", "youtoo"));

// task 4

function findAverage(arr) {
  const averageValuesArr = [];
  arr.forEach((number, index) => {
    if(index === arr.length - 1) return false;
    averageValuesArr.push((arr[index] + arr[index + 1])/2);
  })
  return averageValuesArr;
}

// console.log(findAverage([0, 2, -10, 8, 10]));

// task 5

function countVowels(string) {
  const vowelsArr = ["a", "o", "i", "e", "u", "y"];
  let vowelsCounter = 0;
  string.split("").forEach((letter) => {
    if(!~vowelsArr.indexOf(letter)) return;
    vowelsCounter++;
  })
  return vowelsCounter;
}

function deleteVowels(string) {
  const lettersToDeleteArr = ["a", "b", "c"];
  const lettersArr = string.split("");
  let hasLettersToDelete = false;
  lettersArr.forEach((letter) => {
    if(!~lettersToDeleteArr.indexOf(letter)) return;
    hasLettersToDelete = true;
    lettersArr[lettersArr.indexOf(letter)] = "";
  })
  return hasLettersToDelete ? lettersArr.join("") : null;
}

// console.log(countVowels("jabascript"));
// console.log(deleteVowels("jabascript"));

// task 6

function findUnique(firstArr, secondArr) {
  const uniqueArr = [...firstArr];
  secondArr.forEach(value => {
    if(!uniqueArr.includes(value)) uniqueArr.push(value);
  })
  return uniqueArr.sort((a,b) => a - b);
}

// console.log(findUnique([10, 2, 5, 6, 7], [8, 9, 20, 5, 10, 30, 6]));

// task 7

function createReverseCopy (obj) {
  const reverseObj = {};
  for (let key in obj) {
    reverseObj[obj[key]] = key;
  }
  return reverseObj;
}

// console.log(createReverseCopy({teri: "luna", key: "value", hello: 45}));

// task 8

function calcSavedSum (obj, insSum) {
  if(!Object.keys(obj).length) return false;
  let lostSum = 0;

  for (let key in obj) {
    if(typeof(obj[key]) !== "number") continue;
    lostSum += obj[key];
  }
  if(lostSum < insSum) return false;

  return lostSum - insSum;
}

// console.log(calcSavedSum({skate: 10, pen: 30}, 20));

// task 9

function isSuite(width, height, depth, widthToSuit, heightToSuit) {
  const brickValuesVariants = [[width, height], [height, width], [width, depth], [depth, width], [height, depth],  [depth, height]];

  return brickValuesVariants.some(
    ([firstValue, secondValue]) => firstValue <= widthToSuit && secondValue <= heightToSuit
  );
}

// console.log(isSuite(1,2,1,1,1));

// task 10

function getTitle(string) {
   return string.slice(string.lastIndexOf('\\') + 1, string.lastIndexOf('.'));
}

// console.log(getTitle("c:\\WebServers\\home\\testsite\\www\\myfile.txt"));

// task 11
function canBeCreatedByShift(firstString, secondString) {
  return (secondString + secondString).indexOf(firstString) !== -1;
}

// console.log(canBeCreatedByShift('trings', 'string'));

// task 12

function splitArr(a) {
  let b = [];
  let c = [];

  a.sort((a, b) => a - b);

  while (a.length > 0) {
    let minDiff = Infinity;
    let pairIndex = 0;

    for (let i = 1; i < a.length; i++) {
      let diff = a[i] - a[i - 1];

      if (diff < minDiff) {
        minDiff = diff;
        pairIndex = i - 1;
      }
    }

    b.push(a[pairIndex]);
    c.push(a[pairIndex + 1]);

    a.splice(pairIndex, 2);
  }

  return {b, c};
}

// console.log(splitArr([1, 11, 3, 14, 6, 7, 5, 8, 9, 10]));

// task 13

function checkString(string) {
  const wordsArr = string.split(" ");
  const urlRegex = /^(ftp|http|https|www):\/\/([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*)(:\d+)?(\/[^\s]*)?$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formattedString = wordsArr.map((word, index) => {
    if (!index) return word[0].toUpperCase() + word.slice(1).toLowerCase();
    if (emailRegex.test(word)) return "[emails are banned]";
    if (urlRegex.test(word)) return "[links are banned]";
    if (word.length > 3 && !isNaN(parseFloat(word))) return "";
    return word.toLowerCase();
  }).filter(value => value).join(" ");

  if(formattedString.length > string.length) {
    setInterval(()=> {
      alert("Do you need help?")
    }, 5000)
  }

  return formattedString;
}

// console.log(checkString('36578 http://world.com email@gmail.com '));

// task 14

const text = '([a';
const rootElement = document.getElementById('root');
const isBalanced = checkParenthesesBalance(text);

if (isBalanced) {
  rootElement.innerHTML = text;
}

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });
});

document.oncontextmenu = function () {
  return false;
};

function checkParenthesesBalance(text) {
  const stack = [];
  const openBraces = ['(', '{', '['];
  const closingBraces = [')', '}', ']'];

  for (const char of text.split('')) {
    if (openBraces.includes(char)) {
      stack.push(char);
    }
    if (closingBraces.includes(char)) {
      if (!stack.length) {
        return false;
      }
      const lastChar = stack.pop();
      if (openBraces.indexOf(lastChar) !== closingBraces.indexOf(char)) {
        return false;
      }
    }
  }
  return !stack.length;
}

// task 15

