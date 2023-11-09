import Recipe from "./Recipe";

import * as fs from 'fs';

export default function displayRecipe(path: string) {
    let recipeData: Recipe;
    const stringData: string = fs.readFileSync(path, 'utf-8');
    recipeData = JSON.parse(stringData);
    console.log(`==== ${recipeData.name} ====`);
    for (const item of recipeData.ingredients) {
        console.log(`- ${item}`);
    }
}
