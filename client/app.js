
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


// ------------------1.WHAT VIEW SHOW USER BASE ON ROUTE?:
function router(params){
  const routes =[
    {path:"/client/",view:()=>{ console.log("dashboard page")}},
    {path:"/client/products",view:()=>{ console.log("products page")}},
    {path:"/client/posts",view:()=>{ console.log("posts page")}},
    {path:"/client/notification",view:()=>{ console.log("notif page")}},
    {path:"/client/likes",view:()=>{ console.log("likes page")}},
    {path:"/client/logout",view:()=> { console.log("logout page")}},
  ];

  // check routes in browser url  with path user:
 const potentialRoutes =  routes.map((item)=>{
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  })

  // find route ismatch(true):
  let match= potentialRoutes.find((route)=>{
    return route.isMatch;
   });
   
   //  if match false:
   if(!match){
     match={
       route:{path:"/client/not-found",view:()=>{console.log("not-found page")}},
       isMatch: true,
      };
    }
    console.log(match.route.view());
}

// END WHAT VIEW SHOW USER BASE ON ROUTE----------


//-------------------------- PUSH USER TO NEW URL:
function navigateTo(url){
  history.pushState(null,null,url);
  router();
}
// END USER TO NEW URL----------------------------


//------------- EVENT POPSTATE FOR HISTORY BROWSER:
window.addEventListener("popstate",router);
// END EVENT POPSTATE FOR HISTORY BROWSER----------


// RUN ROUTER FUNCTION WITH TRIGGER DOMCONTENTLOADED:
document.addEventListener("DOMContentLoaded",()=>{
  document.body.addEventListener("click",(e)=>{
    if(e.target.matches("[data-link]")){
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
})
//END RUN ROUTER FUNCTION WITH TRIGGER DOMCONTENTLOADED
