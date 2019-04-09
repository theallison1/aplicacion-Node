const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar ', {
        Base: {
            demand: true,
            alias: 'b'
        },
        Limite: {
            alias: 'l',
            default: 10
        }
    }).command('Crear ', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        Limite: {
            alias: 'l',
            default: 10
        }

    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.Base, argv.Limite);
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then((archivo) => {
                console.log(`Archivo creado ${archivo}`);
            }).catch((err) => { console.log(err); });
        break;
    default:
        console.log('comando no reconocido');

}



console.log('base', argv.base);
// let parametro = argv[2];
// let base = parametro.split('=')[1];