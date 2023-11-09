import * as fs from 'fs';
import axios from 'axios';

interface Recipe {
  name: string;
  ingredients: string[];
}

interface SecretIngredients {
  name: string;
}

export default async function getGrandmaRecipes(recipeBookPath: string, grandmaIngredientsPath: string): Promise<Recipe[]> {
  let recipeData: Recipe[];
  const stringData: string = fs.readFileSync(recipeBookPath, 'utf-8');
  recipeData = JSON.parse(stringData);

  const response = await axios.get<SecretIngredients[]>(grandmaIngredientsPath);
  const remoteData: SecretIngredients[] = response.data;

  const returnedRecipe: Recipe[] = [];

  for (const secretIngredient of remoteData) {
    for (const recipeItem of recipeData) {
      if (recipeItem.ingredients.includes(secretIngredient.name)) {
        returnedRecipe.push(recipeItem);
      }
    }
  }

  return returnedRecipe;
}
