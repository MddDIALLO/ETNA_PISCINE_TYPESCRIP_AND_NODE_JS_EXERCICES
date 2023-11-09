export default function openDoor(): boolean {
    let rls: any = require('readline-sync');
    const userName: string = rls.question('Who are you?\n');

    if(userName === 'Link') {
        console.log('Welcome Hero.');
        return true;
    } else {
        console.log('You are not welcome here. Leave.');
        return false;
    }
}
