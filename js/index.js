let cantidadCamas = parseInt(prompt('Ingrese la cantidad de camas: '));
document.write(`La cantidad de camas es: ${cantidadCamas} <br>`);
let paciente = '';
let cama = 0;
do {
    paciente = prompt('Ingrese el nombre del paciente: (Escriba ESC para salir)');
    if(paciente=="ESC"){
        break;
    }
    cama = parseInt(prompt('Ingrese el numero de la cama: '));
    document.write(`El paciente ${paciente} se internó en la cama ${cama} <br>`);
    cantidadCamas--;
    if(cantidadCamas==0){
        alert('No hay mas camas libres');
        break;
    }
} while (paciente!='ESC');