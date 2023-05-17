import { useContext, useEffect, useState } from "react";

import Context from "../../../Context/Context";

function Badge (props) {

    const {navbarStatus} = props;
    
    const {products} = useContext(Context);
    
    const [badgeNumber, setBadgeNumber] = useState(products.cart.items.length);

    useEffect( () => setBadgeNumber(products.cart.items.length) )

    return (
        <p
            className={
                !navbarStatus ? (
                    badgeNumber === 0 ? "badge noBadge navOpenBadge" : "navOpenBadge badge"
                ) : (
                    badgeNumber === 0 ? "badge noBadge" : "badge"
                )
            }
        >
            {badgeNumber}
        </p>
    );
};

export default Badge;