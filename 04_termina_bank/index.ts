const deposit_amount: number = parseInt(process.argv[2], 10);
const number_of_days: number = parseInt(process.argv[3], 10);
const rate: number = 4/100;
const interests_amount: number = (deposit_amount * (1 + rate) ** number_of_days) - deposit_amount;
const display_interests: string = interests_amount.toFixed(2);

console.log(`You will earn ${display_interests} rupees after ${number_of_days} day(s).`);
