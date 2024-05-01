function showLoader(){
    document.getElementById("loader").style.display = "block";
}

function hideLoader(){
    document.getElementById("loader").style.display = "none";
}

const button = document.getElementById("btn");

button.addEventListener("click",() =>{
    button.style.display = "none";

    showLoader();

    setTimeout(() => {
        hideLoader();
        document.querySelector("img").style.display ="block";
    }, 1500);
});