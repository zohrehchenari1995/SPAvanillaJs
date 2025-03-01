// ----------------------------------------SELECTING
const body = document.querySelector("body");
const contentSidebar = body.querySelector(".content__sidebar");
const chevronToggle = body.querySelector(".chevron__toggle");
const listSearch = body.querySelector(".list__search");
const mode = body.querySelector(".mode");
const toggleSwitch = body.querySelector(".toggle-switch");
const modeText =body.querySelector(".mode__text");
// END SELECTING------------------------------------


//----------------------------------------DARK-LIGHT MODE  
toggleSwitch.addEventListener("click",()=>{
  body.classList.toggle("dark");
})
// END DARK-LIGHT MODE----------------------------------


//-------------------------------------- CHEVRON TOGGLE
  chevronToggle.addEventListener("click",()=>{
    contentSidebar.classList.toggle("close");
  })
// END CHEVRON TOGGLE---------------------------------