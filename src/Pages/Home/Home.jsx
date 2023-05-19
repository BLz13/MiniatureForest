import "./Home.css"

import { useContext, useEffect } from "react"

import { Context } from "../../Context/Context"
import { HeroText } from "../../Utils/homeData"
import ImageGallery from "../../Components/ImageGallery/ImageGallery"
import { STOCK } from "../../Utils/stock"

export default function Home() {   

    const {dispatch} = useContext(Context)

    useEffect( () => (
        dispatch({
            type:"loadStock",
            payload: {
                stock: STOCK
            }
        })
    ),[])

    const homeBoxClass="homeBox"
    const heroBoxClass="heroBox"
    const heroTextBoxClass="heroTextBox"
    const heroTitleClass="heroTitle"
    const heroTextClass="heroText"
    
    return(
        <div className={homeBoxClass} >
            {HeroText.map( (text) => (
                <div className={heroBoxClass} key={`hero-${text.id}`}>
                    <div className={heroTextBoxClass}>
                        <p className={heroTitleClass}>{text.title}</p>
                        <p className={heroTextClass}>{text.paragraph}</p>
                    </div>
                </div>
            ))}
            <ImageGallery />
        </div>
    );
}