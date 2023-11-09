const my_name: string = process.argv[2];

if (my_name === "Link") {
    console.log("Welcome, Hero.");
} else if (my_name === "Zelda") {
    console.log("Greetings, Princess.");
} else {
    console.log("You can't be here, get away!");
}
