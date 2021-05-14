const fs = require('fs');//requerimos el modulo filesystem
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));//leemos y parseamos el json para poder utilizarlo con javascript
module.exports = {//exportamos todo este modulo con sus funciones para poder utilizarlo en nuestro app

    agregarTarea: function (titulo, estado = 'pendiente') {//agrega una tarea nueva con push, lo guarda en el json con guardarJson que stringuifica ese codigo, y nos lista las tareas con las nuevas que hayamos agregado. Push es el metodo de array que usamos para agregarle elementos a ese array de tareas.
        let nuevaTarea = {
            titulo,
            estado
        }
        tareas.push(nuevaTarea);
        this.guardarJson(tareas);
        this.listarTareas();
    },
    listarTareas: function () {//forEach recorre el array y por cada elemento nos devuelve el console.log
        tareas.forEach(tarea => {
            console.log(tarea);
        });
    },
    filtrarTareas: function (filtro) {//Filter crea un array nuevo con los elementos que cumplen la condición de esa función. En este caso nos devuelve solo las tareas que incluyan la palabra filtro que sea el estado de esa tarea.
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
        return console.log(tareasFiltradas)
    }
    ,
    guardarJson: function (tareas) {//Aca usamos writefilesync para guardar el json modificado, stringify nos permite pasar a formato json.
        fs.writeFileSync('./db/tareas.json', JSON.stringify(tareas), 'utf-8')
    }
}