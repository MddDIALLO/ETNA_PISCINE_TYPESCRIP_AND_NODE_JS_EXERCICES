export default function verifyArray(array: any[]): boolean {
    let checkType: boolean = true;
    let checkSort: boolean = true;
    let typeValue: string = '';
    let checkSize: boolean = false;

    for(let i: number = 1; i < array.length; i++) {
        if(typeof array[i] != typeof array[i - 1]) {
            checkType = false;
        }

        if(array[i] < array[i - 1]) {
            checkSort = false;
        }

        typeValue = typeof array[i];
    }

    if(array.length >= 5 && array.length <= 10) {
        checkSize = true;
    }

    if(checkType && checkSize) {
        if(typeValue === 'string' || typeValue === 'number') {
            if(checkSort) {
                return true;
            }
        }
    }
      
    return false;
}
