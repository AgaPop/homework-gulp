"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const name = 'Aga';
const surname = 'Popko';
const age = 30;
const language = 'JS';
console.log(`Cześć odbiorco mojej strony
nazywam się ${name} ${surname} 
i mam ${age} lat`);

/*alert ('Hello');*/
const mainHeader = document.querySelector('.main__header--js');
console.log(mainHeader);
console.log(mainHeader.innerHTML);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[8]); 
paragraphs[8].innerHTML = `Paragraf stworzony na potrzeby testu <strong>${language}</strong>`;

/*funkcja powitalna*/
/*1próba*/
function hello(x, y, z){
    console.log(`Witaj ${x} ${y}, Twój wiek to ${z} lat`);
}

hello(name, surname, age);
hello('Marek', 'Kowalski', 19);


/*2próba - to samo, ale sprawdzałam czy mogę użyć wszędzie tych samych nazw zmiennych*/
function hello2(name, surname, age){
    console.log(`Witaj ponownie ${name} ${surname}, Twój wiek to ${age} lat`);
}
hello2(name, surname, age);
hello2('Marek', 'Kowalski', 19);


/*3próba - tutaj należy wywołanie funkcji objąć console.log albo przypisujemy funkcje do zmiennej i tą zmienną obejmujemy console.log*/
function hello3(name, surname, age){
    return `Witaj po raz trzeci ${name} ${surname}, Twój wiek to ${age} lat`;
}
console.log(hello3('Marek', 'Kowalski', 19));
/*albo*/
const invitation = hello3('Marek', 'Kowalski', 19);
console.log(invitation);

/*4próba - funckje strzałkowe*/
const invitation_arrow = (name, surname, age) => {
    return `Witaj po raz czwarty ${name} ${surname}, Twój wiek to ${age} lat`;
}
console.log(invitation_arrow('Marek', 'Kowalski', 19));

/*5próba - funckje strzałkowe, skrócona forma*/
const invitation_arrow2 = (name, surname, age) => `Witaj po raz piąty ${name} ${surname}, Twój wiek to ${age} lat`;
console.log(invitation_arrow2('Marek', 'Kowalski', 19));


/*funckja powitalna ostateczna*/
function helloUltimate(name, surname, age){
    console.log(`Witaj ${name} ${surname}, Twój wiek to ${age} lat, a więc`);
    if (age < 20) {
        console.log(' masz mniej niż 20 lat');
    } else if (age >= 20 && age <= 30) {
        console.log('masz od 20 do 30 lat');
    } else {
        console.log('masz powyżej 30 lat');
    }
}

helloUltimate('Marek', 'Kowalski', 19);


/*funckja powitalna ostateczna strzałkowa*/
const helloUltimateArrow = (name, surname, age)=>{
    console.log(`Witaj ${name} ${surname}, Twój wiek to ${age} lat, a więc`);
    if (age < 20) {
        console.log(' masz mniej niż 20 lat');
    } else if (age >= 20 && age <= 30) {
        console.log('masz od 20 do 30 lat');
    } else {
        console.log('masz powyżej 30 lat');
    }
}

helloUltimateArrow('Marek', 'Kowalski', 19);


/*button do nawigacji*/
const navigationSwitcher = document.querySelector('.navigation__switcher--js');
const navigationList = document.querySelector('.navigation__list--js');

navigationSwitcher.addEventListener('click', (e)=> {    
    navigationList.classList.toggle('navigation__list--visible');
    if (navigationList.classList.contains('navigation__list--visible')){
        navigationSwitcher.innerHTML ='x';
    }else {
        navigationSwitcher.innerHTML ='≡';
    }     
} );







/*08.06 - JS: Tablice*/
const tablica = ['string0', 'string1', 'string2']
const news = [
    {title: 'wtf',
    content: 'lorem ipsum'
    },
    {title: 'co ten frontend',
    content: 'lorem lorem',
    link: 'onet.pl'
    }    
]

console.log(tablica[1]);
console.log(news);
console.log(tablica.length);

const string = "Agnieszka";
console.log(string[0]);
console.log(string.length);

tablica.push('string3');
console.log(tablica);

tablica.unshift('string początkowy');
console.log(tablica);

tablica.shift();
console.log(tablica);

tablica.pop();
console.log(tablica);

console.log(tablica.indexOf("string0"));

tablica.splice(1,2);
console.log(tablica);

tablica.push('string1');
tablica.push('string2');
console.log(tablica.slice(1,2));

// 08.07 JS: Petle

// FOR
for (let i = 0; i < 3; i++){
    console.log(`${i} powtorzenie`);
}

const faces = ['😼', '😈', '🤨', 'test'];
for (let i = 0; i < faces.length; i++){
    console.log(`element ${i}: ${faces[i]}`);
}

// FOR OF
for (let face of faces){
    console.log(face);
}

// FOR IN
const person = {
    name: 'aga',
    age:30
}

for (let feature in person) {
    console.log(`${feature}: ${person[feature]}`)
}

// WHILE
let a =10;

while (a>0) {  
    console.log(a--);
} 

// DO WHILE
console.log('teraz b');
let b =10;

 do {  
     b--;
     console.log(b);
} while (b>10);



// 08.08 Przechowywanie danych

// cookie - - archaiczne:
// document.cookie = "testoweCiacho = wartość";
// document.cookie = "testoweCiacho2 = wartość  2";
// console.log(document.cookie);

// localStorage.setItem('name', 'aga');
console.log(localStorage.getItem('name'));

const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
// localStorage.setItem('person', jsonPerson);
const stringifyPerson = localStorage.getItem('person');
const objectPerson = JSON.parse(stringifyPerson);
console.log(objectPerson);
localStorage.removeItem('person');