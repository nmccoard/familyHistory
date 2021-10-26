const submitBtn = document.querySelector("#submitBtn");
const formName = document.querySelector("#inputName");
const formActivity = document.querySelector("#chooseActivity");
const formNum = document.querySelector("#numPeople");
const formComment = document.querySelector("#comment");
showProgress();

//Testing github connection
function changePage(e, classToken) {
   document.querySelector(".home").classList.add("hidden");
   document.querySelector(".howTo").classList.add("hidden");
   document.querySelector(".ideas").classList.add("hidden");
   document.querySelector(".addBrick").classList.add("hidden");
   document.querySelector(".progress").classList.add("hidden");
   
   document.querySelector(`.${classToken}`).classList.remove("hidden");

   let tabLinks = document.querySelectorAll(".tabLinks");
   for (let i=0; i < tabLinks.length; i++){
      tabLinks[i].classList.remove("active");
   }
   
   e.currentTarget.classList.add("active");
}

function sendEmail(name, emailBody) {
   console.log(name + " " + emailBody);
   alert("ahh...Something didn't work. Please send and email to nmccoard@gmail.com to let us know.");
}

submitBtn.addEventListener('click', (e) => {
   e.preventDefault();

   let sendForm = false;
   
   if (formActivity.value === "other" && formComment.value == "") {
      formComment.style.backgroundColor = "rgba(184, 37, 37, 0.77)";
      sendForm = false;
   } else {
      formComment.style.backgroundColor = "white";
      if (formName.value != "" && formActivity.value != "" && formNum.value != "") {
         sendForm = true;
      } else {
         sendForm = false;
      }
   }

   if(sendForm){
      let message = `name: ${formName.value} activity: ${formActivity.value} number: ${formNum.value} comment: ${formComment.value}`;

      sendEmail(formName.value, message);
      formName.value = "";
      formActivity.value = "";
      formNum.value = "";
      formComment.value = "";
   }
});

function progressCalculator(){
   // add a + and the number of bricks earned for each week to the line below
   const numBricks = 4 + 5 + 2 + 7 + 3 + 5 + 2 + 73 + 45 + 3 + 42 + 39 + 12 + 8 + 48 + 5 + 5 + 14 + 12 + 9 + 40 + 36 + 16 + 27 + 60 + 200 + 60 + 35 + 88;
   let progressPer = Math.round((numBricks / 1086) * 1000)/10;
   console.log(numBricks);
   console.log(progressPer.toFixed(1)); 
   return progressPer.toFixed(1);
}

function showProgress(){
   const percentage = document.querySelector('#percentage');
   percentage.innerHTML = `${progressCalculator()}%`
}