window.onload = () => {
    if (!sessionStorage.getItem("userID")) {
        window.location.href = "./";
        return;
    }
    const userID = sessionStorage.getItem("userID");
    fetch('./data/voters.json')
        .then(res => res.json())
        .then(data => {
            document.getElementById('welcome').innerHTML = data[userID].name.split(" ")[0];
        })
        .catch(err => console.log(err));
}