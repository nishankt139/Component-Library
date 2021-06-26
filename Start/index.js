/*Toast*/


function showToast(text){
  var x  = document.getElementById("toast");
  x.classList.add("show");
  setTimeout(function () {
      x.classList.remove("show")
  }, 3000);
}


/*Modal*/


function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

