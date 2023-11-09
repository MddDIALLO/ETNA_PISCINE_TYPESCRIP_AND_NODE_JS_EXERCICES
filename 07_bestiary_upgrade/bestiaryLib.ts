import { Monster } from "./Monster";

function displayAll(bestiary: Monster[]) {
    for (const item of bestiary) {
        console.log(item);
    }
}

function displayByName(bestiary: Monster[], name: string) {
    const newBestiary: Monster[] = bestiary.filter((item) => item.name === name);

    if(newBestiary) {
        for (const elment of newBestiary) {
            console.log(elment);
            return true;
        }
    } else {
        return false;
    }
}

function add(bestiary: Monster[], monster: Monster) {
    bestiary.push(monster)
}

function removeByName(bestiary: Monster[], name: string) {
    const newBestiary: Monster[] = bestiary.filter((item) => item.name === name);

    if(newBestiary) {
        for (const element of newBestiary) {
            const elementIndex: number = bestiary.indexOf(element);
            bestiary.splice(elementIndex, 1);
        }
       return true;
    } else {
        return false;
    }
}

export default { displayAll, displayByName, add, removeByName};
