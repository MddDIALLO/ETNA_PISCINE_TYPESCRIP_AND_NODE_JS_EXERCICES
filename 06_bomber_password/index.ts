const number_of_animals: number = parseInt(process.argv[2],10);
const animal_family: string = process.argv[3];
let i: number;

if(animal_family === "dogs") {
  if(number_of_animals > 1) {
    const password: string = " bark".repeat(number_of_animals -1);
    console.log(`bark${password}!`)
  } else if(number_of_animals === 1) {
    console.log('bark!');
  }
} else if(animal_family === "cats") {
  if(number_of_animals > 1) {
    const password: string = " meow".repeat(number_of_animals -1);
    console.log(`meow${password}!`)
  } else if(number_of_animals === 1) {
    console.log('meow!');
  }
} else if(animal_family === "cows") {
  if(number_of_animals > 1) {
    const password: string = " moo".repeat(number_of_animals -1);
    console.log(`moo${password}!`)
  } else if(number_of_animals === 1) {
    console.log('moo!');
  }
}