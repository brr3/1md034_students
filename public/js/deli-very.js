/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#main',
  data: {
    ordersSent: 0,
    orders: {},
  },
  methods: {
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.ordersSent,
                                details: { x: this.orders[0].details.x,
                                           y: this.orders[0].details.y },
                                orderItems: [orderSummary.slice(4)],
                                personalInfo: [orderSummary[0], orderSummary[1], orderSummary[2], orderSummary[3]]
                              });
    },
    displayOrder: function (event) {
        var offset = { x: event.currentTarget.getBoundingClientRect().left,
                       y: event.currentTarget.getBoundingClientRect().top };
        Vue.set(this.orders, 0, { text: 'T',
                                  details: { x: event.clientX - 10 - offset.x,
                                             y: event.clientY - 10 - offset.y }
                                }
               );
    },
    markDone: function() {
        clearSubmitionInfo();
        console.log("Button clicked!");
        summarizeOrder();
        displayOrderSummary();
        this.ordersSent++;
    }
  }
});
