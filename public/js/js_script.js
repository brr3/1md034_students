
var burgers = [document.getElementById("burger1"), document.getElementById("burger2"), document.getElementById("burger3")];

var i = 0;
for (i; i < 3; i++) {
	let title = document.createElement("h3");
	let titleValue = document.createTextNode(menuItems[i].name);
	title.appendChild(titleValue);

	let image = document.createElement("img");
	image.setAttribute("src", menuItems[i].image);
	image.setAttribute("width", "300");

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
			let uListSpan = document.createElement("span");
			let uListSpanValue = document.createTextNode(menuItems[i].intolerences[n]);
			uListSpan.setAttribute("id", menuItems[i].intolerences[n]);
			uListSpan.appendChild(uListSpanValue);
			uListItem.appendChild(uListValue);
			uListItem.appendChild(uListSpan);
			uList.appendChild(uListItem);
		}
    }
	burgers[i].appendChild(title);
    burgers[i].appendChild(image);
	burgers[i].appendChild(uList);
}
