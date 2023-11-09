export default function createObject(name: string, description: string, hp: number): { name: string, description: string, hp: number } {
    const return_object:  { name: string, description: string, hp: number }  = {
        name: name,
        description: description,
        hp: hp
    }; 

    return return_object;
}
