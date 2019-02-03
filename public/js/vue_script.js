
// Uncomment to use Vue for displaying the menu (requires modifying index.html correctly)
/*var vm = new Vue({
  el: '#menu',
  data: {
    menuItems
  }
})*/

var order = new Vue({
    el: '#orderButton',
    methods: {
        markDone: function() {
            clearSubmitionInfo();
            console.log("Button clicked!");
            summarizeOrder();
            displayOrder();
        }
    }
});
