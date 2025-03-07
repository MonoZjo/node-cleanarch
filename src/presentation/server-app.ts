import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    name: string;
    destination: string;
}

export class ServerApp {

    static run({ base, limit, show, name, destination}: RunOptions) {
        console.log('Server is running...');

        const table = new CreateTable().execute({ base, limit });
        const saved = new SaveFile().execute( {fileContent: table, fileDestination: destination, fileName: `${name}`} );

        if (show) console.log(table);

        (saved) ?  console.log('File created!!!') : console.log('File was not created');
    }
}