//funzione per il sanitize
function sanitize(stringa) {
    return stringa.toLowerCase().trim();
}

//funzione per il calcolo percentuale
function calcolaPercentuale(valore, totale = 7) {
    return (valore / totale) * 100;
}

//inserimento nome 
let firstName; 
do{
    firstName = prompt("inserisci il tuo nome:");
}while (firstName === null || firstName.trim() === "");

//variabile che mantiene il punteggio
let score = 0;

//domande, assegnazione punteggio e sanitize variabile
//prima domanda
let d1;
do{
    d1 = prompt("qual è la capitale di italia?");
}while (d1 === null || d1.trim() === "");
d1 = sanitize(d1);
if(d1 === "roma")
    score++;
else
    alert("errato, la risposta giusta è Roma");

//seconda domanda
let d2;
do{
    d2 = prompt("di che colore è la fragola?");
}while (d2 === null || d2.trim() === "");
d2 = sanitize(d2);
if(d2 === "rossa")
    score++;
else
    alert("errato, la risposta giusta è Rossa");

//terza domanda
let d3; 
do{
    d3 = prompt("quante ruote ha una macchina?");
}while (d3 === null || d3.trim() === "");
d3 = sanitize(d3);
if(d3 === "4")
    score++;
else
    alert("errato, la risposta giusta è 4");

//quarta domanda
let d4; 
do{
    d4 = prompt("come si dice ciao in inglese");
}while (d4 === null || d4.trim() === "");
d4 = sanitize(d4);
if(d4 === "hello")
    score++;
else
    alert("errato, la risposta giusta è Hello");

//quinta domanda
let d5;
do{
    d5  = prompt("quando è scoppiata la prima guerra mondiale? (nel mondo non in italia)");
}while (d5 === null || d5.trim() === "");
d5 = sanitize(d5);
if(d5 === "1914")
    score++;
else
    alert("errato, la risposta giusta è 1914");

//sesta domanda
let d6; 
do{
    d6 = prompt("come si chiama il fiore che si gira al sole?");
}while (d6 === null || d6.trim() === "");
d6 = sanitize(d6);
if(d6 === "girasole")
    score++;
else
    alert("errato, la risposta giusta è Girasole");

//settima domanda
let d7; 
do{
    d7 = prompt("dove abita francesco francabandera (basta solo la prima parola della città)");
}while (d7 === null || d7.trim() === "");
d7 = sanitize(d7);
if(d7 === "palo")
    score++;
else
    alert("errato, la risposta giusta è Palo (ci dispiace per lui)");

//stampa punteggio finale
alert("il tuo punteggio finale: " +score);

//calcolo e stampa in console della percentuale
let percentuale = calcolaPercentuale(score);

console.log("percentuale risposte giuste: " + percentuale);





