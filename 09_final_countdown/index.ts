const input_time: number = parseInt(process.argv[2], 10);
const input_message: string = process.argv[3].toUpperCase();
let discounter, real_time: number;

if(input_time > 60) {
    real_time = input_time;
    discounter = Math.floor(input_time/60);
} else {
    real_time = input_time;
}

if(input_time <= 60) {
    while(real_time >= 0) {
        if(real_time > 10) {
            console.log(real_time);
        } else if (real_time > 0 && real_time <= 10){
            console.log(`${real_time}...`);
        } else {console.log(`${input_message} !`)
        }

        real_time--;
    }
}

if(input_time > 60) {
    while(discounter > 0) {
        real_time = real_time - discounter * 60;

        while(real_time >= 0) {
            console.log(`${discounter}'${real_time}`);
            real_time--;
        }

        discounter--;
        real_time = discounter * 60 + 59
    }

    real_time = 59;
    while(real_time >= 0) {
        if(real_time > 10) {
            console.log(real_time);
        } else if (real_time > 0 && real_time <= 10){
            console.log(`${real_time}...`);
        } else {console.log(`${input_message} !`)
        }

        real_time--;
    }
}
