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

        // API calls

const baseURl = "";

export function name() {
    return fetch(`${baseURl}/...`)
    .then ( (response) => response.json() )
    .then ( (name) => name )
    .catch ( (error) => {
        console.error(` ERROR on function 'name': ${error}`);
        return null;
    });
};

// query params

// export function name(nameId) {
//     return fetch(`${baseURl}/...?nameId=${nameId}`)
//     .then ( (response) => response.json() )
//     .then ( (name) => name )
//     .catch ( (error) => {
//         console.error(` ERROR on function 'name': ${error}`);
//         return null;
//     });
// };