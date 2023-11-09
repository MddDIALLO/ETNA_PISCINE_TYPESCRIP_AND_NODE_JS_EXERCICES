import * as fs from 'fs';

const stringData: string = fs.readFileSync('./lullaby.json', 'utf-8');
const jsonData: {name: string, notes: string[]} = JSON.parse(stringData);

export default function playLullaby(): boolean {
    let nameStr: string = jsonData.name;
    if(nameStr === "Goron Lullaby") {
        let lullabySong: string = jsonData.notes.join().replace(/,/g, "");
        console.log('Playing the Goron Lullaby...');
        console.log(lullabySong);

        return true;
    } else {
        console.log('This is not the Goron Lullaby.');

        return false;
    }
}
