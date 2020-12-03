const submitBtn = document.querySelector("#submitBtn");
const formName = document.querySelector("#inputName");
const formActivity = document.querySelector("#chooseActivity");
const formNum = document.querySelector("#numPeople");
const formComment = document.querySelector("#comment");

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
   Email.send({
         Host: "smtp.mail.com",
         Username: "KirtlandFamilyHistory@mail.com",
         Password: "z#HW2a-_.HAm.vS",
         To: 'KirtlandFamilyHistory@mail.com',
         From: "KirtlandFamilyHistory@mail.com",
         Subject: `Add a brick for ${name}`,
         Body: emailBody,
      })
      .then( () => {
         alert("Thanks you! Your form was successfully sent.")
      });
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