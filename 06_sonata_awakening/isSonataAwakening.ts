export default function isSonataAwakening(sheet: string, sonata: string[]): boolean {
    let new_str: string = sonata.join().replace(/,/g, "");

    if(sheet.toLowerCase() === new_str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
