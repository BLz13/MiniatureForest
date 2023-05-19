function Badge (props) {

    const {badgeNumber, navbarStatus} = props;

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