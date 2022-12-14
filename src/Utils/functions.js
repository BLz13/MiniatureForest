import {ITEMS, CATEGORIES} from "../Services/items";

export function getItem(projectedId) {
    return new Promise ((resolve, reject) => {
        const targetItem = ITEMS.find(
            (item) => item.id === projectedId
        );
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