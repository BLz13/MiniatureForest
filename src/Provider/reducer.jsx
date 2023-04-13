import {isEmpty} from '../Utils/functions'
import {removeElementFromArray} from "../Utils/functions"

export default function reducer(products, action) {

    const {type, payload} = action;
    
    switch (type) {

        default: {
            throw Error(`Unknown action: ${type}`);
        };
        
    };
    
};