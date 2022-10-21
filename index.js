
//  console.dir(document);

// console.log(document.)

// console.log(document.forms[1]);

var items = document.getElementsByClassName('list-group-item');

// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';


for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.backgroundColor = '#f4f4f4';
}

// And try editing it with getelementsbyclassname and 
// then by getelementbytagname

getelementbytagname
var newl = document.getElementsByTagName('li');

newl.style.display = 'none';   // show error because of bootstrap form 

// getelementsbyclassname
var newT = document.getElementsByClassName('lit');

newT.style.backgroundColor = 'yellow';   // show error because of bootstrap form 

// Deliverable
// 1.Make the 2nd item have green background color.
var snd = document.querySelector('.list-group-item:nth-child(2)');
snd.style.backgroundColor = 'green';

// Deliverable
// 1.Now go head and add HEllo word before Item Lister

// 2.Now go head and add HEllo word before Item 1
itemList.firstElementChild.textContent = 'Hello';

// 2.Make the 3rd item invisible
var trd = document.querySelector('.list-group-item:nth-child(3)');
trd.style.display = 'none';

// QUERY_SELECTORALL //
// 1.Using QuerySelectorALL change the font color to green for 2nd item in the item list
var sfd = document.querySelectorAll('.list-group-item');
sfd[1].style.color = 'green';

// 2.Choose all the odd elements and make their background green using QuerySelectorALL﻿
var odd = document.querySelectorAll('li:nth-child(odd');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
    
    
// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNode
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow';

// FirstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);



// itemList.firstElementChild.textContent = 'HEllo';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'HEllo 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);


// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

// createElement

// Create a div
// var newDiv = document.createElement('div');

// Add class
// newDiv.className= 'HEllo';

// Add id
// newDiv.id = 'hello 1';

// Add attr
// newDiv.setAttribute('title', 'Hello Div');

// Create text node
// var newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// 1.Now go head and add HEllo word before Item Lister
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1); 

// 2.Now go head and add HEllo word before Item 1

// createElement

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className= 'HEllo';

// Add id
newDiv.id = 'hello 1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

// 1.Now go head and add HEllo word before Item Lister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h2');
newDiv.appendChild(newDivText);
console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1); 


}
