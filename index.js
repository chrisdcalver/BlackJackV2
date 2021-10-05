
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')

let cardArr = []
let sum = 0
let isAlive = true
let blackJack = false

function randonNumber() {
    let randonCard = Math.floor(Math.random() * 12) + 1
    if (randonCard === 1) {
        return 11
    } else if (randonCard > 10) {
        return 10
    } else {
        return randonCard
    }
}

function renderGame() {
    sumEl.innerHTML = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cardArr.length; i++) {
        cardsEl.textContent += cardArr[i] + ', '
    }

    if (sum < 21) {
        messageEl.textContent = "Do you want another card?"
    } else if (sum === 21) {
        messageEl.textContent = "Well done, you got BlackJack"
        blackJack = true
    } else {
        messageEl.textContent = "Bad luck, you went bust!"
        isAlive = false
    }
}

function startGame() {
    isAlive = true
    let cardOne = randonNumber()
    let cardTwo = randonNumber()
    cardArr = [cardOne, cardTwo]
    sum = cardOne + cardTwo
    renderGame()
}

function newCard() {
    if (isAlive === true && blackJack === false) {
        let newRandomCard = randonNumber()
        cardArr.push(newRandomCard)
        sum += newRandomCard
        renderGame() 
    }
}

function resetGame() {
    sum = 0
    cardArr = []
    messageEl.textContent = "Do you want to play BlackJack?"
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
}