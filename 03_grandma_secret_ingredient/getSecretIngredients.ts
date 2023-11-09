import axios, { AxiosResponse } from "axios";

interface SecretIngredients {
    name: string
}

export default function getSecretIngredients(path: string) {
    let secretIngredient: SecretIngredients;
    let recipeData: any[];

     axios
      .get(path)
      .then((response: AxiosResponse) => {
        recipeData = response.data;

        for (const recipeItem of recipeData) {
          secretIngredient = recipeItem;
          console.log("-", secretIngredient.name)
        }
      });
}