console.log('Hi');
let array = [];

//Literal Object
let student = {
    name: 'Feliz',
    age:25,
    grade:[3.9, 3.8, 4.0],
    address:{
        country:'USA',
        state: 'Geogia', 
        city: 'Atlanta'
    }
}
let student1 = {
    name: 'Mario',
    age:20,
    grade:[3.9, 3.8, 3.0],
    address:{
        country:'MEX',
        state: 'Baja California', 
        city: 'Tijuana'
    }
}
let student2 = {
    name: 'Rafael',
    age:20,
    grade:[3.9, 3.8, 3.5],
    address:{
        country:'MEX',
        state: 'Baja California', 
        city: 'Tijuana'
    }
}
console.log(student, student1, student2);
document.write(`<div class='student'>
                <p">${student.name}</p>
                <p>${student.age}</p>
                <p>${student.address.country}</p>
                </div>`);
document.write(`<div class='student'>
                <p">${student1.name}</p>
                <p>${student1.age}</p>
                <p>${student1.address.country}</p>
                </div>`);
document.write(`<div class='student'>
                <p">${student2.name}</p>
                <p>${student2.age}</p>
                <p>${student2.address.country}</p>
                </div>`);
