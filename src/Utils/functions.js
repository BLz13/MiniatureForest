import {CATEGORIES, ITEMS} from "../Services/items";

export function getProduct(productData) {
    return new Promise ((resolve, reject) => {
        const targetItem = ITEMS.find((item) => item.id === productData);
        setTimeout(() => resolve(targetItem), 500);
    });
}

export function getAllItems() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(ITEMS), 500);
    });
}

export function getAllCategories() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(CATEGORIES), 500);
    });
}

export function isEmpty(targetArray) {
    return targetArray.length === 0;
}