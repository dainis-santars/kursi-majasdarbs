/*
ToDo:
No sākuma iegūsti datus un tos apstrādā (pa burtiem dalīšana un tā tālāk).
Tad iegūsti references uz visiem HTML elementiem, ar kuriem strādāsi.
Tad tiem HTML elementiem uzliec sākotnējās vērtības (ja tā ir domāts) un arī funkcijas, kas nostrādās pie ievades notikumiem (oninput, onclick, ...).
Un to visu tajā galvenajā asinhronajā funkcijā.
starp citu, koda likšana kaut kādā galvenajā funkcijā ir ierasta prakse – tas rada scope un no ārpuses nekādi mainīgo vai funkciju nosaukumi nebūs redzami. Tas ir svarīgi, piemēram, lai kodu var dalīt pa moduļiem, kuros var izmantot vienus un tos pašus mainīgo un funkciju nosaukumus – tā, lai netraucē viens otram. Winking face
*/

result = fetch('6burti.txt')
result.then(function(response) {
    return response.text();
}).then(function (dati) {
    console.log(dati);
    masivs6 = dati.split('\n');
    console.log(masivs6)
    const viensVardsnoMasiva = masivs6[Math.floor(Math.random()*masivs6.length)]
    document.getElementById("viensVardsnoMasiva").innerHTML = viensVardsnoMasiva
    const sadalitsPaBurtiem = viensVardsnoMasiva.split("")
    const sajauktsVards = sadalitsPaBurtiem.sort((a, b) => 0.5 - Math.random())
    const putra = sajauktsVards.join('')
    document.getElementById("putra").innerHTML = putra
});

/* Laiks */
var sek =0;
function pad (val) { return val > 9 ? val : "0" + val; }
setInterval(function (){
    document.getElementById("sekundes").innerHTML=pad(++sek%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sek/60,10));
}, 1000);

/* lietotāja ievade */
function panemtTekstu(){
    let input = document.getElementById("ievade1").value;
    // alert(input)
}

function changeColor(newColor) {
    var elem = document.getElementById('viensVardsnoMasiva');
    elem.style.color = newColor;
}

function irNavVienadi(){
    var vert1 = document.getElementById('viensVardsnoMasiva').innerText;
    var vert2 = document.getElementById("ievade1").value;
    console.log(vert1);
    console.log(vert2);
    if (vert1 == vert2) {alert("sakrīt")}
    else if (vert1 != vert2) {alert("nesakrīt")}
}
irNavVienadi();