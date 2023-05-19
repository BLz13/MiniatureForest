import "./ImageGallery.css";

import  { NavLink, Outlet, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { Context } from "../../Context/Context";

export default function ImageGallery() {

    const {products} = useContext(Context)

    const { stock } = products

    const urlParam = useParams();
    
    const [randomInteger, setRandomInteger] = useState(1);
    
    const [productsList, setProductsList] = useState([]);

    const [showProductDetail, setShowProductDetail] = useState(true);

    useEffect( () => { setProductsList(stock) },[stock]);

    useEffect( () => {
        const min = Math.ceil(1);
        const max = Math.floor(4);
        setRandomInteger(Math.floor(Math.random()*(max - min)+min));
    },[]);
    
    useEffect( () => {
        productsList.find((product) => (product.id === urlParam.id)) ? setShowProductDetail(true) : setShowProductDetail(false);
    },[productsList,urlParam]);
    
    return (
        <div className="imageGalleryBox">
            { !(productsList.length) ? (
                <p>Loading....</p>
            ) : (
                <>
                    <h1>Our Products</h1>
                    <ul className={ showProductDetail ? "imagesGallery galleryOpen" : "imagesGallery galleryClose" }>
                        { productsList.map( (product) => {
                            return ( (product.id === urlParam.id) ? (
                                <li className="detailsOpen" key={product.id}>
                                    <NavLink className={ ({isActive}) => isActive  ? "openImage imageBox" : "closeImage imageBox"} to={product.id}>
                                        <img className="productImage" src={require(`../../assets/images/products/${product.id+randomInteger}.jpg`)}/>
                                    </NavLink>
                                    <Outlet />
                                </li>
                            ) : (
                                <li
                                    className={ (urlParam.id !== undefined) ? "itemsDetails" : "detailsClose" }
                                    style={ {
                                        width: `calc(100%/${ productsList.length })`
                                    } }
                                    key={product.id}
                                >
                                    <NavLink to={product.id}>
                                        <img className="productImage" src={require(`../../assets/images/products/${product.id+randomInteger}.jpg`)}/>
                                    </NavLink>                            
                                </li>
                            ) )
                        })}
                    </ul>
                </>
            )}
        </div>
    );

}