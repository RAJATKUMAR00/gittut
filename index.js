
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