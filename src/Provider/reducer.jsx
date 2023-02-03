import {isEmpty} from '../Utils/functions'
import {removeElementFromArray} from "../Utils/functions"

export default function reducer(orders, action) {

    const {type, payload} = action;

    const {id, name, amount, price, subTotal} = payload;

    const cart = orders.cart;
    
    switch (type) {

        case "addItemsToCart": {

            // cart structure = {
            //     items : [array with the individual items],
            //     total: total amount to pay 
            // }

            const item = {
                id: id,
                name: name,
                amount: amount,
                price: price,
                subTotal: subTotal,
            }
            
            //checks if the product is already on the cart
            const productIndexCart = cart.items.findIndex( (item) => (item.id === id));

            if (productIndexCart === -1) {
                cart.items.push(item);
                cart.total = cart.total + item.subTotal;
            } {
                cart.items[productIndexCart].amount += item.amount;
                cart.items[productIndexCart].subTotal += item.subTotal;
                cart.total = cart.total + item.subTotal;
            };
    
            return{cart};
        }

        case "removeItemFromCart": {

            const item = {
                id: id,
                name: name,
                amount: amount,
                price: price,
                subTotal: subTotal,
            }
            
            const productIndexCart = cart.items.findIndex( (item) => (item.id === id));

            cart.items = removeElementFromArray({
                array: cart.items,
                index : productIndexCart
            })
            cart.total = cart.total - item.subTotal;
    
            return{orders};
        }
        default: {
            return{orders};
        }
    }
}