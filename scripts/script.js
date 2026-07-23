/*
    Student Name: Hazel Rugama
    File Name: script.js
    Date: 07/22/2026
*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for contacting Game Store!");
            form.reset();
        });
    }
});
