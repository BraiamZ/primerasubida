let estudiantes = {
    nombre: 'juan',
    edad: 25,
    notas: {
        matematicas: 3,
        ingles: 4,
        programacion: 5
    }
};

let obtenerPromedio=(nota_uno,nota_dos,nota_tres)=>
    (nota_uno+nota_dos+nota_tres)/3;

//console.log(obtenerPromedio(estudiantes.notas.matematicas,estudiantes.notas.ingles,estudiantes.notas.programacion));

module.exports = {
    estudiantes,
    obtenerPromedio
};