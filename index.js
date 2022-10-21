
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
