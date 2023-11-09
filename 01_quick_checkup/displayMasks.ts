import getMasks from './resource';

export default function displayMasks() {
    const strToDisplay: string = getMasks().join().replace(/,/g, ", ");
    console.log(strToDisplay);
}
