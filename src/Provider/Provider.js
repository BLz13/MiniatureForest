import Context from "../Context/Context";
import reducer from "../Firebase/reducer"
import store from "../Firebase/store";
import { useReducer } from "react";

export default function Provider(props) {
    
    const {children} = props;

    const [myStore, dispatch] = useReducer(reducer, store);
    
    const value = { store: myStore, dispatch };
    
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}