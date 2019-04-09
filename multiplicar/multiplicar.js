const fs = require('fs');
let data = '';




let listarTabla = (base1, limite = 10) => {

    for (let i = 1; i <= limite; i++) {

        console.log(`${base1} * ${i} = ${base1 * i}`);
    }
    console.log(`${base1}`);

}

let crearArchivo = (base) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`el valor introduciodo = ${base} ingrasdo no es un numero`);
            return;

        }

        for (let i = 1; i <= 10; i++) {

            data += (`${base} * ${i} = ${base * i}\n`);
        }

        //le paso por parametro la ubucaion del archivo a guardar el nombre del archivo y un callback de error
        fs.writeFile(`tablas/tabla del ${base}.txt`, data, (err) => {

            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}