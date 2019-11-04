const newItem = document.querySelector('.new-item');
const input = document.querySelector('.new-item__text');
const inputFocus = document.querySelector('.new-item__text');
const itemsList = document.querySelector('.shopping-list__items-container');
const printBox = document.querySelector('.print');

inputFocus.addEventListener('focusin', function(){
    newItem.classList.add('new-item-width');
})
inputFocus.addEventListener('focusout', function(){
    newItem.classList.remove('new-item-width');
})
console.log(inputFocus)

// Adding new LI in UL shopping list
newItem.addEventListener('submit', e => {
    e.preventDefault();
        if(input.value.length) {
            addItem(input); 
        }   
    newItem.reset();
    displayToggle(true);  
    printBox.classList.add('fullOpacity');
});

// Pattern: New LI item in UL shopping list
const addItem = item => {
    const html = `<li class="shopping-list__item">${item.value}</li>`
    itemsList.innerHTML += html;
}

// Deleting LI item from UL shopping list
itemsList.addEventListener('click', e => {
    if(e.target.classList.contains('shopping-list__item')) {
        // e.target.classList.add('nullOpacity')
        // setTimeout(function(){
            e.target.remove();
        // }, 150);
    }
    if(itemsList.innerHTML.length === 0) {
        displayToggle(false)
    }
})

// Opening UL shopping list in new tab and printing it
printDiv = divName => {
    const printList = document.getElementById(divName).innerHTML;
    const newWindow = window.open();
        newWindow.document.write(printList);
        newWindow.print();
}

// Function toggling display property on print box
displayToggle = toggling =>{
    printBox.classList.toggle("fullOpacity", toggling)
}