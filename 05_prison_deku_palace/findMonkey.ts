export default function findMonkey(prison: any) {
    let cell_number: number = 0;
    let guarded: boolean;

    prison.forEach(element => {
        cell_number = element.number;
        guarded = element.is_guarded;
        element.prisoners.forEach(item => {
            if(item.species.toLowerCase() === "Monkey".toLowerCase()) {
                if(guarded) {
                    console.log(`The monkey is in the cell number ${cell_number}. The cell is guarded.`);
                } else {
                    console.log(`The monkey is in the cell number ${cell_number}. The cell is not guarded.`);
                }
                
            }
        });
    });
}
