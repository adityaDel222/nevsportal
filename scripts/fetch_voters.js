window.onload = () => {
    if (!sessionStorage.getItem("userID")) {
        window.location.href = "./";
        return;
    }
    fetch('./data/voters.json')
        .then(res => res.json())
        .then(data => display_profile(data))
        .catch(err => console.log(err));
}

const display_profile = data => {
    let htmlString = ``;
    for (let i = 0;i < data.length; ++i) {
        htmlString += `
            <div class="voter-item">
                <span>${ i + 1 }</span>
                <span><strong>${ data[i].name }</strong>, ${ data[i].state }</span>
            </div>
        `;
    }
    document.getElementsByClassName('voter-list')[0].innerHTML = htmlString;
    return;
}