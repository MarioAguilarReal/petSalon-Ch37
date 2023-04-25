const tableBody = document.getElementById('table-body');
const dropdown = document.getElementById('cardsDiv');


function putBg(service) {
    // console.log(service)
    let color;
    if (service == 'Grooming') {
        color = '#ec92b8';

    } else if (service == 'Vaccines') {
        color = '#b900d6';

    } else if (service == 'Nail triming') {
        color = '#9ad600';

    } else if (service == 'Shower') {
        color = '#0b76a6';

    }
    return color;
}

function displayPetCards() {
    let card = '';
    const DIV = document.getElementById('pets');
    //travel the pets array
    for (let i = 0; i < petSalon.pets.length; i++) {
        let color = "";
        let pet = petSalon.pets[i];
        color = putBg(pet.service);
        //console.log(pet)
        //create template
        card += `
        <div class="pet" id="${pet.id}" style="background-color:${color}">
            <h5>Name: ${pet.name}</h5>
            <hr>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p></p>
        </div>
        `;
    }
    //console.log(card);
    //create the template
    DIV.innerHTML = card;
    //insert the template into the html
}

function displayTable() {
    let tableInfo = '';
    for (let i = 0; i < petSalon.pets.length; i++) {
        let color = '';
        let pet = petSalon.pets[i];
        color = putBg(pet.service);
        tableInfo += `
        <tr id="${pet.id + 'table'}" style="background-color:${color}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td onclick="deletePet(${pet.id})" id="button-delete">Delete</td>
        </tr>
            `;
    }
    tableBody.innerHTML = tableInfo;
}

function toggleDropdown() {
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}