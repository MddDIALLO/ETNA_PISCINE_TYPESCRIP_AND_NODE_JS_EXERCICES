const fairy_size: number = parseInt(process.argv[2], 10);

const missing_tray_airies: number = Math.ceil((348 -fairy_size) / 3);

if (missing_tray_airies < 10) {
    console.log(`It's not too bad yet, it shouldn't take too much time to heal her.`);
} else if (missing_tray_airies >= 10 && missing_tray_airies < 40) {
    console.log('Whoever did this to her was clearly playing some mischievous prank!');
} else if (missing_tray_airies >= 40 && missing_tray_airies < 100) {
    console.log('She has been greatly damaged. We must save her as soon as possible!');
} else {
    console.log(`What happened to her!? It's just awful!`);
}
