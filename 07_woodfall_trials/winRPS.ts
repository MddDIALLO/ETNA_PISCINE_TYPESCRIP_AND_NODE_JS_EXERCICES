export default function winRPS(enemyMoves: string[]): string[] {
    let wining_list: string[] = [];

    for (const item of enemyMoves) {
        if(item === "rock") {
            wining_list.push("paper")
        } else if(item === "paper") {
            wining_list.push("scissors")
        } else if(item === "scissors") {
            wining_list.push("rock")
        }
    }

    return wining_list;
}
