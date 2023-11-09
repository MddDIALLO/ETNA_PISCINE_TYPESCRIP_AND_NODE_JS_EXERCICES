const d_city_to_moon: number = Math.floor(parseInt(process.argv[2],10)/3600);
let discount: number;

discount = Math.floor(d_city_to_moon/3600);

for(discount = d_city_to_moon; discount >= 0; discount--) {
    console.log(discount);
}
