export default function printArray(array: string[]) {
    console.log("List of destinations:");

    for (let i: number = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
