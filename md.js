let vardi = ['abaks',
'abate',
'abats',
'ābece',
'ābele',
'ābols',
'acīte',
'adata',
'ādere',
'afēra',
'afiša',
'agars']

document.getElementById("demo").innerHTML = vardi

const viens = vardi[Math.floor(Math.random()*vardi.length)]
document.getElementById("viens").innerHTML = viens

const sajaukts = viens.split("")
document.getElementById("sajaukts").innerHTML = sajaukts

const miniMani = sajaukts.sort((a, b) => 0.5 - Math.random())
document.getElementById("miniMani").innerHTML = miniMani

const miniManiVards = miniMani.join('')
document.getElementById("miniManiVards").innerHTML = miniManiVards

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

