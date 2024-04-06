let firstName, lastName, email, phoneNumber, password, confirmPassword;
const createAccountBtn = document.querySelector('button');
const errorMessage = document.createElement('p');
errorMessage.innerHTML = "* Passwords do not match";

createAccountBtn.addEventListener('click', () => {
    password = document.querySelector('#password').value;
    confirmPassword = document.querySelector('#confirm-password').value;

    if (password === confirmPassword) {
        firstName = document.querySelector('#first-name').value;
        lastName = document.querySelector('#last-name').value;
        email = document.querySelector('#email').value;
        phoneNumber = document.querySelector('#phone-number').value;
        if (document.querySelector('.row-3 div:first-child').lastElementChild.innerHTML === errorMessage.innerHTML){
            document.querySelector('.row-3 div:first-child').removeChild(errorMessage);
        }
    } else {
        errorMessage.style.cssText = "color: red";
        document.querySelector('.row-3 div:first-child').appendChild(errorMessage);
    }
});