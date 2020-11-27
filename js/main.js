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