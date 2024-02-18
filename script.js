// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
//let utenteCheEffettuaLAcquisto = amy (cambia il valore qui per provare se il tuo algoritmo funziona!)

// SOLUZIONE:
// Ho svolto l'esercizio creando una funzione che ho chiamato 'totalPrice'
function totalPrice (user) {
  let cart = 0;
  for (let i = 0; i < prices.length; i++) {
    cart += prices[i];
  }
  console.log("Benvenuto/a " + user.name + " " + user.lastName + " il totale del carrello è " + cart + " €");
  if (user.isAmbassador && cart > 100) {
    cart *= 0.7;
  }
  else if (user.isAmbassador && cart <= 100) {
    cart *= 0.7;
    cart += shippingCost;
  }
  else if (cart <= 100) {
    cart += shippingCost;
  }
  console.log(user.name + " il totale da pagare è " + cart + " €");
}

// Richiamo le funzioni
totalPrice(amy);
totalPrice(marco);
totalPrice(paul);

// Creo da prima l'array vuoto e successivamente usando .push vi aggiungo gli oggetti marco, paul e amy
let utenti = [];
utenti.push(marco, paul, amy);
console.log(utenti);

// Creo un array dove andrò ad aggiungere solo gli utenti ambassador
let utentiAmbassador = [];

/* Creo un'altra funzione per stampare la frase "NOMEUTENTE COGNOMEUTENTE è / non è un ambassador"
e per aggiungere all'array 'utentiAmbassador' gli utenti ambassador */

function ambassador (utenti) {
  utentiAmbassador = []; //svuoto l'array in modo da non trovarmi doppioni all'interno in futuro (causati dal primo 'if' della funzione)  
  for (let i = 0; i < utenti.length; i++) {
    if (utenti[i].isAmbassador) {
      console.log(utenti[i].name + " " + utenti[i].lastName + " è un ambassador");
      utentiAmbassador.push(utenti[i]);
    }
    else {
      console.log(utenti[i].name + " " + utenti[i].lastName + " non è un ambassador");
    }
  }
}

// Richiamo la funzione
ambassador(utenti);

// Verifico che 'utentiAmbassador' contiene l'oggetto 'marco' (utente ambassador)
console.log(utentiAmbassador);



// PARTE EXTRA NON PRESENTE NELLA CONSEGNA
// Creao altri utenti che inserisco successivamente nell'array 'utenti' per verificare se tutto funziona

const elisa = {
  name: "Elisa",
  lastName: "Viel",
  isAmbassador: true,
}

const andjela = {
  name: "Andjela",
  lastName: "Radosavljevic",
  isAmbassador: true,
}

utenti.push(elisa, andjela);
console.log(utenti);

// Richiamo la funzione 'ambassador'
ambassador(utenti);
console.log(utentiAmbassador);

// Richiamo la funzione totalPrice per i due nuovi utenti aggiunti
totalPrice(elisa);
totalPrice(andjela);