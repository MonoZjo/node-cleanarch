import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


// patron adaptador
export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base',
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit',
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'show multiplication table',
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name',
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: './outputs',
        describe: 'File destination',
    })
    .check( (argv, options) => {

        if (argv.b < 1) throw 'Error: base values must be greater than zero';

        return true;
    })
    .parseSync()


