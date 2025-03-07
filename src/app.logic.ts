import { writeFileSync, mkdirSync } from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

// console.log(yarg);

// const message = 'Hola Mono!';

// console.log(message);

const { b: base, l: limit, s: show } = yarg;

let outputMessage = '';
// const base = 5;
// const limit = 10;
// const show = true;
const header = `
=======================================
             tabla del ${base}               
=======================================
\n`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = header + outputMessage;

if (show) console.log(outputMessage);


const dir = './outputs';

// Se espera para crear el directorio y cuando ya esta listo continua
mkdirSync(dir, { recursive: true });

writeFileSync(`${dir}/tabla-${base}.txt`, outputMessage);
console.log('File created!!!');