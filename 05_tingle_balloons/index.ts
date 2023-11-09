const input_name: string = process.argv[2];
let name_element: string[] = [];
let element: string;

input_name.split(" ").map((word: string) => {
    element = word[0].toUpperCase();
    name_element.push(element);
});
console.log(`${name_element[0]}.${name_element[1]}`);
