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
  var dropDownContent = document.getElementsByClassName("sq-nav-dropdown-content")[0];
  if(dropDownContent.style.display == "" || dropDownContent.style.display== "none"){
  dropDownContent.style.display = "block";
}
  else{
    dropDownContent.style.display ="none";
  }
}
