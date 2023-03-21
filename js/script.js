

// querySelector prende il primo elemento di un determinato selettore
// accetta qualsiasi selettore css
const paragrafo = document.querySelector('p');
const mainText = document.querySelector('.main-text');

// con = sovrascrivo le classi presenti
paragrafo.className = 'red bigger';
console.log('paragrafo.className',paragrafo.className);

// con className per aggiungere una classe devo concatenare come una stringa tenendo conte degli spazi
mainText.className += " bigger";

console.log('mainText.className',mainText.className);

// class list restituisce un elenco di classi dell'elemento
console.log('mainText.classList',mainText.classList);

// classList.add('miaClalle') -> aggiunge una classe alla lista delle classi dell'elemento
mainText.classList.add('bold');
console.log('mainText.classList',mainText.classList);

// classList.remove('miaClalle') -> rimuove una classe alla lista delle classi dell'elemento
mainText.classList.remove('red');
console.log('mainText.classList',mainText.classList);

// style scrive la proprietà css inline
mainText.style.backgroundColor = 'yellow';

// con style.cssText scivo direttamente il css inline
paragrafo.style.cssText = "background-color: pink; font-size: 0.8rem; border: 1px solid black";

// BOTTONI
const bottone1 = document.getElementById('bottone-1');
const bottone2 = document.getElementById('bottone-2');
const bottone3 = document.getElementById('bottone-3');
const bottone4 = document.getElementById('bottone-4');
const bottone5 = document.getElementById('bottone-5');
const bottone6 = document.getElementById('bottone-6');
const bottone7 = document.getElementById('bottone-7');
const bottone8 = document.getElementById('bottone-8');

console.log('bottone1',bottone1);

bottone1.addEventListener('click',function(){
  // il codice della funzione deve essere messo dentro le graffe
  console.log('Mi hai cliccato');
})

bottone2.addEventListener('click',function(){
  const testo = document.querySelector('.ultimo-text');
  testo.classList.add('bg-yellow')
})

bottone3.addEventListener('click',coloraTesto);

function coloraTesto(){
  document.querySelector('.ultimo-text').classList.add('bg-yellow')
}

let counter = 0;
const diplayCounter = document.querySelector('h3');
diplayCounter.innerHTML = counter;

bottone4.addEventListener('click', function(){
  //counter += 1;
  counter++;  // incrementa di 1
  console.log(counter);
  diplayCounter.innerHTML = counter;
})

bottone5.addEventListener('click', function(){
  document.querySelector('.ultimo-text').classList.add('hide');
})

let vedoTesto = true;

// toggle testo modo 1
bottone6.addEventListener('click', function(){
  const text = document.querySelector('.main-text');
  // se il flag vedo testo è true aggiungo la classe hide
  if(vedoTesto){
    text.classList.add('hide');
  }else{
    // altrimenti la rimuovo
    text.classList.remove('hide');
  }
  // tutte le volte che clicco il flag diventa il contrario di se stesso quini da true a false e da false a true
  vedoTesto = !vedoTesto;
})

// toggle testo modo classList.contains('miaClasse') -> restituisce true se trova miaClasse 
bottone7.addEventListener('click',function(){
  const text = document.querySelector('.main-text');
  // se text contiene la classe hide la rimuovo altrimenti la aggiungo
  if(text.classList.contains('hide')){
    text.classList.remove('hide');
  }else{
    text.classList.add('hide');
  }
})

bottone8.addEventListener('click', function(){
  const input = document.getElementById('name');
  const output = document.getElementById('output');
  // prendo il value dell'imput e lo salvo in una variabile
  const name = input.value;
  // lo inietto dentro l'elemento con id output
  output.innerHTML = name;
  // resetto l'input scrivendo una stringa vuota
  input.value = "";
})
