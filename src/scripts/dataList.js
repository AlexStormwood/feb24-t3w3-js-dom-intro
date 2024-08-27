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






