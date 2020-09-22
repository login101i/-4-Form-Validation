const form = document.querySelector('#login-form')

const username = document.querySelector('#username')
const password = document.querySelector('#password')

const password_test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

console.log(username, password)

username.addEventListener('input', validate)
password.addEventListener('input', validate)

function validate(e) {
    let target = e.target

    if (target.name == "username") {
        console.log("hihih")
    }
    if (target.name == "password") {
        if (password_test.test(target.value)) {
            target.classList.add('valid')
            target.classList.remove('invalid')
        } else {
            target.classList.add('invalid')
            target.classList.remove('valid')
        }
    }
    if (target.name == "username") {
        if (target.value.length > 4) {
            target.classList.add('valid')
            target.classList.remove('invalid')
        } else {
            target.classList.add('invalid')
            target.classList.remove('valid')
        }
    }
}




form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("it works")
    if (password.value == "" || username.value == "") {
        alert("Proszę wypełnić poprawnie forularz")
    }

})