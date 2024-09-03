// const selectedH1 = document.getElementById('title');
// console.log(selectedH1);

const headers = document.getElementsByClassName('main-header');
console.log(headers);

const myParagraph = document.getElementsByTagName('paragraph');
console.log(myParagraph);

const mainheaderElement = document.querySelector('.main-header');
mainheaderElement.innerHTML ='Happy Hour';
mainheaderElement.style.color = 'red';
console.log(mainheaderElement);


const allSpecialHeadings = document.querySelectorAll('h3.main-header')

const selectedH1 = document.getElementById('box');
selectedH1.style.backgroundColor = 'blue';
selectedH1.style.color = 'white';
selectedH1.style.height = '300px';
selectedH1.style.width = '300px';
selectedH1.style.display = 'flex';
selectedH1.style.alignItems = 'center';
selectedH1.style.justifyContent = 'center';
selectedH1.style.fontFamily = 'General Sans';
selectedH1.style.fontSize = "50px"
selectedH1.style.borderRadius = "50px"
selectedH1.innerHTML = "My Rooms"
console.log(selectedH1);


const africa = document.querySelector('span');
africa.style.color = "green";
africa.style.fontSize = "100px";
africa.style.fontFamily = "poppins";
