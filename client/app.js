// ---------------------------------------------SELECTING
const body = document.querySelector("body");
const contentSidebar = body.querySelector(".content__sidebar");
const chevronToggle = body.querySelector(".chevron__toggle");
const listSearch = body.querySelector(".list__search");
const mode = body.querySelector(".mode");
const toggleSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode__text");
// END SELECTING----------------------------------------

//----------------------------------------DARK-LIGHT MODE
toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});
// END DARK-LIGHT MODE-----------------------------------

//-------------------------------------- CHEVRON TOGGLE
chevronToggle.addEventListener("click", () => {
  contentSidebar.classList.toggle("close");
});
// END CHEVRON TOGGLE------------------------------------



// 1.WHAT VIEW SHOW USER BASE ON ROUTE?:
function router(params){
  const routes =[
    {path:"/client/",view: console.log("dashboard page")},
    {path:"/client/products",view: console.log("products page")},
    {path:"/client/posts",view: console.log("posts page")},
    {path:"/client/notification",view: console.log("notif page")},
    {path:"/client/likes",view: console.log("likes page")},
    {path:"/client/logout",view: console.log("logout page")},
  ];

  // check routes in browser url  with path user:
 const potentialRoutes =  routes.map((item)=>{
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  })
  console.log(potentialRoutes);

  // find route ismatch(true):
  const match= potentialRoutes.find((route)=>{
    return route.isMatch;
   });
   console.log(match);
}



// RUN ROUTER FUNCTION WITH TRIGGER DOMCONTENTLOADED:
document.addEventListener("DOMContentLoaded",()=>{
  router();
})