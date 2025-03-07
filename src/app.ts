import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);

// const [tsbun, app, ...args] = process.argv;

// console.log(args);

// console.log(yarg);
// console.log(yarg.b);

// funcion anonima asincrona autoinvocada
(async () => {
    await main();
    // console.log('Fin de programa');
})();


async function main() {
    
    console.log({ yarg });
    
    const { b: base, l: limit, s: show, n: name, d: destination } = yarg;
    
    ServerApp.run({ base: base, limit: limit, show: show, name, destination });
    
}