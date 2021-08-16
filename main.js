
const submit = document.getElementById("submit-btn");

//submit btn event 
submit.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email == "naimur@gmail.com" && password == "123") {
        console.log("hi");
        window.location.href = "bank-inner.html";
    }
    else {
        console.log("wrong info");
    }
})
