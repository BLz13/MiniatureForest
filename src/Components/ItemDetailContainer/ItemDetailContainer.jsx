import { useContext, useEffect, useRef, useState } from "react";

import AddCartBtn from "../Buttons/AddCartBtn/AddCartBtn"
import CartAmountSelection from "../Buttons/CartAmountSelection/CartAmountSelection"
import Context from "../../Context/Context";
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {

    const {dispatch, products, orders} = useContext(Context);

    const refAmountItems = useRef();

    const categoryParam = useParams();

    const [categoryData, setCategoryData] = useState([]);

    const { stock } = products

    const [productsList, setProductsList] = useState([]);

    useEffect( () => { setProductsList(stock) },[stock]);

    useEffect( () => { setCategoryData( productsList.filter( (product) => ( product.category === categoryParam.id ) ) ) },[categoryParam]);

    function addToCartClickHandler() {

        const {id, name, price} = categoryData;
        const amount = (+refAmountItems.current.innerText);
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

    };

    return(
        categoryParam.id === undefined ? (
            <p className="categoryDetails" >Loading....</p>
        ) : (
            (categoryData.length === 1) ? (
                <div className="categoryDetails" >
                    <p className="speciesTitle">{categoryData[0].category}</p>
                    <div className="categoryProductBox">
                        <p className="categoryProductName">{categoryData[0].name}</p>
                        <p className="categoryDescription">{categoryData[0].description}</p>
                        {
                            categoryData[0].stock ? (
                                <>
                                    <p className="categoryPrice">{categoryData[0].price} $usd</p>
                                    <div className="addToCartBox">
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
                <div className="categoryMultipleDetails" >
                    <p className="speciesTitle"> {categoryData[0].category} </p>
                        { categoryData.map( (product) => (
                            <div className="categoryProductBox" key={product.id}>
                                    <p className="categoryProductName">{product.name}</p>
                                    <p className="categoryDescription">{product.description}</p>
                                        { product.stock ? (
                                            <>
                                                <p className="categoryPrice">{product.price} $usd</p>
                                                <div className="addToCartBox">
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
                                </div>
                            )
                        ) }
                </div>
            )
        )
    )
}