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
/*then(function fn1() {
    var ievade = document.getElementById("meginajums").value;
    document.getElementById("ievade").innerHTML = ievade
    if (viensVardsnoMasiva == ievade) {
        console.log('✅');
    } else {
        console.log('⛔️');
    }
});*/

function slepsana() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*
let masivs = []
jQuery.get('5burti.txt', function(data) {
    masivs = data.split('\n');
    // document.getElementById("dati").innerHTML = masivs

    const viensVardsnoMasiva = masivs[Math.floor(Math.random()*masivs.length)]
    document.getElementById("viensVardsnoMasiva").innerHTML = viensVardsnoMasiva

    const sadalitsPaBurtiem = viensVardsnoMasiva.split("")
    // document.getElementById("sadalitsPaBurtiem").innerHTML = sadalitsPaBurtiem

    const sajauktsVards = sadalitsPaBurtiem.sort((a, b) => 0.5 - Math.random())
    // document.getElementById("sajauktsVards").innerHTML = sajauktsVards

    const putra = sajauktsVards.join('')
    document.getElementById("putra").innerHTML = putra
});
*/

var kontrole = "akords"


function fn1() {
    var ievade = document.getElementById("meginajums").value;
    document.getElementById("ievade").innerHTML = ievade;
    if (kontrole == ievade) {
        alert('✅');
    } else {
        alert('⛔️');
    }
}




    var minutes =0;
    var sekundes =0;
    function startTimer(){
        let timex = setTimeout(function () {
            sekundes++;
            if (sekundes > 59) {
                sekundes = 0;
                minutes++;

                if (minutes < 10) {
                    $("#minutes").text('0' + minutes + '.');
                } else $("#minutes").text(minutes + '.');
            }
            if (sekundes < 10) {
                $("#sekundes").text('0' + sekundes);
            } else {
                $("#sekundes").text(sekundes);
            }

            startTimer();
        }, 1000);
    }


