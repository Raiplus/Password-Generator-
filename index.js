let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let strong = document.getElementById("strong");
let passwordishere = document.getElementById("passwordishere");
let generate_password = document.getElementById("generate_password");

let currentMode = 'easy'; // Default mode

function get_number() {
    return Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
}

function getRandomLetter() {
    const randomCase = Math.random() < 0.5 ? 65 : 97; // 50% chance for uppercase or lowercase
    const randomCode = Math.floor(Math.random() * 26) + randomCase;
    return String.fromCharCode(randomCode);
}

function special_char() {
    const randomCase = Math.random();
    if (randomCase < 0.33) {
        return '#';
    } else if (randomCase < 0.66) {
        return '$';
    } else {
        return '@';
    }
}

function generatePassword() {
    let password = '';
    if (currentMode === 'easy') {
        for (let i = 0; i < 8; i++) {
            password += get_number();
        }
    } else if (currentMode === 'medium') {
        for (let i = 0; i < 10; i++) {
            let randa=Math.random()
            
            if (randa<0.5) {
                password += get_number();
            } else {
                password += getRandomLetter();
            }
        }
    } else if (currentMode === 'strong') {
        for (let i = 0; i < 15; i++) {
            let randa=Math.random()
    
            if (randa<0.33) {
                password += get_number();
            } else if (randa>0.33&&randa<0.66) {
                password += getRandomLetter();
            } else {
                password += special_char();
            }
        }
    }
    passwordishere.textContent = password;
}

easy.addEventListener("click", () => {
    currentMode = 'easy';
});

medium.addEventListener("click", () => {
    currentMode = 'medium';
});

strong.addEventListener("click", () => {
    currentMode = 'strong';
});

generate_password.addEventListener("click", generatePassword);
