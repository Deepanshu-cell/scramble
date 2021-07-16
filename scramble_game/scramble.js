const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let ranWords = "";
let Names = [
  "Khushi",
  "Deepanshu",
  "Bharat",
  "Parth",
  "Komal",
  "Rajini",
  "Sonu",
  "Monu",
  "Ayush",
  "Naveen",
  "Ajay",
  "Shaurya",
];

const CreateWords = () => {
  let ranNum = Math.floor(Math.random() * Names.length);
  let newNames = Names[ranNum];
  // console.log(newNames.split(''));
  return newNames;
};
const scrambleWords = (arr) => {
  for (i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    // console.log(temp);
    let j = Math.floor(Math.random() * (i+1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = CreateWords();
    ranWords = scrambleWords(newWords.split("")).join(""); //here .split() function is used to convert strings in to arrays. and join() func is opposite of it.
    msg.innerHTML =`Guess the Word : ${ranWords}`;
  }
  else{
    //   here .value function returns the value entered by user
    let tempWords = guess.value;
    if(tempWords===newWords){
        play = false;
        msg.innerHTML=`  &#128521 Awesome it's Correct. it is ${newWords}.`;
        btn.innerHTML =`Start again`;
        guess.classList.toggle("hidden");
        guess.value='';

    }
    else{
        msg.innerHTML=`&#128532; InCorrect , try again The Word is  ${ranWords}.`;
        // btn.innerHTML =`Guess Again`;

    }
  }
});
