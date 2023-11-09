const cont_array:string[] = ["evil", "bad", "mean", "rotten", "cruel"];
let new_array :string[];
let word_to_display: string;

export default function printEnemies(array: string[]) {
    for (let i: number = 0; i < array.length; i++) {
        new_array = array[i].replace('_-', ' ').split(' ');
        for(let j:number = 0; j < cont_array.length; j++) {
            if(new_array[0].toLocaleLowerCase() === cont_array[j]) {
                word_to_display = `${new_array[0]}_${new_array[1]}`;
                console.log(word_to_display.toLowerCase());
            }
        }
    }
}
