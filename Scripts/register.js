//literal Object
//Literal Object: name, address{}, tel, hours{}, pets[]
const divPets = document.querySelector('#pets');

let petSalon = {
    name:'The Fashion pet',
    tel: '666-888-999',
    hours:{
        open: '9:00 am',
        minute: '5:00 pm',
        second:'',
    },
    addres: {
        city:'Tijuana',
        street: 'Ave University 262', 
        zip: '22334'
    },
    pets:[
        {
            name: 'Camilo',
            age: '2 years',
            gender: 'Male',
            service: 'Grooming'
        },
        {
            name: 'Ruffy',
            age: '1 years',
            gender: 'Male',
            service: 'Vaccines'
        },
        {
            name: 'Lobo',
            age: '3 years',
            gender: 'Male',
            service: 'Nails cut'
        }
    ]
}

function displayPetNames(){
    for(let i=0; i<petSalon.pets.length; i++){
        divPets.innerHTML+=`<div class='student'>
                <p">${petSalon.pets[i].name}</p>
                <p>${petSalon.pets[i].age}</p>
                <p>${petSalon.pets[i].gender}</p>
                <p>${petSalon.pets[i].service}</p>
                </div>`;
    }
}
function init(){
    displayPetNames();
}

window.onload=init;