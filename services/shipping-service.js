


export function shipment(order) {
    
    let shipmentValue = 0.0;

    if (order.basic < 100.0) {
        shipmentValue =  20.0;
        return shipmentValue;
       
    } 
    else if (order.basic < 200.0) {
        shipmentValue = 12;
            return shipmentValue;
      
    }
    shipmentValue = 0.0;
    return shipmentValue;
}