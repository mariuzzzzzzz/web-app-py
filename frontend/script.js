function greetUser() {
    var userName = document.getElementById('nameInput').value;

    var greetingMessage = 'Hello, ' + userName + '! Welcome to our website!';
    alert(greetingMessage);
}

document.getElementById('greetButton').addEventListener('click', greetUser);
