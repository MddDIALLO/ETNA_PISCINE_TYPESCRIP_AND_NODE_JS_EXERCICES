import Recipe from "./Recipe";

import * as fs from 'fs';

export default function searchRecipe(name: string, path: string) {
    let recipeData: any[];
    let recipeElement: Recipe;
    let isFound: boolean = false;
    const stringData: string = fs.readFileSync(path, 'utf-8');

    recipeData = JSON.parse(stringData);

    for (const item of recipeData) {
        recipeElement = item;

        if(recipeElement.name === name) {
            console.log(`==== ${recipeElement.name} ====`);
            for (const item of recipeElement.ingredients) {
                console.log(`- ${item}`);
            }

            isFound = true;
        }
    }

    if(!isFound) {
        console.log('No match.');
    }
}
