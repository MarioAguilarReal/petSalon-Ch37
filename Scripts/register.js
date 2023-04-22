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
function Pets(name, age, gender, breed, service) {
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

let inputName = document.querySelector('#name');
let inputAge = document.querySelector('#age');
let inputBreed = document.querySelector('#breed');
let inputGender = document.querySelector('#gender');
let inputService = document.querySelector('#services');

function isValid(aPet) {
    //we assume that the pet is valid
    let valid = true;
    if (aPet.name == '') {
        valid = false;
        inputName.classList.add('error');
    }
    return valid;
}
function register(e) {
    //console.log('Registering')
    //get the values from the inputs

    //create the new pet
    let newPet = new Pets(inputName.value, inputAge.value, inputBreed.value, inputGender.value, inputService.value);
    if (isValid(newPet)) {
        //push
        petSalon.pets.push(newPet);
        addAlert();
        displayPetCards();
        displayTable();
        //addOnePetNum();
        //addAlert();
    } else {
        alert('Please fill out the name');
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

function addOnePetNum() {
    let text = document.createElement('p');
    text.classList.add('text-num');
    text.textContent = `${petSalon.pets.length}`;
    //console.log(text)
    //text.innerHTML(`<p>${petSalon.pets.length}</p>`);
    counter.appendChild(text);
}

function addAlert() {
    console.log(alertDiv)
    alertDiv.innerHTML = `<div class="alert">
    Congratulations, A Pet Was Added Successfully!
    </div>`
    alertDiv.classList.add('green-bar');
}

function init() {
    let camilo = new Pets('Camilo', 12, 'Male', 'German Shepherd', 'Grooming');
    let rufi = new Pets('Rufi', 12, 'Male', 'Belgian Shepherd', 'Nail triming');
    let lobo = new Pets('Lobo', 12, 'Male', 'Labrador', 'Shower');
    petSalon.pets.push(camilo, rufi, lobo);
    displayPetCards();
    displayTable();
    //addOnePetNum();
}
window.onload = init;