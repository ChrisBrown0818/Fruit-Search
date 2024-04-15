const input = document.querySelector('#fruit');
const suggestion = document.querySelector('#fruit-div')


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


//search handler takes the value in the input search bar and compares it to each fruit in the array and checks to see if at least the first letters match.
//if they do match then that fruit will be added to a new array.
function searchHandler() {
	removeList()
	
	const value = input.value.toLowerCase(); //takes the value of whatevers in the input search bar

	if(value.length===0) return;//if has no characters then stop here



	const newArray = [];//create empty array to add in fruits that qualify 
	fruit.forEach((item)=>{//for each fruit in the array of fruits,
		if(item.substring(0, value.length).toLowerCase() === value)//if the first letter to the last letter of the input value matches any fruits,
		newArray.push(item);//then push those matching fruit to the new array.
	});
	showSuggestions(newArray); //using showSuggestions will display new filtered Array
}



//this function displays fruits on html page as buttons attached the list items.
function showSuggestions(results, inputVal) {

	const listItem = document.createElement('ul')//create a new ul
listItem.className = 'fruit-list';//give it a class name
listItem.id = 'fruit-list';//give it an id
	

results.forEach((item)=>{//for each fruit in fruit array 
const availFruit = document.createElement('li'); //create a list item
const fruitBtn = document.createElement('button');//with a button
fruitBtn.innerHTML = item;//the value of the fruit will be the value of the button
availFruit.appendChild(fruitBtn)//add buton to list item
listItem.appendChild(availFruit)//add list item to unordered list
})
document.querySelector("#fruit-div").appendChild(listItem); //add unordered list to div with fruit div id.
}



//useSuggestion uses any value of a button if I click on it.
function useSuggestion(e) {
	e.preventDefault();
	

	const useBtn = e.target;
	input.value = useBtn.innerHTML;
	removeList();
}

//function to keep drop down from staying 
function removeList(){//removes autocomplete for drop down
const listItem = document.querySelector('#fruit-list');
if(listItem){
	listItem.remove(); //if list item is there remove it
}
}


input.addEventListener('keyup', searchHandler);
suggestion.addEventListener('click', useSuggestion);



