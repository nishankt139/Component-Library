

function showToast(text){
    var x  = document.getElementById("toast");
    x.classList.add("show");
    setTimeout(function () {
        x.classList.remove("show")
    }, 3000);
}