let guessed = [];
result = fetch('6burti.txt')
result.then(function(response) {
    return response.text();
}).then(function (dati) {
    console.log(dati);
    masivs6 = dati.split('\n');
    console.log(masivs6)
    const viensVardsnoMasiva = masivs6[Math.floor(Math.random()*masivs6.length)]
    console.log(viensVardsnoMasiva)
    document.getElementById("viensVardsnoMasiva").innerHTML = viensVardsnoMasiva
    const sadalitsPaBurtiem = viensVardsnoMasiva.split("")
    const sajauktsVards = sadalitsPaBurtiem.sort((a, b) => 0.5 - Math.random())
    let wordStatus = null;
    let pogasHTML = sajauktsVards.map(letter =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

    document.getElementById('keyboard').innerHTML = pogasHTML;

    const putra = sajauktsVards.join('')

    document.getElementById("putra").innerHTML = putra

    let answer = viensVardsnoMasiva
    console.log(answer)
});

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    console.log(guessed)
    document.getElementById('wordSpotlight').innerHTML = guessed.join('');
}

sakumaLaiks();
panemtTekstu();
irNavVienadi();
beiguLaiks();

guessedWord();
handleGuess();

uzblieztPogas();