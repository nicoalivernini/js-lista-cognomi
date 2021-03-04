// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Perlari’, ‘Lodigiani’, 'Mastrobattista', ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//Chiedo cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");

//Creo array con altri cognomi
var listaCognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi", cognomeUtente];

//Metto in ordine alfabetico
listaCognomi.sort();

//Stampo
for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('lista-cognomi').innerHTML += "<li>" + listaCognomi[i] + "</li>"
}

//Scrivo la posizione umana della lista
// console.log(listaCognome.value(););

document.getElementById('posizione-cognome').innerHTML = "Il tuo cognome è: " + listaCognomi[cognomeUtente] + " posizione"
