// EXAMINE THE DOCUMENT OBJECT //

//  console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.forms[1]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent ='Hello';
// headerTitle.innerHTML = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// var items = document.getElementsByClassName('list-group-item');

// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.backgroundColor = '#f4f4f4';
// }    

// GETELEMENTBYTagname //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Helllong';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// GETELEMENTBYCLASSNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Helllong';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
   

// And try editing it with getelementsbyclassname and 
// then by getelementbytagname

// getelementbytagname
// var newl = document.getElementsByTagName('li');
// console.log(newl);
// newl[0].style.fontWeight = 'bold';
// newl.style.display = 'none';

// getelementsbyclassname
// var newT = document.getElementsByClassName('lit');

// newT.style.backgroundColor = 'yellow';

// QUERY_SELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 9px #ccc';

// var input =document.querySelector('input');
// input.value = 'Hello';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';



// Deliverable
// 1.Make the 2nd item have green background color.
// var snd = document.querySelector('.list-group-item:nth-child(2)');
// snd.style.backgroundColor = 'green';

// var lst = document.querySelector('.list-group-item:last-child');
// lst.style.backgroundColor = 'green';


// var llst = document.querySelector('.list-group-item');
// llst.style.backgroundColor = 'green';

// 2.Make the 3rd item invisible
// var trd = document.querySelector('.list-group-item:nth-child(3)');
// trd.style.display = 'none';

// QUERY_SELECTORALL //
// 1.Using QuerySelectorALL change the font color to green for 2nd item in the item list
// var sfd = document.querySelectorAll('.list-group-item');
// sfd[1].style.color = 'green';

// 2.Choose all the odd elements and make their background green using QuerySelectorALL﻿
// var odd = document.querySelectorAll('li:nth-child(odd');
// for(var i=0; i<odd.length; i++){
//     // odd[i].style.fontWeight = 'bold';
//     // odd[i].style.backgroundColor = 'green';
// }

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
// var h1 = document.querySelector('header h2');
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1); 


 // Js Crash Course - 4 //


 var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

//   // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('disc').value;

//   // Create new li element
  var li = document.createElement('li');

//   // Add class
   li.className = 'list-group-item';
//    li1.className = 'list-group-item';
//   // Add text node with input value
   li.appendChild(document.createTextNode(newItem+ " "+newItem1));


//   // Create del button element
  var deleteBtn = document.createElement('button');
  var editbtn = document.createElement('button');


//   // Add classes to del button
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   editbtn.className='btn btn-sm float-right edit0th';

//   // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));
   editbtn.appendChild(document.createTextNode('EDIT'));

//   // Append button to li
   li.appendChild(deleteBtn);
   li.appendChild(editbtn);


//   // Append li to list
   itemList.appendChild(li);
}

// // Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
 
// // Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
 
