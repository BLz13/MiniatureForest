export function isEmpty(targetArray) {
    return Boolean(targetArray.length === 0);
};

export function removeElementFromArray(props) {

    const {array, targetIndex} = props;

    for (let i = targetIndex; i < array.length; i++) {
        array[i] = array[i+1];   
    };

    return(array);

};

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