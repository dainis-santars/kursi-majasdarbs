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

function fn1() {
    var ievade = document.getElementById("meginajums").value;
    document.getElementById("ievade").innerHTML = ievade;
}

function slepsana() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}