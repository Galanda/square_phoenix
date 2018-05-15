function nextTab1to2(){
    document.getElementById("tab-2").setAttribute('checked',"checked")
  }
  
  function nextTab2to3(){
    document.getElementById("tab-3").setAttribute('checked',"checked")
  }
  
  function nextTab3to4(){
    document.getElementById("tab-4").setAttribute('checked',"checked")
  }
  
  var input = document.getElementById("inputEnterKey");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("buttonEnterKey").click();
    }
  });
  
  var input = document.getElementById("inputEnterKey2");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("buttonEnterKey2").click();
    }
  });
  
  var input = document.getElementById("inputEnterKey3");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("buttonEnterKey3").click();
    }
  });