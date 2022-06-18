let cantidadCamas = 0;
let noEsNumero = true;
let paciente = '';
let edad = 0;
let sumaEdad = 0;
let sala = '';
let cama = '';
let camaOcupada = 0;

//Funciones.
const promedioEdad = (a,b) => a/b;
const sumaCama = (a) => a+1;
const restaCama = (a) => a-1;
const camasLibres = (a,b) => a-b;
const porcentajeCamaLibre = (a,b) => (b*100)/a;

//Verifica que se ingrese un numero
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
    paciente = prompt('Ingrese el nombre del paciente: (Escriba Fin para terminar)').toUpperCase();
    if(paciente=="FIN"){
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
    document.write(`El paciente ${paciente}, de ${edad} años de edad, se internó en ${sala} cama ${cama} <br>`);
    console.log(`El paciente ${paciente}, de ${edad} años de edad, se internó en ${sala} cama ${cama}`);
    camaOcupada = sumaCama(camaOcupada);
    camaDisponible = restaCama(camaDisponible);
    console.log(`Suma edad: ${sumaEdad}`);
    if(camaDisponible==0){
        alert('No hay mas camas libres');
        break;
    }
} while (paciente!='FIN');

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
console.log(`La edad promedio de los internados es de ${edadPromedio} años.`);