/*class MenuItem {
		constructor(name, imageURL, kCal, ...intolerences) {
    		this.productName = name;
			this.imageURL = imageURL;
    		this.kCal = kCal;
    		this.intolerences = intolerences;
    }
    get name() {
    	return this.productName;
    }
	get image() {
		return this.imageURL;
	}
    get calories() {
    	return this.kCal;
    }
    get contents() {
    	return this.intolerences;
    }
}

var o1 = new MenuItem("The Fire Burger", "https://www.colourbox.com/preview/4409422-hamburger-with-fire.jpg", 750, "Lactose", "Gluten");
var o2 = new MenuItem("Fried Turkey Burger", "https://cdn0.wideopeneats.com/wp-content/uploads/2017/10/arbys-deep-fried-turkey-sandwiches.png", 600, "Lactose");
var o3 = new MenuItem("A Double w/ Cheese", "https://www.mcdonalds.com.my/storage/foods/September2017/thumb2doublecheeseburger-efc3a63a9d.jpg", 1800, "Lactose", "Gluten");

var orders = [o1,o2,o3];

var burgers = [document.getElementById("burger1"), document.getElementById("burger2"), document.getElementById("burger3")];

var i = 0;
for (i; i < 3; i++) {
	let title = document.createElement("h3");
	let titleValue = document.createTextNode(orders[i].name);
	title.appendChild(titleValue);

	let image = document.createElement("img");
	image.setAttribute("src", orders[i].image);
	image.setAttribute("width", "300");

	let uList = document.createElement("ul");

	let uListItem1 = document.createElement("li");
	let uListValue1 = document.createTextNode(orders[i].calories + " kCal");
	uListItem1.appendChild(uListValue1);
	uList.appendChild(uListItem1);

    if (orders[i].contents != null) {
		let uListItem2 = document.createElement("li");
		let n = 0;
		for (n; n < orders[i].contents.length; n++) {
			let uListItem = document.createElement("li");
			let uListValue = document.createTextNode("Contains ");
			let uListSpan = document.createElement("span");
			let uListSpanValue = document.createTextNode(orders[i].contents[n]);
			uListSpan.setAttribute("id", orders[i].contents[n]);
			uListSpan.appendChild(uListSpanValue);
			uListItem.appendChild(uListValue);
			uListItem.appendChild(uListSpan);
			uList.appendChild(uListItem);
		}
    }
	burgers[i].appendChild(title);
    burgers[i].appendChild(image);
	burgers[i].appendChild(uList);
}*/
