interface Card {
    id: string;
    description: string;
    img: string;
}

const uniqueCards: Card[] = [
    {img: "01.png", description: "card 1", id: "card1"},
    {img: "02.png", description: "card 2", id: "card2"},
    {img: "03.png", description: "card 3", id: "card3"},
    {img: "04.png", description: "card 4", id: "card4"},
    {img: "05.png", description: "card 5", id: "card5"},
    {img: "06.png", description: "card 6", id: "card6"},
    {img: "07.png", description: "card 7", id: "card7"},
    {img: "08.png", description: "card 8", id: "card8"}
]

const cardsOriginais: Card[] = []

uniqueCards.forEach((card, i) => {
    cardsOriginais.push({...card })
    cardsOriginais.push({...card })
})

const cards : Card[] = []

export {cards }