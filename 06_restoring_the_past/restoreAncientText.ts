import * as fs from 'fs';
import axios from 'axios';

export default async function restoreAncientText(ancientTxtUrl: string, vocabularyUrl: string, newTxtUrl: string): Promise<void> {
  try {
    const corruptedText = fs.readFileSync(ancientTxtUrl, 'utf8');
    const { data: dictionaryWords } = await axios.get(vocabularyUrl);
    const dictionary = dictionaryWords.split('\n');
    const restoreWord = (word: string) => {
      const cleanedWord = word.replace(/\*/g, '');
      const foundWord = dictionary.find(dictWord => dictWord === cleanedWord);
      return foundWord || word;
    };

    const repairedText = corruptedText.replace(/\w+/g, restoreWord);

    fs.writeFileSync(newTxtUrl, repairedText);

    console.log('Text restoration complete.');
  } catch (error) {
    console.error('Error:', error);
  }
}
