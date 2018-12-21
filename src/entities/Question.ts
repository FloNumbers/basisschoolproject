class Question {

    constructor() {

    }
    public getQuestion(index: number): { introToQuestion: string, introToQuestion2: string, introToQuestion3: string, introToQuestion4: string, introToQuestion5:string, question: string, answer: string } {
        let quiz = [
            {
                introToQuestion: "Anne Frank is een Joods meisje.",
                introToQuestion2: " Ze is bekend geworden omdat ze een dagboek heeft geschreven over ",
                introToQuestion3: "de Tweede Wereld oorlog, toen ze ondergedoken was. Ze is gestorven aan uitputting ",
                introToQuestion4: "in het concentratiekamp Bergen-Belsen. Haar dagboek is na de oorlog",
                introToQuestion5:" gepubliceerd en is 1 van de meest gelezen boeken ter wereld.",
                question: " Waar staat het huis waar Anne Frank was ondergedoken?",
                answer: "Noord-Holland"
            },
            {
                introToQuestion: "De hunebedden zijn de bekendste archeologische monumenten in Nederland.",
                introToQuestion2: "Deze grafmonumenten werden gebouwd door de trechterbekercultuur.",
                introToQuestion3: "De hunebedden zijn gemaakt tussen circa 3.400 en 3.050 voor Christus.",
                introToQuestion4: "Hunebedden zijn volgens de gangbare theorie resten van prehistorische grafkamers.",
                introToQuestion5:"",
                question: "Waar staan de bekendste hunebedden in Nederland?",
                answer: "Drenthe"
            },
            {
                introToQuestion: "De VOC staat voor de Verenigde Oostindische Compagnie en is opgericht in 1602.",
                introToQuestion2: "De VOC was het eerste bedrijf met vrij verhandelbare aandelen.",
                introToQuestion3: "De VOC wordt vaak genoemd als het",
                introToQuestion4: "eerste bedrijf dat in meerdere landen vestigingen had",
                introToQuestion5: "en richtte een handelsnetwerk op tussen de diverse handelsposten in de Aziatische regio.",
                question: "Waar is de VOC opgericht?",
                answer: "Noord-Holland"
            }, 
            {
                introToQuestion: "De Levalloistechniek hield in dat gewerkt werd met een voorbereide kernsteen ",
                introToQuestion2: "waarvan de zijnen waren afgeslagen. Met gerichte slagen werden",
                introToQuestion3: "er schilfers afgeslagen die als werktuig werden gebruikt.",
                introToQuestion4: "Het resultaat was een vlak stuk steen met aan alle zijden sherpe randen.",
                introToQuestion5:"",
                question: "Waar zijn de eerste stenen werktuigen gevonden?",
                answer: "Utrecht"
            },
            {
                introToQuestion: "De kerk werd vanaf 1254 gebouwd als voorzetting van de romaanse kathedraal",
                introToQuestion2: "van het rooms-katholieke bisdom en was gewijd aan Sint-Maarten.",
                introToQuestion3: "De Domtoren  is 112.32 meter hoog en is hiermee de hoogste kerktoren van Nederland.",
                introToQuestion4: "De naam ‘Dom’ komt van het Latijnse woord ‘Domus Dei’,",
                introToQuestion5:" dat betekent ‘Huis van god’ zo werd de kerk vroeger genoemd.",
                question: "Waar staat de Domtoren?",
                answer: "Utrecht"
            },
            {
                introToQuestion: "De Deltawerken zijn een verdedigingssysteem ter bescherming ",
                introToQuestion2: "tegen hoogwater van de zee. Er is decennia lang gebouwd aan de Deltawerken.",
                introToQuestion3: "Het Deltaplan was voor de Tweede Wereldoorlog bedacht,",
                introToQuestion4: "Na de Watersnoodramp van 1953 besloot",
                introToQuestion5:" de Nederlandse regering om dit plan sneller uit te voeren.",
                question: "In welke provincie staan de meeste Deltawerken? ",
                answer: "Zeeland"
            },
            {
                introToQuestion: "Willem van Oranje, ook wel de ‘Vader des vaderlands’,",
                introToQuestion2: "is geboren op 24 april 1533 op sol Dillenburg in Duitsland.",
                introToQuestion3: "Toen hij 11 jaar oud was, erfde hij het prinsdom Oranje in Frankrijk.",
                introToQuestion4: "De koninklijke familie heeft nu nog steeds Oranje-Nassau.",
                introToQuestion5:"Op 10 juli 1584 is de prins vermoord door Balthasar Gerards.",
                question: "Waar is Willem van Oranje vermoord?",
                answer: "Zuid-Holland"
            },
        ]
        return { introToQuestion: quiz[index].introToQuestion, introToQuestion2: quiz[index].introToQuestion2, introToQuestion3: quiz[index].introToQuestion3, introToQuestion4: quiz[index].introToQuestion4, introToQuestion5: quiz[index].introToQuestion5, question: quiz[index].question, answer: quiz[index].answer, }








    }

    public getHint(index: number): { hint: string, questionNumber: number} {
        let hints = [
            {
                hint: "De hoofdstad van het land",
                questionNumber: 1
            },
            {
                hint: "Noord-oost",
                questionNumber: 2
            },
            {
                hint: "Aan zee (links)",
                questionNumber: 3
            },
            {
                hint: "In het midden van het land",
                questionNumber: 4
            },
            {
                hint: "Je zit in deze provincie op school",
                questionNumber: 6
            },
            {
                hint: "West",
                questionNumber: 7
            }
        ]
        return { hint: hints[index].hint, questionNumber: hints[index].questionNumber }
    }
}