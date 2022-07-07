const form = document.querySelector("form");
const email = document.querySelector("input");
const error = document.querySelector(".error");

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!email.value.match(mailformat)) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
        email.value = "";
    }
})