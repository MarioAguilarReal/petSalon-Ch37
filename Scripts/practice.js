console.log('Practice')
let array=[];

//object constructor
function Student(n, a, g){
    this.name = n;
    this.age = a;
    this.gender = g;
}

//Creating a new obj
let student = new Student('Felix', 26, 'Male');
let student1 = new Student('Mario', 23, 'Male');
let student2 = new Student('Rafael', 23, 'Male');

array.push(student, student1, student2);


