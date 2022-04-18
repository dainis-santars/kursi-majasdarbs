let guessed = [];
let ilgums = 0;
let vards = document.querySelector('.vards');
let atbilde = '';
let viensVardsnoMasiva = '';
let answer = '';
let kluda = 0;
let punkti = 0;
let punktiUzTabulu = 0;
const API = "https://kursi-burtuspele.dainisantars.repl.co";
let punktiRekords = document.querySelector('.punkti');
let vardsRekords = document.querySelector('.vards');


/* Vārdu spēles ielāde */
function main(){
result = fetch('6burti.txt')
result.then(function(response) {
    return response.text();
}).then(function (dati) {
    console.log(dati);
    masivs6 = dati.split('\n');
    console.log(masivs6)
    const viensVardsnoMasiva = masivs6[Math.floor(Math.random()*masivs6.length)]
    console.log(viensVardsnoMasiva)
    // document.getElementById("viensVardsnoMasiva").innerHTML = viensVardsnoMasiva
    const sadalitsPaBurtiem = viensVardsnoMasiva.split("")
    const sajauktsVards = sadalitsPaBurtiem.sort((a, b) => 0.5 - Math.random())
    let wordStatus = null;
    let pogasHTML = sajauktsVards.map(letter =>
        `
      <button
        class="btn btn-outline-primary btn-lg"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

    document.getElementById('keyboard').innerHTML = pogasHTML;

    const putra = sajauktsVards.join('  ')

    document.getElementById("putra").innerHTML = 'Sajauktais vārds: ' + putra

    let answer = viensVardsnoMasiva;
    localStorage.setItem('answer', viensVardsnoMasiva);
    localStorage.setItem("sakums", Date.now());
});
}

/* Pogas un lietotāja ievade */
// function guessedWord() {
//     wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
// }
function handleGuess(chosenLetter) {
    guessed.push(chosenLetter);
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    console.log(guessed)
    document.getElementById('wordSpotlight').innerHTML = guessed.join('');
    atbilde = guessed.join('');
    console.log(atbilde)
}

/* Laika apstrāde */
function sakumaLaiks() {
    localStorage.setItem("sakums", Date.now());
}
function beiguLaiks() {
    localStorage.setItem("beigas", Date.now());
}
function cikIlgi() {
    let x = Number(localStorage.getItem("sakums"));
    console.log(x)
    let y = Number(localStorage.getItem("beigas"));
    console.log(y)
    let ilgums = Math.round((y - x)/1000)
    document.getElementById("ilgums").innerHTML = ilgums
    punkti = 30 - ilgums
    punktiUzTabulu = punktiUzTabulu + punkti
}


/* Pārbaude, vai vārdi sakrita */
function atbildesApstrade() {
    answer = localStorage.getItem('answer')
    console.log("1",atbilde,"2",answer)
    if (atbilde === answer) {
        document.getElementById("uzModal").style.visibility = "visible";
        document.getElementById("punkti").innerHTML = punkti;
        main();
        document.getElementById('wordSpotlight').innerHTML = "&nbsp;";
        guessed = [];
        punkti = 0;
        // ilgums = 0;
        document.getElementById("ilgums").innerHTML = "<div class=\"spinner-grow spinner-grow-sm text-primary\" role=\"status\">"
        handleGuess();
    } else {
        kluda = kluda + 1
        console.log(kluda)
        document.getElementById('wordSpotlight').innerHTML = '<i class=\"bi bi-hand-thumbs-down\"></i>&nbsp;Nepareizi';
    }
}

function turpinajums() {
    let punkti1 = document.getElementById("punkti").innerHTML = punkti

    punktiUzTabulu = punktiUzTabulu + punkti1
    document.getElementById("punktiUzTabulu").innerHTML = punktiUzTabulu
    console.log("zis",punkti1,punktiUzTabulu)

}

function rekorduTabula()
{
    console.log("ww",punktiUzTabulu);
    rekordaIeraksts.innerHTML = rekordaIeraksts.innerHTML + '<br />' + punktiUzTabulu.value;
    fetch(API + '/sutit/' + vardsRekords.value + '/' + punktiUzTabulu)
}

let topaIeraksti = document.querySelector('.tops');

async function ieladetRekorduTabulu()
{
    let datiNoServera = await fetch(API + '/tops');
    let dati = await datiNoServera.json();
    // console.log(await dati[0]['laiks'])
    topaIeraksti.innerHTML = '';
    i = 0;
    while ( i < await dati.length ) {
        //console.log(i);
        // topaIeraksti.innerHTML = topaIeraksti.innerHTML + dati[i]['vards'] + ': ' + dati[i]['punkti'] + ' plkst. ' + dati[i]['laiks'] + '<br />';
        topaIeraksti.innerHTML = topaIeraksti.innerHTML + '<li>' + dati[i]['vards'] + ': ' + dati[i]['punkti'] + '<small class="text-muted"> kaut kad ' + dati[i]['laiks'] + '</small></li>';
        i = i + 1;
    }
}
setInterval( ieladetRekorduTabulu, 10000 )

main();
sakumaLaiks();
panemtTekstu();
irNavVienadi();
beiguLaiks();
cikIlgi();
guessedWord();
handleGuess();

uzblieztPogas();
atbildesApstrade();
turpinajums();
rekorduTabula();
ieladetRekorduTabulu();