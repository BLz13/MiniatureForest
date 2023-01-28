export default function reducer(store, action) {

    const {type, payload} = action;

    const {id, name, amount, price, subTotal} = payload;

    let cart = store.cart;
    let products = store.products;
    let categories = store.categories;
    let purchased = store.purchased;

    switch (type) {

        case "addItemsToCart": {

            const item = {
                id,
                name,
                amount,
                price,
                subTotal,
            }
            
            const productIndex = cart.items.findIndex( (item) => (item.id === id));

            if ( ( cart.items.length === 0 ) || (productIndex === -1) ) {
                cart.items.push(item);
                cart.total += item.subTotal;
            } {
                if (cart.items === undefined) {
                        cart.items[productIndex].amount += item.amount;
                        cart.items[productIndex].total += item.subTotal;
                }
            };
    
            return{cart,products,categories,purchased};
        }
        default: {
            return{store};
        }
    }
}