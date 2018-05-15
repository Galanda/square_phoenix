function snackbar() {
    var x = document.getElementById("vu-snackbar");
    x.className = "vu-show";
    setTimeout(function(){ x.className = x.className.replace("vu-show", ""); }, 3000);
}
