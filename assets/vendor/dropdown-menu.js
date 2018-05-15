window.addEventListener("resize", function(){
  var navLinksDefault = document.getElementById("navbarLinks");
  var dropdownNavLinks = document.getElementById("navbarDropLinks");
  if(window.innerWidth < 500 || window.innerHeight < 300){
    navLinksDefault .style.display ="none";
    dropdownNavLinks.style.display ="block";
     }
  else{
    dropdownNavLinks.style.display ="none";
    navLinksDefault .style.display ="block";
  }
})
function showDropContent(){
  var myTest = document.getElementsByClassName("sq-nav-dropdown-content")[0];
  if(myTest.style.display == "" || myTest.style.display== "none"){
  myTest.style.display = "block";
}
  else{
    myTest.style.display ="none";
  }
}
