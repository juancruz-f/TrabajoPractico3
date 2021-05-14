const moduloTareas = require('./tareas');//requerimos nuestro modulo tareas
const process = require('process');//Usamos el modulo nativo process

const accion = process.argv[2];//argv es una funcionalidad del modulo process que nos permite acceder a los elementos que escribimos en nuestra terminal, en este caso el comando será nuestro tercer elemento ya que tiene la posición 2.

switch (accion) {//Con switch ahorramos codigo y evitamos usar if y else.
    case 'agregar'://si escribimos agregar en la posicion 2 de la terminal se ejecutará este codigo.
        let titulo = process.argv[3];
        if(!titulo){//si no escribimos un titulo por consola nos devolverá el string "Debes escribir un título"
            console.log('Debes escribir un título');
            break;
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        break;
    case 'listar'://en cambio, al escribir listar en la posición 2 de la terminal, se ejecutará este codigo y nos listará las tareas.
        moduloTareas.listarTareas()
        break
    case 'filtrar':
        moduloTareas.filtrarTareas(process.argv[3])
        break
    default://El default sirve para que haya una respuesta por defecto, en este caso si no ponemos ninguna accion en la posicion 2 del argv, nos retorna por consola ese string.
        console.log("Debes ingresar una acción");
        break;
}