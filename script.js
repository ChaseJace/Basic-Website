const openSign = document.getElementById('openSign');
const openLog = document.getElementById('openLog');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

openSign.addEventListener('click', () => {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});

openLog.addEventListener('click', () => {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

// Open Signup Modal
document.getElementById('openSign').addEventListener('click', function () {
    document.getElementById('signupModal').style.display = 'flex';
});

// Open Login Modal
document.getElementById('openLog').addEventListener('click', function () {
    document.getElementById('loginModal').style.display = 'flex';
});

// Close Modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close Modals when clicking outside the form
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal('signupModal');
        closeModal('loginModal');
    }
});

// Sign up 
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

// Get form values
const username = document.querySelector('#signupForm input[name="username"]').value;
const email = document.querySelector('#signupForm input[name="email"]').value;
const phone = document.querySelector('#signupForm input[name="phone"]').value;
const password = document.querySelector('#signupForm input[name="password"]').value;

const user = {
    username: username,
    email: email,
    phone: phone,
    password: password
};

const signedUpAccounts = JSON.parse(localStorage.getItem('signedUpAccounts')) || [];

signedUpAccounts.push(user);

localStorage.setItem('signedUpAccounts', JSON.stringify(signedUpAccounts));

window.location.href = 'websitein.html';
});

// signout button 
document.getElementById("buttonOut").addEventListener("click", function (event) {
window.location.href = "website.html";
});

// Login 
document.getElementById('loginForm').addEventListener('submit', function (event) {

// Get form values
const email = document.querySelector('#loginForm input[name="username"]').value;
const password = document.querySelector('#loginForm input[name="password"]').value;

const signedUpAccounts = JSON.parse(localStorage.getItem('signedUpAccounts')) || [];

const loggedInUser = signedUpAccounts.find(user => user.email === email && user.password === password);

if (loggedInUser) {
    window.location.href = 'websitein.html';
} else {
    window.alert('Invalid email or password. Please try again.');
    }
});


