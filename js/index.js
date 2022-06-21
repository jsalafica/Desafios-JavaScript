//let cantidadCamas = 0;
let noEsNumero = true;
let nombre = '';
let edad = 0;
let sumaEdad = 0;
let sala = '';
let cama = '';
let diagnostico = '';
let camaOcupada = 0;
let pacientes = [];

//Funciones.
const promedioEdad = (a,b) => a/b;
const sumaCama = (a) => a+1;
const restaCama = (a) => a-1;
const camasLibres = (a,b) => a-b;
const porcentajeCamaLibre = (a,b) => (b*100)/a;

// Lee JSON e imprime en consola
const lista = document.querySelector("#listado");
fetch('/js/pacientes.json')
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(pac => {
            // console.log(pac.nombre);
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${pac.nombre}</h4>
                <p class="text-success">${pac.edad}</p>
                <p>Diagnóstico: ${pac.diagnostico}</p>
                <hr/>
            `
            lista.append(li)
        });
    })

// Lee del local Storage
let cantidadCamas = localStorage.getItem('camas');
if(cantidadCamas==null){
    //Verifica que se ingrese un numero
    do {
        cantidadCamas = parseInt(prompt('Ingrese la cantidad de camas disponibles'));
        if(!isNaN(cantidadCamas)){
            noEsNumero = false;
            localStorage.setItem('camas', cantidadCamas);
        }
    } while (noEsNumero);
}

let camaDisponible = cantidadCamas;
document.write(`La cantidad de camas disponibles es: ${camaDisponible}<br>`);
console.log(`La cantidad de camas disponibles es: ${camaDisponible}`);

//Clase paciente
class Paciente {
    constructor (nombre,edad,sala,cama,diagnostico){
        this.nombre = nombre,
        this.edad = edad,
        this.sala = sala,
        this.cama = cama,
        this.diagnostico = diagnostico
    }
    imprimir(){
        // document.write(`------------------------<br>`);
        // document.write(`Nombre: ${this.nombre}<br>`);
        // document.write(`Edad: ${this.edad} años<br>`);
        // document.write(`Sala: ${this.sala}<br>`);
        // document.write(`Cama: ${this.cama}<br>`);
        // document.write(`Diagnóstico: ${this.diagnostico}<br>`);

        let tarjeta = document.getElementById('cardPaciente');
        let card = document.createElement('div');
        card.className = "card m-2";
        card.innerHTML = `<div class="card-header">
                            Paciente
                            </div>
                            <div class="card-body">
                                <div class="card-title">
                                    Nombre: ${this.nombre}
                                </div>
                                <div class="card-text">
                                    Edad: ${this.edad} años<br>
                                    Sala: ${this.sala}<br>
                                    Cama: ${this.cama}<br>
                                    Diagnóstico: ${this.diagnostico}
                                </div>
                            </div>`;
        tarjeta.appendChild(card);
        
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`Sala: ${this.sala}`);
        console.log(`Cama: ${this.cama}`);
        console.log(`Diagnóstico: ${this.diagnostico}`);
    }
}

//Bucle de carga de pacientes
do {
    nombre = prompt('Ingrese el nombre del paciente: (Escriba Fin para terminar)').toUpperCase();
    if(nombre=="FIN"){
        break;
    }

    //Verifica que se ingrese un numero
    noEsNumero = true;
    do {
        edad = parseInt(prompt('Ingrese la edad (en años)'));
        if(!isNaN(edad)){
            noEsNumero = false;
        }
    } while (noEsNumero);
    sumaEdad+=edad;
    sala = prompt('Ingrese la sala: (ej: 1, UTI, etc)');
    cama = prompt('Ingrese el número de la cama');
    diagnostico = prompt('Ingrese el diagnóstico');
    document.write(`El paciente ${nombre}, de ${edad} años de edad, se internó en sala: ${sala} cama ${cama} con el diagnóstico de ${diagnostico}.<br>`);
    console.log(`El paciente ${nombre}, de ${edad} años de edad, se internó en sala: ${sala} cama ${cama} con el diagnostico de ${diagnostico}.`);
    camaOcupada = sumaCama(camaOcupada);
    camaDisponible = restaCama(camaDisponible);
    console.log(`Suma edad: ${sumaEdad}`);

    //Agrego a array
    pacientes.push(new Paciente(nombre,edad,sala,cama,diagnostico));

    if(camaDisponible==0){
        alert('No hay mas camas libres');
        break;
    }
} while (nombre!='FIN');

//Imprime resultados en pantalla y consola
if (camaOcupada==1){
    document.write(`Se ocupó ${camaOcupada} cama<br>`);
    console.log(`Se ocupó ${camaOcupada} cama`);
} else {
    document.write(`Se ocuparon ${camaOcupada} camas<br>`);
    console.log(`Se ocuparon ${camaOcupada} camas`);
}
if (camaDisponible==0) {
    document.write('No hay camas libres');
    console.log('No hay camas libres');
} else {
    document.write(`La cantidad de camas libres es: ${camaDisponible}`);
    console.log(`La cantidad de camas libres es: ${camaDisponible}`);
}

let porcentajeCama = porcentajeCamaLibre(cantidadCamas,camaOcupada);
let camasLibresFunc = camasLibres(cantidadCamas,camaOcupada);
let edadPromedio = promedioEdad(sumaEdad,camaOcupada);

//Imprime resultados de funciones
document.write(`<br>La cantidad de camas libres calculada por función es: ${camasLibresFunc}`);
document.write(`<br>La ocupación de camas es del: ${porcentajeCama.toFixed(2)}%`);
document.write(`<br>El porcentaje de camas libres es del: ${100-porcentajeCama.toFixed(2)}%`);
document.write(`<br>La edad promedio de los internados es de ${edadPromedio} años.`);
console.log(`La cantidad de camas libres calculada por función es: ${camasLibresFunc}`);
console.log(`La ocupación de camas es del: ${porcentajeCama.toFixed(2)}%`);
console.log(`El porcentaje de camas libres es del: ${100-porcentajeCama.toFixed(2)}%`);
console.log(`La edad promedio de los internados es de ${edadPromedio.toFixed(2)} años.`);

//Imprimo array
// document.write(`<br><br>**<ins>Lista de internados</ins>**<br>`);
for(const paciente of pacientes){
    paciente.imprimir();
}