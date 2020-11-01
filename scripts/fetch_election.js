window.onload = () => {
    if (!sessionStorage.getItem("userID")) {
        window.location.href = "./";
        return;
    }
    const uID = parseInt(sessionStorage.getItem("userID"));
    const eID = parseInt(location.search.substring(1).split('=')[1]) - 1;
    fetch('./data/elections.json')
        .then(res => res.json())
        .then(eData => {
            fetch('./data/voters.json')
                .then(res => res.json())
                .then(uData => {
                    let isEligible = false;
                    if (uData[uID].state === eData[eID].state) {
                        if (eData[eID].district === 'All' || eData[eID].district === uData[uID].district) {
                            isEligible = true;
                        }
                    }
                    let htmlString = `
                        <p><span>Type:</span> <span>${ eData[eID].type }</span></p>
                        <p><span>State:</span> <span>${ eData[eID].state }</span></p>
                        <p><span>District:</span> <span>${ eData[eID].district }</span></p>
                        <p><span>Polling:</span> <span>${ eData[eID].poll_date }</span></p>
                        <p><span>Results:</span> <span>${ eData[eID].result_date }</span></p>
                        <img src="${ eData[eID].image }" />
                    `;
                    if (isEligible) {
                        htmlString += `
                            <p id="greenMsg">You are eligible to participate! <i class="fas fa-check-circle"></i></p>
                        `;
                    } else {
                        htmlString += `
                            <p id="redMsg">You are not eligible to participate <i class="fas fa-times-circle"></i></p>
                        `;
                    }
                    document.getElementsByClassName('election')[0].innerHTML = htmlString;
                })
                .catch(uErr => console.log(uErr));
        })
        .catch(eErr => console.log(eErr));
}