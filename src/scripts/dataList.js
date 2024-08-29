// Declare data to use in the logic 
let dataArray = [
	"warthog",
	"interceptor",
	"herbie",
	"lightning mcqueen",
	"batmobile",
	"bat tumbler",
	"cybertruck",
	"delorean",
	"elanore",
	"magic school bus",
	"toyota corolla"
];

// Find elements on the page for us to use in the logic 
let carsContainerElement = document.getElementById("carsContainer");


function renderData(){

	carsContainerElement.innerText = "";

	// Create elements to add to the page via the logic 
	let carsContainerList = document.createElement("ul");

	// Do logic for each individual item in the array 
	dataArray.forEach((car) => {

		// Verify what we are working with, just log it to see the data's value 
		console.log(car);

		// Create a new HTML element to help us format the data's value
		let newCarEntry = document.createElement("li");
		// Add the data to the new element 
		newCarEntry.innerText += car;


		// Add a button to each entry
		// click on the button to remove the entry from the list 
		let removeButton = document.createElement("button");
		// removeButton.innerText = "Remove " + car;
		removeButton.innerText = `Remove ${car}`;

		removeButton.onclick = (() => removeCarFromDataList(car));

		// Add the removeButton to the car entry 
		newCarEntry.appendChild(removeButton);


		// Add the nicely-formatted element into the list container 
		carsContainerList.appendChild(newCarEntry);
	});

	// Add the list container onto the actual HTML page 
	carsContainerElement.appendChild(carsContainerList);

}






function removeCarFromDataList (targetItemToRemove) {
	
	// Remove the target item from the dataArray
	dataArray = dataArray.filter((car) => car != targetItemToRemove);

	// After the filtering is done, re-render the page with the "new" array
	renderData();

	
}


function addCarToDataList(event, targetInputId){

	// Find the form element 
	let formElement = document.getElementById("carsInputForm");
	// Use the form element.checkValidity() method and save the result 
	let isFormValid = formElement.checkValidity();
	console.log("isFormValid value: " + isFormValid);
	// do a conditional based on that result value 
	if (!isFormValid){
		formElement.reportValidity();
		return;
	} 


	// Find the form from the event 
	// prevent the form from doing its default behaviour (refreshing the page)
	event.preventDefault();
	console.log("Add car to list function is now running!");

	// Find the input text field based on targetInputId 
	let targetTextInput = document.getElementById(targetInputId);
	// Grab the string value from the text field 
	console.log(targetTextInput.value);

	// Chalani's request: alert after submit 
	// alert("Submitted a new entry: " + targetTextInput.value);

	// Push the string value into dataArray
	dataArray.push(targetTextInput.value);

	// Clear out the input field text to be blank again 
	targetTextInput.value = "";

	// Focus on the text input field again to enable quick data entry!
	targetTextInput.focus();

	// Chalani's request: alert after submit 
	alert("Submitted a new entry: " + dataArray[dataArray.length - 1]);

	// call renderData() to update the page 
	renderData();
}


let formInputButton = document.getElementById("formInputButton");
formInputButton.addEventListener("click", (event) => addCarToDataList(event, "carInputText"));





