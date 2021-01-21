const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crear, getListado, actualizar, borrar } = require('./todos/todos');

// console.log(argv);

const comando = argv._[0];

switch (comando) {
  case 'crear':
    // console.log('Crear por hacer');
    const nuevaTarea = crear(argv.descripcion);
    console.log(nuevaTarea);

    break;
  case 'listar':
    const listado = getListado();
    for (const tarea of listado) {
      console.log('========================================'.green);
      console.log(`${tarea.descripcion}`.green);
      console.log(`Estado: ${tarea.completado ? 'Completado' : 'Pendiente'}`.green);
      console.log('========================================'.green);
    }
    break;
  case 'actualizar':
    const actualizado = actualizar(argv.descripcion, argv.completado);
    if (actualizado) {
      console.log('Tarea actualizada')
    } else {
      console.log('Tarea no se actualizó, puede ser que la tarea no exista verifique...')
    }
    break;
  case 'borrar':
    const borrado = borrar(argv.descripcion);
    if (borrado) {
      console.log('Tarea borrada')
    } else {
      console.log('Tarea no existe')
    }
    break;

  default:
    console.log('Comando no es reconocido');
    break;
}