let cantidadCamas = 0;
let noEsNumero = true;
let nombre = '';
let edad = 0;
let sumaEdad = 0;
let sala = '';
let cama = '';
let diagnostico = '';
let camaOcupada = 0;
let pacientes = [];

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
        document.write(`------------------------<br>
        Nombre: ${this.nombre}<br>
        Edad: ${this.edad} años<br>
        Sala: ${this.sala}<br>
        Cama: ${this.cama}<br>
        Diagnóstico: ${this.diagnostico}<br>`);        
        
        console.log(`Nombre: ${this.nombre}
        Edad: ${this.edad} años
        Sala: ${this.sala}
        Cama: ${this.cama}
        Diagnóstico: ${this.diagnostico}`);
    }
}

//Funciones.
const promedioEdad = (a,b) => a/b;
const sumaCama = (a) => a+1;
const restaCama = (a) => a-1;
const camasLibres = (a,b) => a-b;
const porcentajeCamaLibre = (a,b) => (b*100)/a;
function imprimirPacientes(){
    pacientes.forEach((paci) => console.log(`${paci.nombre} - ${paci.edad} años - ${paci.diagnostico}`));
    pacientes.forEach((paci) => paci.imprimir());
}


/// Ingreso de datos ///

// Verifica que se ingrese un numero
do {
    cantidadCamas = parseInt(prompt('Ingrese la cantidad de camas disponibles'));
    if(!isNaN(cantidadCamas)){
        noEsNumero = false;
    }
} while (noEsNumero);
let camaDisponible = cantidadCamas;
document.write(`La cantidad de camas disponibles es: ${camaDisponible} <br>`);
console.log(`La cantidad de camas disponibles es: ${camaDisponible}`);

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
    sala = prompt('Ingrese la sala: (ej: sala 1)');
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
    document.write(`Se ocupó ${camaOcupada} cama <br>`);
    console.log(`Se ocupó ${camaOcupada} cama`);
} else {
    document.write(`Se ocuparon ${camaOcupada} camas <br>`);
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


// Imprimo array
document.write(`<br><br>**<ins>Lista de internados</ins>**<br>`);
// for(const paciente of pacientes){
//     paciente.imprimir();
// }
imprimirPacientes();

// Suma las edades de los pacientes internados
const totalEdad = pacientes.reduce((acu, pac) => acu + pac.edad , 0);
console.log(`Suma de edades por funcion orden superior: ${totalEdad} años`);

// Ordena pacientes por edad de menor a mayor
pacientes.sort((a, b) => a.edad - b.edad);
console.log(pacientes);
// for (let paciente of pacientes){
//     paciente.imprimir();
// }
document.write(`<br><br>**<ins>Lista de internados ordenados por edad de menor a mayor</ins>**<br>`)
imprimirPacientes();

// FOREACH
// pacientes.forEach((paci) => console.log(`${paci.nombre} - ${paci.edad} años - ${paci.diagnostico}`));
// pacientes.forEach((paci) => paci.imprimir());