// alert(12333);
var resumeButton = document.getElementById("resume-button");
var userName = document.getElementById("name");
var welcomeMessage = document.getElementById("welcome-division");


// Function to display name
resumeButton.addEventListener("click", function() {

    userName.style.opacity = 1;
    userName.style.color = "blue";
    welcomeMessage.style.opacity = 1;

});

