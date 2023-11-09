export default function winRPS(enemyMoves: any[]): string[] {
    let wining_list: string[] = [];

    for (const item of enemyMoves) {
        for(let i:number = 0; i < item.count; i++) {
            if(item.move === "rock") {
                wining_list.push("paper")
            } else if(item.move === "paper") {
                wining_list.push("scissors")
            } else if(item.move === "scissors") {
                wining_list.push("rock")
            }
        }
    }

    return wining_list;
}
