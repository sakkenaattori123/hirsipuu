const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "kerava",
    "helsinki",
    "vantaa",
    "vaasa",
    "kittilä",
    "joensuu",
    "utsjoki",
    "tornio",
    "kemi",
    "kalajoki",
    "kilpisjärvi",
    "kuusamo"
]

let randomizedWord = ''
let maskedWord = ''
let quesscount = 0
let yritykset = 0

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    yritykset = 0
    console.log(randomizedWord)
    output.innerHTML = maskedWord
}

const win = () => {
    alert(`You have quessed right, the word is ${randomizedWord}. It took ${yritykset} tries to get it right.`)
}

const replaceFoundChars = (quess) => {
    for (let i = 0;i<randomizedWord.length;i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === quess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,quess)
            newString = newString.join('')
            maskedWord= newString
        }}
    }
    output.innerHTML = maskedWord

newGame()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const quess = input.value
        if (quess.toLowerCase() === randomizedWord.toLocaleLowerCase()) {
            win()
        } else if (quess.length === 1) {
            replaceFoundChars(quess)
          if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
            win()
          }
        } else {
            alert(`You quessed wrong!`)
        }
        input.value=''
    }
})