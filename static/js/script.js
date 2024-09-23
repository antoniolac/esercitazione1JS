do{
    let name = prompt("qual è il tuo nome?");
}while(name === null);

let score = 0;

let d1 = prompt("qual è la capitale di italia?");
d1 = d1.toLowerCase().trim();
if(d1 === "roma")
    score++;
else
    prompt("errato, la risposta giusta è Roma");

let d2 = prompt("di che colore è la fragola?");
d2 = d2.toLowerCase().trim();
if(d2 === "rosso")
    score++;
else
    prompt("errato, la risposta giusta è Rosso");


let d3 = prompt("quante ruote ha una macchina?");
d3 = d3.toLowerCase().trim();
if(d3 === "4")
    score++;
else
    prompt("errato, la risposta giusta è 4");


let d4 = prompt("come si dice ciao in inglese");
d4 = d4.toLowerCase().trim();
if(d4 === "hello")
    score++;
else
    prompt("errato, la risposta giusta è Hello");

let d5 = prompt("quando è scoppiata la prima guerra mondiale? (nel mondo non in italia)");
d5 = d5.toLowerCase().trim();
if(d5 === "1914")
    score++;
else
    prompt("errato, la risposta giusta è 1914");

let d6 = prompt("come si chiama il fiore che si gira al sole?");
d6 = d6.toLowerCase().trim();
if(d6 === "girasole")
    score++;
else
    prompt("errato, la risposta giusta è Girasole");

let d7 = prompt("dove abita francesco francabandera (basta solo la prima parola della città)");
d7 = d7.toLowerCase().trim();
if(d1 === "palo")
    score++;
else
    prompt("errato, la risposta giusta è Palo (ci dispiace per lui)");

alert("il tuo punteggio finale: " +score);

let percentuale = (100 * score)/7;

console.log("percentuale risposte giuste: " + percentuale);





