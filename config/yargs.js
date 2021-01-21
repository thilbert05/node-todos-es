const descripcion = {
  alias: 'd',
  demand: true,
  desc: 'Descripcion de la tarea por hacer',
};

const completado = {
  alias: 'c',
  default: true,
  desc: 'Define la tarea como compleatada o no',
}; 

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', {
    descripcion
  })
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion,
    completado,
  })
  .command('borrar', 'Borra la tarea con la descripcion seleccionada', {
    descripcion
  })
  .help().argv;



module.exports = {
  argv
}
