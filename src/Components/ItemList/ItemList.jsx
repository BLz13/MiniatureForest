import  { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ItemList(props) {

    const {categoriesList} = props;
    
    const productParam = useParams();
    
    const [randomInteger, setRandomInteger] = useState(1);

    useEffect( () => {
        const min = Math.ceil(1);
        const max = Math.floor(4);
        setRandomInteger(Math.floor(Math.random()*(max - min)+min));
    },[]);

    console.log(categoriesList);

    return(
        <> 
            { categoriesList.map( (category) => {
                    return(
                        (category.products.length === 1) ? (
                            (category.id === productParam.id) ? (
                                <li className="productsItemsOpen" key={category.id}>
                                    <p className="categoryTitle"> {category.id} </p>
                                    <NavLink className="openProductImageBox productImageBox" to={category.id}>
                                        <img className="productImage" src={require(`../../assets/images/products/${category.products[0].id + randomInteger}.jpg`)}/>
                                    </NavLink>
                                </li>
                            ) : (
                                <li
                                    className={ (productParam.id === undefined) ? "productsItems" : "productsItemsClose" }
                                    style={ {
                                        height: `calc(100%/${ categoriesList.length })`
                                    } }
                                    key={category.id}
                                >
                                    <p className="categoryTitle"> {category.id} </p>
                                    <NavLink className={ !productParam.id  ? "notImageOpen productImageBox" : "closeProductImageBox productImageBox"} to={category.id}>
                                        <img className="productImage" src={require(`../../assets/images/products/${category.products[0].id + randomInteger}.jpg`)}/>
                                    </NavLink>                            
                                </li>
                            )
                        ) : (
                            (category.id === productParam.id) ? (
                                <li className="productsItemsOpen" key={category.id}>
                                    <p className="categoryTitle"> {category.id} </p>
                                    <NavLink className={ ({isActive}) => isActive  ? "openProductImageBox productImageBox" : "closeProductImageBox productImageBox"} to={category.id}>
                                        { category.products.map( product => (
                                            <img className="multipleImagesProduct" src={require(`../../assets/images/products/${product.id + randomInteger}.jpg`)}/>
                                        ))}
                                    </NavLink>
                                </li>
                            ) : (
                                <li
                                    className={ (productParam.id === undefined) ? "productsItems" : "productsItemsClose" }
                                    style={ {
                                        height: `calc(100%/${ categoriesList.length })`
                                    } }
                                    key={category.id}
                                >
                                    <p className="categoryTitle"> {category.id} </p>
                                    <NavLink className={ !productParam.id  ? "notImageOpen productImageBox" : "closeProductImageBox productImageBox"} to={category.id}>
                                        { category.products.map( product => (
                                            <img className="multipleImagesProduct" src={require(`../../assets/images/products/${product.id + randomInteger}.jpg`)}/>
                                        ))}
                                    </NavLink>                            
                                </li>
                            )
                        )
                    )
            } ) }
        </>
    );

};