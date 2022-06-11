let cantidadCamas = 0;
let noEsNumero = true;
do {
    cantidadCamas = prompt('Ingrese la cantidad de camas disponibles');
    if(!isNaN(cantidadCamas)){
        noEsNumero = false;
    }
} while (noEsNumero);
document.write(`La cantidad de camas disponibles es: ${cantidadCamas} <br>`);
console.log(`La cantidad de camas disponibles es: ${cantidadCamas}`);
let paciente = '';
let sala = '';
let cama = '';
let camaOcupada = 0;
do {
    paciente = prompt('Ingrese el nombre del paciente: (Escriba Fin para terminar)').toUpperCase();
    if(paciente=="FIN"){
        break;
    }
    sala = prompt('Ingrese la sala: (ej: sala 1)');
    cama = prompt('Ingrese el número de la cama');
    document.write(`El paciente ${paciente} se internó en ${sala} cama ${cama} <br>`);
    console.log(`El paciente ${paciente} se internó en ${sala} cama ${cama}`);
    camaOcupada++;
    cantidadCamas--;
    if(cantidadCamas==0){
        alert('No hay mas camas libres');
        break;
    }
} while (paciente!='FIN');
if (camaOcupada==1){
    document.write(`Se ocupó ${camaOcupada} cama <br>`);
    console.log(`Se ocupó ${camaOcupada} cama`);
} else {
    document.write(`Se ocuparon ${camaOcupada} camas <br>`);
    console.log(`Se ocuparon ${camaOcupada} camas`);
}
if (cantidadCamas==0) {
    document.write('No hay camas libres');
    console.log('No hay camas libres');
} else {
    document.write(`La cantidad de camas libres es: ${cantidadCamas}`);
    console.log(`La cantidad de camas libres es: ${cantidadCamas}`);
}