//your JS code here. If required.
//your code here
let ul = document.getElementById("bands");
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function getArticleLessString(input) {
  let words = input.split(" ");
  let nonArticleWords = words.filter((word) => {
    let smallCaseWord = word.toLowerCase();
    if (
      smallCaseWord === "the" ||
      smallCaseWord === "an" ||
      smallCaseWord === "a"
    ) {
      return false;
    }
    return true;
  });
  return nonArticleWords.join(" ");
}

let hashMap = {};
let arr1 = [];

for (let i = 0; i < bands.length; i++) {
  let articleLessString = getArticleLessString(bands[i]);
  hashMap[articleLessString] = bands[i];
  arr1.push(articleLessString);
}
arr1.sort();
let outputList = [];
arr1.forEach((newString) => {
  outputList.push(hashMap[newString]); //
});
// console.log(outputList);

for (let i = 0; i < outputList.length; i++) {
  let li = document.createElement("li");
  li.innerText = outputList[i];
  ul.append(li);
}
