const homework = document.querySelector('#homework');

let scholarList = [
    {
        name: 'Mario',
        id: '192992',
        career: 'Software Engineer'
    },
    {
        name: 'Pedro',
        id: '312321',
        career: 'Mechanical Engineer'
    },
    {
        name: 'Jose',
        id: '424432',
        career: 'Civil Engineer'
    },
    {
        name: 'Juan',
        id: '983141',
        career: 'Aerospace Engineer'
    }
]
function printInfo(){
    document.write(`<h1>Alumnos</h1>`);
    document.write(`<hr>`)
    document.write(`<h3>Nombre: ${scholarList[0].name}</h3>
                    <h3>ID: ${scholarList[0].id}</h3>
                    <h3>Carrer: ${scholarList[0].career}</h3>`);
    document.write(`<hr>`)
    document.write(`<h3>Nombre: ${scholarList[1].name}</h3>
                    <h3>ID: ${scholarList[1].id}</h3>
                    <h3>Carrer: ${scholarList[1].career}</h3>`);
    document.write(`<hr>`)
    document.write(`<h3>Nombre: ${scholarList[2].name}</h3>
                    <h3>ID: ${scholarList[2].id}</h3>
                    <h3>Carrer: ${scholarList[2].career}</h3>`);
    document.write(`<hr>`)
    document.write(`<h3>Nombre: ${scholarList[3].name}</h3>
                    <h3>ID: ${scholarList[3].id}</h3>
                    <h3>Carrer: ${scholarList[3].career}</h3>`);

}

function init(){
    printInfo();
}
window.onload=init;

