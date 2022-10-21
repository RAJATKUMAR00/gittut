
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
}
