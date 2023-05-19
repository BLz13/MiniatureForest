export default function reducer(products, action) {

    const {type, payload} = action;
    
    switch (type) {

        case "loadStock": {

            console.log("Stock loaded");
            console.log(products);
            
            return {
                ...products,
                stock:  payload.stock,
            };
        };

        case "addItemsToCart": {
            
            const {id, amount, subTotal} = payload;
            
            const cart = products.cart;

            const stock = products.stock;

            const item = payload;
            
            //checks if the product is already on the cart
            const productIndexCart = cart.items.findIndex( (item) => (item.id === id));
            
            const productIndexStock = stock.findIndex( (item) => (item.id === id));

            if (productIndexCart === -1) {
                cart.items.push(item);
            } {
                if (productIndexCart !== -1) {
                    cart.items[productIndexCart].amount += amount;
                    cart.items[productIndexCart].subTotal += subTotal;
                }
            };

            stock[productIndexStock].stock -= amount;
            
            cart.total += subTotal;

            console.log("Item added to cart");
            console.log(products);
            
            return {
                ...products,
                stock:  stock,
                cart: cart
            };
        };

        case "removeItemFromCart": {
            
            const {id, amount, subTotal} = payload;

            const stock = products.stock;

            const indexStockItem = stock.findIndex( product => (product.id === id) );

            const cart = products.cart;
            
            cart.items.filter( (item) => (item.id !== id));

            stock[indexStockItem].stock = amount;

            cart.total -= subTotal;

            console.log("Item removed from cart");
            console.log(products);

            return {
                ...products,
                stock: stock,
                cart: cart
            };
        };

        case "clearCart": {

            const cart = {
                items:[],
                total:0
            };

            const cartItems = products.cart.items;

            const stock = products.stock;
            
            stock.forEach( product => { 
                product.stock += cartItems[cartItems.find( item => (item.id === product.id) )].amount;
            } );

            console.log("Cart cleared");
            console.log(products);

            return {
                ...products,
                stock: stock,
                cart: cart
            };
        };

        default: {
            break
        };

        }
};