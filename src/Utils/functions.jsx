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