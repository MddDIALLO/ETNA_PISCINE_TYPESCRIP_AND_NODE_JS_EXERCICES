const tune: string = process.argv[2].toLocaleLowerCase();
const correct_tune: string = "rad";
let t, ct, test, test_adds: number;

test_adds = 0;

for(ct = 0; ct < correct_tune.length; ct++) {
  test = 0;
  for(t = 0; t < tune.length; t++) {
    if(correct_tune[ct] === tune[t]) {
      test++;
    }
  }

  if(test % 2 === 0 && test > 0) {
    test_adds += 2;
  }
}

if(test_adds % 3 === 0 && test_adds > 0) {
  console.log('Playing the Song of Time...');
} else {
  console.log(`That doesn't feel right.`);
}
