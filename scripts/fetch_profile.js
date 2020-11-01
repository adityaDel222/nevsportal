window.onload = () => {
    if (!sessionStorage.getItem("userID")) {
        window.location.href = "./";
        return;
    }
    const userID = sessionStorage.getItem("userID");
    fetch('./data/voters.json')
        .then(res => res.json())
        .then(data => display_profile(data, userID))
        .catch(err => console.log(err));
}

const display_profile = (data, i) => {
    let htmlString = `
        <div class="profile-photo">
    `;
    if (data[i].profile === null) {
        htmlString += `<img src="./images/nopic.png" />`;
    } else {
        htmlString += `<img src=${ data[i].profile } />`;
    }
    htmlString += `
            <h3>${ data[i].name }</h3>
        </div>
        <div class="profile-info">
            <p><span>Nationality:</span> <span>${ data[i].nationality }</span></p>
            <p><span>Date of birth:</span> <span>${ data[i].date_of_birth }</span></p>
            <p><span>Age (in years):</span> <span>${ data[i].age }</span></p>
            <p><span>Country:</span> <span>${ data[i].country }</span></p>
            <p><span>State:</span> <span>${ data[i].state }</span></p>
            <p><span>District:</span> <span>${ data[i].district }</span></p>
        </div>
    `;
    document.getElementsByClassName('profile')[0].innerHTML = htmlString;
    return;
}