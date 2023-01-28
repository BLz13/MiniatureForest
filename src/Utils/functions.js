export function isEmpty(targetArray) {
    return Boolean(targetArray.length === 0);
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