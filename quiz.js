let sporsmål = [
    ["Hva brukes en IP-adresse til?", "Å lagre filer", "Å identifisere en enhet på nettverk", "Å koble til Bluetooth", "Å lage nettsider", 1],
    ["Hva brukes GitHub til?", "Å spille spill", "Å sende epost", "Å installere Windows", "Å lagre og dele kode", 3],
    ["Hva brukes HTML til?", "Å lage strukturen på nettsider", "Å beskytte datamaskinen", "Å koble til WiFi", "Å lage databaser", 1],
    ["Hva gjør en router?", "Å koble sammen nettverk", "Å skrive ut dokumenter", "Å lage nettsider", "Å lagre bilder", 1],
    ["Hva er Apache?", "Et spill", "En webserver", "Et antivirusprogram", "Et programmeringsspråk", 2]
];
 
let nummer = 0;
let poeng = 0;
 
function visSporsmal() {
    let q = sporsmål[nummer];
    document.getElementById("question-number").innerHTML =
        "Spørsmål " + (nummer + 1) + " av " + sporsmål.length;
    document.getElementById("question").innerHTML = q[0];
    let svar = "";
    for (let i = 1; i <= 4; i++) {
        svar += "<button onclick='sjekkSvar(" + i + ")'>" + q[i] + "</button>";
    }
    document.getElementById("svar").innerHTML = svar;
}
 
function sjekkSvar(valg) {
    if (valg == sporsmål[nummer][5]) {
        poeng++;
        alert("Riktig!");
    } else {
        alert("Feil!");
    }
}
 
function neste() {
    nummer++;
    if (nummer < sporsmål.length) {
        visSporsmal();
    } else {
        document.getElementById("question").innerHTML = "Quizen er ferdig!";
        document.getElementById("svar").innerHTML = "";
        document.getElementById("neste-knapp").innerHTML = "";
        document.getElementById("resultat").innerHTML =
            "Du fikk " + poeng + " av " + sporsmål.length + " poeng!";
    }
}
 
document.getElementById("neste-knapp").innerHTML =
    "<button onclick='neste()'>Neste spørsmål</button>";
visSporsmal();