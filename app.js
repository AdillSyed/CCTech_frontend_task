const containerEl = document.getElementById("infoContainer");

function createAndAppendDetails(data) {
    const {name, location, email, picture} = data;
    const {title, first, last} = name;
    const {street, city, state, country, postcode} = location;
    
    let detailsContianer = document.createElement("div");
    detailsContianer.classList.add('details-card');
    containerEl.appendChild(detailsContianer);
    
    let imgEl = document.createElement("img");
    imgEl.classList.add('profile-pic');
    imgEl.src= picture.large;
    detailsContianer.appendChild(imgEl);
    
    let verticalLine = document.createElement("vl");
    verticalLine.classList.add("vl");
    detailsContianer.appendChild(verticalLine);
    
    let dataContainer = document.createElement("div");
    detailsContianer.appendChild(dataContainer);
    
    let nameEl = document.createElement("p");
    nameEl.classList.add("text");
    nameEl.textContent = `${title}. ${first} ${last}`;
    dataContainer.appendChild(nameEl);
    
    let emailEl = document.createElement("p");
    emailEl.classList.add("text");
    emailEl.textContent = email;
    dataContainer.appendChild(emailEl);
    
    let addressEl = document.createElement("p");
    addressEl.classList.add('text');
    addressEl.textContent = `${street.number}, ${street.name}, ${city}, ${state}, ${country}, ${postcode}`;
    dataContainer.appendChild(addressEl);
}







let url = 'https://randomuser.me/api/?results=10';

let options = {
    method: 'GET',
};

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        for (let data of jsonData.results) {
            createAndAppendDetails(data);
            console.log(data);
        }
        
    });
    