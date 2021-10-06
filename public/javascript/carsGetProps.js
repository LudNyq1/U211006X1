'use strict';

console.log('carsGetProps script is running smoothly!');
let dataUrl = '../data/cars.json';
let res = new XMLHttpRequest();
res.open('GET', dataUrl);
res.responseType = 'json';
res.send();

res.onload = () => {
    const data = res.response;
    console.log(data);

    const cars = data['cars'];

    const myList = document.createElement('ul');

    for(let i = 0; i < cars.length; i++){
        console.log(i);
        const listItem = document.createElement('li');
        listItem.textContent = cars[i].Make + " " + cars[i].Model + " " + cars[i].Year;
        myList.appendChild(listItem);
    };

    document.getElementById('cars1').appendChild(myList);
};