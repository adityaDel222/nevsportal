window.onload = () => {
    if (sessionStorage.getItem("userID").length > 0) {
        window.location.href = "./dashboard.html";
    }
}
const checkLogin = () => {
    const input_username = document.getElementById("username").value;
    const input_password = document.getElementById("password").value;
    let invalidPasswordFlag = 0;
    fetch('./data/voters.json')
        .then(res => res.json())
        .then(data => {
            for (let i = 0;i < data.length; ++i) {
                if (input_username === data[i].username) {
                    if (input_password === data[i].password) {
                        invalidPasswordFlag = 1;
                        sessionStorage.setItem("userID", data[i].id - 1);
                        window.location.href = "./dashboard.html";
                    } else {
                        invalidPasswordFlag = 2;
                        alert("Invalid password");
                    }
                }
            }
            if (invalidPasswordFlag === 0) {
                alert("The username does not match any account");
            }
        })
        .catch(err => console.log(err));
    return;
}