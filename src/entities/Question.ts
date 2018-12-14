class Question {

    constructor() {

    }
    public getQuestion(index: number): { question: string, answer: string } {
        let quiz = [
            {
                question: "klik de provincie aan waar Zwolle ligt",
                answer: "Overijsel"
            },
            {
                question: "klik de provincie aan waar Den Bosch ligt",
                answer: "Noord-Brabant"
            },
            {
                question: "klik de provincie aan waar Amsterdam ligt",
                answer: "Noord-Holland"
            },
            {
                question: "klik de provincie aan waar Groningen ligt",
                answer: "Groningen"
            },
        ]
        return { question: quiz[index].question, answer: quiz[index].answer }








    }
}