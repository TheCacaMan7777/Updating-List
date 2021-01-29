let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        paragraph.removeChild()
    })


})



let addToDo1Button = document.getElementById('addToDo1');
let toDoContainer1 = document.getElementById('toDoContainer1');
let inputField1 = document.getElementById('inputField1');

addToDo1Button.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField1.value;
    toDoContainer1.appendChild(paragraph);
    inputField1.value = "";
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        paragraph.removeChild()
    })


})





let addToDo2Button = document.getElementById('addToDo2');
let toDoContainer2 = document.getElementById('toDoContainer2');
let inputField2 = document.getElementById('inputField2');

addToDo2Button.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField2.value;
    toDoContainer2.appendChild(paragraph);
    inputField2.value = "";
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        paragraph.removeChild()
    })


})
































