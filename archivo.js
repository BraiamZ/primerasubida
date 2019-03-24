//Yargs permite ingresar comandos desde la consola, se pueden definir condiciones, estructuras, etc

const opciones = {
    matematicas: {
        default: 0,
        alias: 'm'
    },
    ingles: {
        default: 0,
        alias: 'i'
    },
    programacion: {
        demand :  true,
        alias: 'p'
    }
}

const argv = require('yargs')
.command ('promedio','Calcular el promedio del estudiante ', opciones)
.argv

console.log(argv.matematicas);
console.log(argv);
console.log( ' El promedio es ' + (argv.m+argv.i+argv.p)/3);
//console.log('el nombre del estudiante es ' + argv.nombre);
