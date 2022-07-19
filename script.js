function inputValidator(condition, errorMessage) {
    if (condition) {
        errorArea = document.getElementById("form-alert");
        errorArea.innerHTML += `<li>${errorMessage}</li>`;
    }
}

function validateName(nameInput) {
    let name = nameInput.value.trim();
    inputValidator(name === "", "Please enter your name.");
    inputValidator(!name.match(/^[a-zA-Z]+$/), "Name may only contain letters.");
}

function validateMessage(messageInput) {
    let message = messageInput.value.trim();
    inputValidator(message === "", "Please enter a message.");
}

function validateSubject(subjectInput) {
    let subject = subjectInput.value.trim();
    inputValidator(subject === "", "Please enter a subject.");
    inputValidator(!subject.match(/^[a-zA-Z]+$/), "The subject must be one word.")
}

function validateuserEmail(userEmail) {
    let waffles = /\A[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z/;
    inputValidator(userEmail === "", "Give email >:(");
    inputValidator(userEmail.match(waffles), "That email is not valid");
}

function validateForm() {
    let nameInput = document.getElementById("name");
    let userEmailInput = document.getElementById("email");
    let userEmail = userEmailInput.value.trim();
    let subjectInput = document.getElementById("subject");
    let messageInput = document.getElementById("message");
    document.getElementById("form-alert").innerHTML = "";
    validateName(nameInput);
    validateMessage(messageInput);
    validateSubject(subjectInput);
    validateuserEmail(userEmail);
} 