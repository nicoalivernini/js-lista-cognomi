// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Perlari’, ‘Lodigiani’, 'Mastrobattista', ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//Chiedo cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");

cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.substring(1);

//Creo array con altri cognomi
var listaCognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi", cognomeUtente];

//Metto in ordine alfabetico
listaCognomi.sort();

//Stampo
for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('lista-cognomi').innerHTML += "<li>" + listaCognomi[i] + "</li>"
}

//Dichiaro la variabile per dare la posizione umana
var conteggioUmano = listaCognomi.indexOf(cognomeUtente) + 1;

//Scrivo la posizione umana della lista
document.getElementById('posizione-cognome').innerHTML = "Il tuo cognome è il numero: " + conteggioUmano
