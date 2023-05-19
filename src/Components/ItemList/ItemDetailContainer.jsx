import { useContext, useEffect, useRef, useState } from "react";

import AddCartBtn from "../Buttons/AddCartBtn/AddCartBtn"
import CartAmountSelection from "../Buttons/CartAmountSelection/CartAmountSelection"
import { Context } from "../../Context/Context";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {

    const {dispatch, products, orders} = useContext(Context);

    const refAmountItems = useRef();

    const refNameItem = useRef();

    const refPriceItems = useRef();

    const categoryParam = useParams();

    const [categoryData, setCategoryData] = useState([]);

    const { stock } = products

    const [productsList, setProductsList] = useState([]);

    useEffect( () => { setProductsList(stock) },[stock]);

    useEffect( () => { setCategoryData( productsList.filter( (product) => ( product.category === categoryParam.id ) ) ) },[productsList,categoryParam]);

    function addToCartClickHandler() {

        const name = refNameItem.current.innerText;
        const amount = (+refAmountItems.current.innerText);
        const price = Number((refPriceItems.current.innerText).replace(" $usd",""));
        const id = (name.charAt(0).toLowerCase() + name.slice(1)).replace(" ","");
        const subTotal = amount * price;

        dispatch({
            type:"addItemsToCart",
            payload: {
                id,
                name,
                price,
                amount,
                subTotal
            }
        });

        console.log(products);

    };

    return(
        categoryParam.id === undefined ? (
            <p className="categoryDetails" >Loading....</p>
        ) : (
            (categoryData.length === 1) ? (
                <div className="categoryDetails" >
                    <p className="speciesTitle">{categoryData[0].category}</p>
                    <div className="categoryProductBox">
                        <p className="categoryProductName" ref={refNameItem}>{categoryData[0].name}</p>
                        <p className="categoryDescription">{categoryData[0].description}</p>
                        {
                            categoryData[0].stock ? (
                                <>
                                    <p className="categoryPrice" ref={refPriceItems}>{categoryData[0].price} $usd</p>
                                    <div className="addToCartBoxCategory">
                                        <CartAmountSelection 
                                            productsAmount={categoryData[0].stock}
                                            reference={refAmountItems}
                                        />
                                        <span onClick={addToCartClickHandler}>
                                            <AddCartBtn label="Add To Cart" />
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <div className="categoryPrice">Out of Stock</div>
                            )
                        }
                    </div>
                </div>
            ) : (
                <ul className="categoryMultipleDetails" >
                    <li className="speciesTitle" value={0}> {categoryParam.id} </li>
                        { categoryData.map( (product) => (
                            <li className="categoryProductBox" key={product.id}>
                                    <p className="categoryProductName" ref={refNameItem}>{product.name}</p>
                                    <p className="categoryDescription">{product.description}</p>
                                        { product.stock ? (
                                            <>
                                                <p className="categoryPrice" ref={refPriceItems}>{product.price} $usd</p>
                                                <div className="addToCartBoxCategory">
                                                    <CartAmountSelection 
                                                        productsAmount={product.stock}
                                                        reference={refAmountItems}
                                                    />
                                                    <span onClick={addToCartClickHandler}>
                                                        <AddCartBtn label="Add To Cart" />
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="categoryPrice">Out of Stock</div>
                                        ) }
                            </li>   
                        ) ) }
                </ul>
            )
        )
    )
}