// Creazione lista cognomi
var arrSurnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(arrSurnameList);

// Richiesta cognome utente
var userSurname = prompt('Inserisci il tuo cognome');
console.log(userSurname);

// Aggiunta ultimo cognome utente inserito
arrSurnameList.push(userSurname);
console.log(arrSurnameList);

// Display lista cognomi in ordine alfabetico
arrSurnameList.sort();
console.log(arrSurnameList);

// Display ordine elementi in base a index
for (var i = 0; i < arrSurnameList.length; i++) {
  console.log(arrSurnameList[i]);
}

// Display ordine elementi in base a posizione "umana"
arrSurnameList.indexOf(userSurname);
