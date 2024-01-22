import * as orderService from "./order-service.js";
import Order from "../model/order.js"




const order1 = new Order(1034, 150.00, 20);
const order2 = new Order(2282, 800.0, 10);
const order3 = new Order(1309, 95.09, 0.0);

console.log('Pedido código ' + order1.cod)
console.log('Valor total: R$ ' + orderService.total(order1).toFixed(2));

console.log('\n\n');

console.log('Pedido código ' + order2.cod)
console.log('Valor total: R$ ' + orderService.total(order2).toFixed(2));

console.log('\n\n');

console.log('Pedido código ' + order2.cod)
console.log('Valor total: R$ ' + orderService.total(order3).toFixed(2));

