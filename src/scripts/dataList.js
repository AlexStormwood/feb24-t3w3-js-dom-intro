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


let carsContainerElement = document.getElementById("carsContainer");
let carsContainerList = document.createElement("ul");


dataArray.forEach((car) => {
	console.log(car);

	let newCarEntry = document.createElement("li");

	newCarEntry.innerText += car;

	carsContainerList.appendChild(newCarEntry);
});


carsContainerElement.appendChild(carsContainerList);


