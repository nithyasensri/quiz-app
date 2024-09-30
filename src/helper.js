

export const shuffleAnswer = (question) => {

  
    const unshuffleAnswer = [...question.correctAnswer,
        ...question.incorrectAnswers]



    return unshuffleAnswer.map((value) => ({ sort: Math.random(), obj: value }))
        .sort((a, b) => a.sort - b.sort)
        .map((value) => value.obj)

}