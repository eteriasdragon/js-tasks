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

// console.log(checkString('36578 http://world.com email@gmail.com'));

// task 14

const str = '([a';
const rootElement = document.getElementById('root');
const isCorrect = checkBracesRight(str);

if (isCorrect) {
  rootElement.innerHTML = str;
}

// document.addEventListener('DOMContentLoaded', function () {
//   document.addEventListener('selectstart', function (e) {
//     e.preventDefault();
//   });
// });
//
// document.oncontextmenu = function () {
//   return false;
// };

function checkBracesRight(str) {
  const bracesLoop = [];
  const openBraces = ['(', '{', '['];
  const closingBraces = [')', '}', ']'];

  str.split("").forEach(symbol => {

    if (openBraces.includes(symbol)) {
      bracesLoop.push(symbol);
    }

    if (closingBraces.includes(symbol)) {

      if (!bracesLoop.length) {
        return false;
      }
      const lastSymbol = bracesLoop.pop();

      if (openBraces.indexOf(lastSymbol) !== closingBraces.indexOf(symbol)) {
        return false;
      }
    }
  })

  return !bracesLoop.length;
}

// task 15

function pwdGenerator(){
  let pwd = "";
  const settings = {
    min: 5,
    max: 19,
    validSymbols: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  }
  const pwdLength = Math.floor(Math.random() * (settings.max - settings.min) + settings.min);

  let uppercaseLettersCounter = 0;
  let digitCounter = 0;

  for (let i=0; i < pwdLength; i++) {

    const symbolToAdd = settings.validSymbols[Math.floor(Math.random() * settings.validSymbols.length)];

    if(!isNaN(+symbolToAdd) && !isNaN(+pwd[pwd.length -1])) continue;
    if(digitCounter >= 5) continue;

    pwd += symbolToAdd;

    if (/[A-Z]/.test(symbolToAdd)) {
      uppercaseLettersCounter++;
    } else if(/\d/.test(symbolToAdd)) {
      digitCounter++;
    }
  }

  if (uppercaseLettersCounter < 2) {
    const randomIdxToSlice = Math.floor(Math.random() * pwd.length);
    pwd = pwd.slice(0, randomIdxToSlice) + '_' + pwd.slice(randomIdxToSlice);
  }
  const randomIdxToSlice = Math.floor(Math.random() * pwd.length);
  pwd = pwd.slice(0, randomIdxToSlice) + '_' + pwd.slice(randomIdxToSlice);

  return pwd;
}

// console.log(pwdGenerator());

// task 16

function arraySort(arr){
  const rightPart = [];
  const leftPart = [];

  arr.sort((a,b) => a-b).forEach((number, index) => { index % 2 ? rightPart.unshift(number) : leftPart.push(number)});

  return [...leftPart, ...rightPart];
}

// console.log(arraySort([1,6,8,3,4,76,456,75,68,56,2,34,]));

// task 17

function sortByFrequency(str) {

  const charFrequency = [...str].reduce((info, char) => {
    info[char] = (info[char] || 0) + 1;
    return info;
  }, {});

  return Object.keys(charFrequency).sort((a, b) => {
    return charFrequency[b] - charFrequency[a];
  }).join("");

}

// console.log(sortByFrequency('abrarrxtgfjdsrtsxgnzdfhzarhcadbra'));

// task 18

function findLongestCommonSubstring(str1, str2) {
  const firstStrLength = str1.length;
  const secondStrLength = str2.length;

  let longestLength = 0;
  let endIndex = 0;

  for (let i = 0; i < firstStrLength; i++) {
    for (let j = 0; j < secondStrLength; j++) {
      let currentLongestSubstrLength = 0;
      while (str1[i + currentLongestSubstrLength] === str2[j + currentLongestSubstrLength] && i + currentLongestSubstrLength < firstStrLength && j + currentLongestSubstrLength < secondStrLength) {
        currentLongestSubstrLength++;
      }

      if (currentLongestSubstrLength > longestLength) {
        longestLength = currentLongestSubstrLength;
        endIndex = i + currentLongestSubstrLength - 1;
      }
    }
  }

  if (longestLength > 0) {
    return str1.substr(endIndex - longestLength + 1, longestLength);
  } else {
    return "";
  }
}
// console.log(findLongestCommonSubstring("programming language", "gram"));

// task 19

function caesarAlgorithm (string, shiftAmount) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const length = alphabet.length;

  shiftAmount = shiftAmount >= 0 ? shiftAmount % length : (shiftAmount % length + length) % length;

  const stringSymbols = string.split('');

  let encryptedStr = '';

  stringSymbols.forEach(symbol => {

    if (symbol.match(/[a-z]/i)) {
      const alphabetCharIdx = alphabet.indexOf(symbol.toLowerCase());

      const encryptedIdx = (alphabetCharIdx + shiftAmount) % length;
      const encryptedSymbol = alphabet[encryptedIdx];

      encryptedStr += symbol === symbol.toLowerCase() ? encryptedSymbol : encryptedSymbol.toUpperCase();

    } else {
      encryptedStr += symbol;
    }

  })

  return encryptedStr;
}

// console.log(caesarAlgorithm('i love ^^ javascript', -6));

// task 20

function isAnagrams(str1, str2) {

  const formatter = (str) => str.replace(/[^\w\s]/gi, "").replace(/\s/g, '').toLowerCase().split("").sort((a,b) =>  a.localeCompare(b)).join("");

  return formatter(str1) === formatter(str2);
}

// console.log(isAnagrams('older and wiser', 'I learned words'));

// task 21

const university = {

  students: [
    {
      id: 1,
      name: "Alice Larson",
      course: 3,
      faculty: "Cybersecurity",
    },
    {
      id: 2,
      name: "Mike Johnson",
      course: 2,
      faculty: "Computer Science",
    },
    {
      id: 3,
      name: "Jamie Owen",
      course: 4,
      faculty: "Cybersecurity",
    },
    {
      id: 4,
      name: "Karl Frantel",
      course: 1,
      faculty: "Data Analytics",
    },
    {
      id: 5,
      name: "Kathrin Pierce",
      course: 2,
      faculty: "Computer Science",
    },
    {
      id: 6,
      name: "Elena Gilbert",
      course: 3,
      faculty: "Cybersecurity",
    },
  ],

  addStudent(studentData) {
    this.students.push(studentData);
  },

  getStudent(studentId) {
    const studentToKnow = this.students.find(({id}) => id === +studentId);
    return studentToKnow ? studentToKnow : "This student does not exist";
  },

  deleteStudent(studentId) {
    this.students = this.students.filter(({id}) => id !== studentId);
  },

  getStudentsOfCourse(courseToFilter) {
    return this.students.filter(({course}) => course === +courseToFilter);
  },

  getStudentsOfFaculty(facultyToFilter) {
    return this.students.filter(({faculty}) => faculty === facultyToFilter);
  }
}

// console.log(university.getStudentsOfCourse(2));

// task 22

