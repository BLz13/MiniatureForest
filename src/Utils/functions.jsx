export function isEmpty(targetArray) {
    return Boolean(targetArray.length === 0);
};

export function removeElementFromArray(array, index) {

    for (let i = index; i < array.length; i++) {
        array[i] = array[i+1];   
    };

    array.length -- 

    return(array);

};