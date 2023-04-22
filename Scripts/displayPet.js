const tableBody = document.getElementById('table-body');


function putBg(service) {
    console.log(service)
    let color;
    if (service == 'Grooming') {
        color = '#d34a23';

    } else if (service == 'Vaccines') {
        color = '#ab1333';

    } else if (service == 'Nail triming') {
        color = '#8cc5fa';

    } else if (service == 'Shower') {
        color = '#dfa133';

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
        console.log(pet)
        //create template
        card += `
        <div class="pet" style="background-color:${color}">
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
        <tr style="background-color:${color}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
        </tr>
            `;
    }
    tableBody.innerHTML = tableInfo;
}