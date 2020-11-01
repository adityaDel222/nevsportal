window.onload = () => {
    if (!sessionStorage.getItem("userID")) {
        window.location.href = "./";
        return;
    }
    fetch('./data/elections.json')
        .then(res => res.json())
        .then(data => display_elections(data))
        .catch(err => console.log(err));
}

const display_elections = data => {
    let htmlString = ``;
    for (let i = 0;i < data.length; ++i) {
        htmlString += `
            <a href="./election.html?electionID=${ data[i].id }">
                <div class="election-card">
                    <p><span>Type:</span> <span>${ data[i].type }</span></p>
                    <p><span>State:</span> <span>${ data[i].state }</span></p>
                    <p><span>District:</span> <span>${ data[i].district }</span></p>
                    <p><span>Polling:</span> <span>${ data[i].poll_date }</span></p>
                    <p><span>Results:</span> <span>${ data[i].result_date }</span></p>
                </div>
            </a>
        `;
    }
    document.getElementsByClassName('election-cards')[0].innerHTML = htmlString;
    return;
}