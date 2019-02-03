class MenuItem {
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

var menuItems = [o1,o2,o3];

var vm = new Vue({
  el: '#menu',
  data: {
    menuItems
  }
})
