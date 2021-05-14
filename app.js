const moduloTareas = require('./tareas');
const process = require('process');

const accion = process.argv[2];

switch (accion) {
    case 'agregar':
        let titulo = process.argv[3];
        if(!titulo){
            console.log('Debes escribir un título');
            break;
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        break;
    case 'listar':
        moduloTareas.listarTareas()
        break
    case 'filtrar':
        moduloTareas.filtrarTareas(process.argv[3])
        break
    default:
        console.log("Debes ingresar una acción");
        break;
}