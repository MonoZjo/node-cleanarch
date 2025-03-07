import { writeFileSync, mkdirSync } from 'fs';


export interface SaveFileUseCase {

    execute: (options: SaveFileOptions) => boolean;

}

export interface SaveFileOptions {

    fileContent: string;
    fileDestination?: string;
    fileName?: string;

}


export class SaveFile implements SaveFileUseCase {

    constructor(

        // repository: StorageRepository

    ) { }

    execute({
        fileContent,
        fileDestination = 'output',
        fileName = 'table'
    }: SaveFileOptions): booelan {

        try {
            // Se espera para crear el directorio y cuando ya esta listo continua
            mkdirSync(fileDestination, { recursive: true });

            writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);

            // console.log('File created!!!');

            return true;

        } catch (error) {

            console.error(error);

            return false;
        }

    }






}