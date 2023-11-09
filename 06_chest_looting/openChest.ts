interface Item {
    name: string,
    description: string,
}
  
interface Chest {
type: string,
content: Item[]
}

function openChest(inventory: Item[], chest: Chest) {
    for (const itemElement of inventory) {
        if(itemElement.name === 'Golden Key') {
            if(chest.type.toLowerCase() === 'golden') {
                for (const chestContent of chest.content) {
                    if(chestContent.name === 'Golden Key' || chestContent.name === 'Silver Key' || chestContent.name === 'Bronze Key') {
                        inventory.push(chestContent);
                        console.log('Tadadadaaa!');
                        console.log(`You have found a ${chestContent.name} Key.`);
                    return 0;
                    } else {
                        console.log(`You have found a ${chestContent.name} Key.`);
                        console.log(`"${chestContent.description}"`);
                    return 0;
                    }
                }
            } else {
                console.log('No correct key was found.');
                return 1;
            } 
        } else if(itemElement.name === 'Silver Key') {
            if(chest.type.toLowerCase() === 'silver') {
                for (const chestContent of chest.content) {
                    if(chestContent.name === 'Golden Key' || chestContent.name === 'Silver Key' || chestContent.name === 'Bronze Key') {
                        inventory.push(chestContent);
                        console.log('Tadadadaaa!');
                        console.log(`You have found a ${chestContent.name} Key.`);
                    return 0;
                    } else {
                        console.log(`You have found a ${chestContent.name} Key.`);
                        console.log(`"${chestContent.description}"`);
                    return 0;
                    }
                }
            } else {
                console.log('No correct key was found.');
                return 1;
            } 
        } else if(itemElement.name === 'Bronze Key') {
            if(chest.type.toLowerCase() === 'bronze') {
                for (const chestContent of chest.content) {
                    if(chestContent.name === 'Golden Key' || chestContent.name === 'Silver Key' || chestContent.name === 'Bronze Key') {
                        inventory.push(chestContent);
                        console.log('Tadadadaaa!');
                        console.log(`You have found a ${chestContent.name} Key.`);
                    return 0;
                    } else {
                        console.log(`You have found a ${chestContent.name} Key.`);
                        console.log(`"${chestContent.description}"`);
                    return 0;
                    }
                }
            } else {
                console.log('No correct key was found.');
                return 1;
            } 
        }
    }

}

export { Item, Chest, openChest };