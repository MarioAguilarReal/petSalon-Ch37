//literal Object
//Literal Object: name, address{}, tel, hours{}, pets[]
const divPets = document.querySelector('#pets');
const alertDiv = document.querySelector('#alertDiv')
const counter = document.querySelector('#counter')

let petSalon = {
    name: 'The Fashion pet',
    tel: '666-888-999',
    hours: {
        open: '9:00 am',
        minute: '5:00 pm',
        second: '',
    },
    addres: {
        city: 'Tijuana',
        street: 'Ave University 262',
        zip: '22334'
    },
    pets: [],
}

//Create the pet name, age, gender, breed, service
function Pets(id, name, age, gender, breed, service) {
    this.id = id,
        this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}
//Create the three pets using the constructor

//challenge: cretate three pets using obj lit anonymous with the following properties
//name, age, gender, service

//Code form

const inputName = document.querySelector('#name');
const inputAge = document.querySelector('#age');
const inputBreed = document.querySelector('#breed');
const inputGender = document.querySelector('#gender');
const inputService = document.querySelector('#services');


function isValid(aPet) {
    //we assume that the pet is valid
    let valid = true;
    console.log(aPet.gender)
    console.log(aPet.breed)
    if (aPet.name == '') {
        valid = false;
        inputName.classList.add('error');
        setTimeout(() => {
            inputName.classList.remove('error');
        }, 3000)
    }
    if (aPet.age == '') {
        valid = false;
        inputAge.classList.add('error');
        setTimeout(() => {
            inputAge.classList.remove('error');
        }, 3000)
    }
    if (aPet.gender === '') {
        valid = false;
        inputGender.classList.add('error');
        console.log(inputGender);
        setTimeout(() => {
            inputGender.classList.remove('error');
        }, 3000)
    }
    if (aPet.breed == '') {
        valid = false;
        inputBreed.classList.add('error');
        console.log(inputBreed)
        setTimeout(() => {
            inputBreed.classList.remove('error');
        }, 3000)
    }
    if (aPet.service == '') {
        valid = false;
        inputService.classList.add('error');
        setTimeout(() => {
            inputService.classList.remove('error');
        }, 3000)
    }
    return valid;
}
function register(e) {
    //console.log('Registering')
    //get the values from the inputs

    //create the new pet
    console.log(petSalon.pets.length)
    let newPet = new Pets(petSalon.pets.length, inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    if (isValid(newPet)) {
        //push
        petSalon.pets.push(newPet);
        addAlertCorrect();
        displayPetCards();
        displayTable();
        //addOnePetNum();
        //addAlert();
    } else {
        addAlertError();
        return 0;
    }
    //push the newPet into array

    clearInputs();
}
function clearInputs() {
    inputName.value = '';
    inputAge.value = '';
    inputBreed.value = '';
    inputGender.value = '';
    inputService.value = '';
}
function alertDelete() {

}
function deletePet(id) {
    // console.log(id)
    let deleteIndex;
    for (let i = 0; i < petSalon.pets.length; i++) {//traveling the array
        let pet = petSalon.pets[i];
        //console.log(pet.id)
        if (id == pet.id) {//compare the id with pets id
            deleteIndex = i;//Getting the position of the pet in the array
            console.log(deleteIndex)
        }
    }
    document.getElementById(id).remove;//remove from html
    petSalon.pets.splice(deleteIndex, 1); //remove from the array
    displayTable()
    displayPetCards()
}
function searchPet() {
    let searchString = document.getElementById("txtSearch").value;
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        let card = document.getElementById(pet.id);
        let lineTable = document.getElementById(pet.id + 'table')
        //console.log(card)
        if (searchString.toLowerCase() != '' && (pet.name.toLowerCase().includes(searchString.toLowerCase())) || pet.service.toLowerCase().includes(searchString.toLowerCase())) {
            //console.log((' I found it!'));
            //card.classList.add('highlight');
            card.style.display = "";
            lineTable.style.display = "";
        } else {
            // card.classList.remove('highlight');
            card.style.display = "none";
            lineTable.style.display = "none";
        }
    }
}
function addOnePetNum() {
    let text = document.createElement('p');
    text.classList.add('text-num');
    text.textContent = `${petSalon.pets.length}`;
    //console.log(text)
    //text.innerHTML(`<p>${petSalon.pets.length}</p>`);
    counter.appendChild(text);
}
function addAlertCorrect() {
    console.log(alertDiv)

    const alertaExito = document.createElement('P');
    alertaExito.classList.add('green-bar');
    alertaExito.textContent = 'Congratulations, A Pet Was Added Successfully!';
    alertDiv.appendChild(alertaExito);

    setTimeout(() => {
        alertaExito.remove();
    }, 3000)
}
function addAlertError() {
    //console.log(alertDiv)

    const alertaExito = document.createElement('P');
    alertaExito.classList.add('red-bar');
    alertaExito.textContent = 'LLena todos los campos';
    alertDiv.appendChild(alertaExito);

    setTimeout(() => {
        alertaExito.remove();
    }, 3000)
}
function init() {
    let camilo = new Pets(petSalon.pets.length, 'Camilo', 12, 'Male', 'German Shepherd', 'Grooming');
    petSalon.pets.push(camilo);
    let rufi = new Pets(petSalon.pets.length, 'Rufi', 12, 'Male', 'Belgian Shepherd', 'Nail triming');
    petSalon.pets.push(rufi);
    let lobo = new Pets(petSalon.pets.length, 'Lobo', 12, 'Male', 'Labrador', 'Shower');
    petSalon.pets.push(lobo);
    displayPetCards();
    displayTable();
    //addOnePetNum();
}
window.onload = init;