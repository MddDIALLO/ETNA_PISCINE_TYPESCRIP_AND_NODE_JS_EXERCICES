interface Question {
    question: string,
    answer: boolean,
};

function testFaith(questions: Question[]) {
    let rls: any = require('readline-sync');

    for (const item of questions) {
        const userAnswer = rls.keyInYN(item.question);

        if(userAnswer === item.answer) {
            console.log('Correct answer.');
        } else {
            console.log('The answer is wrong!');
        }
    }
}

export {Question, testFaith};
