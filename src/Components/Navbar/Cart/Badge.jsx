function Badge (props) {

    const {amountItems, className} = props;

    return (
        <p className={className}> {amountItems} </p>
    );
};

export default Badge;