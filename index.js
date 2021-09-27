function handleBtn(type) {
    if (type == "login") {
        document.getElementById("signup-box").style.display = "none";
        document.getElementById("login-box").style.display = "block";
    }
    else {
        document.getElementById("signup-box").style.display = "block";
        document.getElementById("login-box").style.display = "none";
    }
}

function handleForm(type) {
    event.preventDefault()
    document.getElementById("login-err-msg").innerText = ""
    document.getElementById("signup-err-msg").innerText = ""
    
    if (type == "signup") {
        let username = document.getElementById("username").value
        let mobile = document.getElementById("mobile").value
        let email = document.getElementById("email").value
        let pwd = document.getElementById("create-pwd").value
        let cnfPwd = document.getElementById("confirm-pwd").value

        if (pwd !== cnfPwd) {
            document.getElementById("signup-err-msg").style.color = "red"
            document.getElementById("err-msg").innerText = "Passwords doesn't match"
            return
        }

        if (localStorage.getItem(username)) {
            document.getElementById("signup-err-msg").style.color = "red"
            document.getElementById("signup-err-msg").innerText = "Username already exists"
            return
        }
        let signupObj = {
            mobile: mobile,
            email: email,
            pwd: pwd
        }

        localStorage.setItem(username, JSON.stringify(signupObj))
        document.getElementById("signup-err-msg").style.color = "green"
        document.getElementById("signup-err-msg").innerText = "Signed up successfully."

    }
    else {
        let username = document.getElementById("login-username").value
        let password = document.getElementById("password").value

        if (!localStorage.getItem(username)) {
            document.getElementById("login-err-msg").style.color = "red"
            document.getElementById("login-err-msg").innerText = "Username doesn't exist"
            return
        }
        let loginObj = JSON.parse(localStorage.getItem(username))
        if (password !== loginObj.pwd) {
            document.getElementById("login-err-msg").style.color = "red"
            document.getElementById("login-err-msg").innerText = "Password is incorrect"
            return
        }
        document.getElementById("login-err-msg").style.color = "green"
        document.getElementById("login-err-msg").innerText = "Login successful."
    }
}