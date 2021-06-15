const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = (array) => {
//   const eachWord= array.map((strings)=>strings.split(" "))
//   const capitalWord=eachWord.map((word) => {word[0].toUpperCase() + word.substring(1)}).join(" ");
//   console.log(capitalWord)
// }
// console.log(titleCased(tutorials))

//const mySentence = "freeCodeCamp is an awesome resource";


//const [num0, num1, num2, num3, num4, num5, num6, num7, num8]=tutorials

// function titleCased(array){
//   const words = (array)=>{const eachWord= array.map((string)=>string.split(" "));
//   const eachLetterUp= eachWord[0].toUpperCase()
//   console.log(eachLetterUp);
//   return words.map((word)=>{word[0].toUpperCase() + word.substring(1)}).join(" ")}
// }
// const words = (array)=>{const eachWord= array.map((string)=>string.split(" "))}
// function splittingWords(array){
// const words= array.map((strings)=>strings.split(" "));
// return words
// }
// const splitWords= splittingWords(tutorials)
// console.log(splitWords)
// const bigWords= splitWords.map((string)=>string[0][0].toUpperCase()).join(splitWords)
// console.log(bigWords)
const [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10]=tutorials

const titleCased=function (num){
    const num1Broken= num1.split(" ")
    const sen1= num1Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
    const num2Broken= num2.split(" ")
    const sen2= num2Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
    const num3Broken= num3.split(" ")
    const sen3= num3Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
    const num4Broken= num4.split(" ")
    const sen4= num4Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
    const num5Broken= num5.split(" ")
    const sen5= num5Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
    const num6Broken= num6.split(" ")
    const sen6= num6Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
    const num7Broken= num7.split(" ")
    const sen7= num7Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
    const num8Broken= num8.split(" ")
    const sen8=num8Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
    const num9Broken= num9.split(" ")
    const sen9= num9Broken.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
  const num10Broken= num10.split(" ")
  const sen10= num10Broken.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
  const sentenceArray= [sen1, sen2, sen3, sen4, sen5, sen6, sen7, sen8, sen9, sen10]
  return sentenceArray
}
// console.log(titleCased("num9"))
// const capitalizeFirst=splitWords.toUpperCase;
// console.log(capitalizeFirst)
// console.log(titleCased(tutorials))
// console.log(capitalized);