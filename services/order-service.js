import * as shipmentService from "./shipping-service.js";

export function total(order) {
    
    const totalValue = shipmentService.shipment(order);
        let discount = 0.0;

        discount += order.basic * (order.discount /100);
        return order.basic - discount + totalValue;

}