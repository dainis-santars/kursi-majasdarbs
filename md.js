let masivs = []

jQuery.get('5burti.txt', function(data) {
    masivs = data.split('\n');
    document.getElementById("dati").innerHTML = masivs

    const viensVardsnoMasiva = masivs[Math.floor(Math.random()*masivs.length)]
    document.getElementById("viensVardsnoMasiva").innerHTML = viensVardsnoMasiva

    const sadalitsPaBurtiem = viensVardsnoMasiva.split("")
    document.getElementById("sadalitsPaBurtiem").innerHTML = sadalitsPaBurtiem

    const sajauktsVards = sadalitsPaBurtiem.sort((a, b) => 0.5 - Math.random())
    document.getElementById("sajauktsVards").innerHTML = sajauktsVards

    const putra = sajauktsVards.join('')
    document.getElementById("putra").innerHTML = putra


});

function slepsana() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function fn1() {
    var ievade = document.getElementById("meginajums").value;
    document.getElementById("ievade").innerHTML = ievade;
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + "." + m + "." + s;
    document.getElementById("laiks").innerText = time;
    document.getElementById("laiks").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();


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






