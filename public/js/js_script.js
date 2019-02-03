
var burgers = [document.getElementById("burger1"), document.getElementById("burger2"), document.getElementById("burger3")];

// Create the menu
var i = 0;
for (i; i < 3; i++) {
	// Item title and checkbox
	let title = document.createElement("h3");
	let titleValue = document.createTextNode(menuItems[i].name);

	let checkboxLabel = document.createElement("label");
	let checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("name", "burgerSelection");
	checkbox.setAttribute("id", menuItems[i].name);

	checkboxLabel.appendChild(titleValue);
	checkboxLabel.appendChild(checkbox);

	title.appendChild(checkboxLabel);

	burgers[i].appendChild(title);

	// Image

	let image = document.createElement("img");
	image.setAttribute("src", menuItems[i].image);
	image.setAttribute("width", "300");
	burgers[i].appendChild(image);

	// Unordered list of information

	let uList = document.createElement("ul");

	let uListItem1 = document.createElement("li");
	let uListValue1 = document.createTextNode(menuItems[i].kCal + " kCal");
	uListItem1.appendChild(uListValue1);
	uList.appendChild(uListItem1);

    if (menuItems[i].intolerences != null) {
		let uListItem2 = document.createElement("li");
		let n = 0;
		for (n; n < menuItems[i].intolerences.length; n++) {
			let uListItem = document.createElement("li");
			let uListValue = document.createTextNode("Contains ");
			uListItem.appendChild(uListValue);

			let uListSpan = document.createElement("span");
			uListSpan.setAttribute("id", menuItems[i].intolerences[n]);
			let uListSpanValue = document.createTextNode(menuItems[i].intolerences[n]);
			uListSpan.appendChild(uListSpanValue);
			uListItem.appendChild(uListSpan);
			uList.appendChild(uListItem);
		}
    }
	burgers[i].appendChild(uList);
}

/*var orderButton = document.getElementById("orderButton");

orderButton.onclick = function () {
    console.log("Button clicked!");
	summarizeOrder();
}*/

function clearSubmitionInfo() {
	document.getElementById("orderSummary").innerHTML = "";
}

var orderSummary = [];

function summarizeOrder() {
	orderSummary = [];
	let inputValue = document.getElementById('fullname').value;
	orderSummary.push(inputValue);
	inputValue = document.getElementById('email').value;
	orderSummary.push(inputValue);
	inputValue = document.getElementById('street').value;
	orderSummary.push(inputValue);
	inputValue = document.getElementById('housenr').value;
	orderSummary.push(inputValue);
	inputValue = document.getElementById('payment').value;
	orderSummary.push(inputValue);
	let inputGender = document.getElementsByName('gender');
	let length = inputGender.length;
	for (let i = 0; i < length; i++) {
        if (inputGender[i].checked) {
			orderSummary.push(inputGender[i].value);
			break;
        }
    }
	let selectedBurger = document.getElementsByName('burgerSelection');
	length = selectedBurger.length;
	for (let i = 0; i < length; i++) {
        if (selectedBurger[i].checked) {
			orderSummary.push(selectedBurger[i].id);
        }
    }
	console.log(orderSummary);
}

function displayOrder() {
	let orderSummaryDiv = document.getElementById("orderSummary");

	let title = document.createElement("h3");
	let titleValue = document.createTextNode("Order sent!");
	title.appendChild(titleValue);
	orderSummaryDiv.appendChild(title);

	let subtitle1 = document.createElement("h4");
	let subtitleValue1 = document.createTextNode("Submition details:");
	subtitle1.appendChild(subtitleValue1);
	orderSummaryDiv.appendChild(subtitle1);

	let uList = document.createElement("ul");

	let uListItem1 = document.createElement("li");
	let uListValue1 = document.createTextNode("Full Name: " + orderSummary[0]);
	uListItem1.appendChild(uListValue1);
	uList.appendChild(uListItem1);

	let uListItem2 = document.createElement("li");
	let uListValue2 = document.createTextNode("E-mail: " + orderSummary[1]);
	uListItem2.appendChild(uListValue2);
	uList.appendChild(uListItem2);

	let uListItem3 = document.createElement("li");
	let uListValue3 = document.createTextNode("Street name: " + orderSummary[2]);
	uListItem3.appendChild(uListValue3);
	uList.appendChild(uListItem3);

	let uListItem4 = document.createElement("li");
	let uListValue4 = document.createTextNode("House number: " + orderSummary[3]);
	uListItem4.appendChild(uListValue4);
	uList.appendChild(uListItem4);

	let uListItem5 = document.createElement("li");
	let uListValue5 = document.createTextNode("Payment option: " + orderSummary[4]);
	uListItem5.appendChild(uListValue5);
	uList.appendChild(uListItem5);

	let uListItem6 = document.createElement("li");
	let uListValue6 = document.createTextNode("Gender: " + orderSummary[5]);
	uListItem6.appendChild(uListValue6);
	uList.appendChild(uListItem6);

	orderSummaryDiv.appendChild(uList);

	let subtitle2 = document.createElement("h4");
	let subtitleValue2 = document.createTextNode("Ordered burger(s): " + orderSummary.slice(6));
	subtitle2.appendChild(subtitleValue2);
	orderSummaryDiv.appendChild(subtitle2);
}
