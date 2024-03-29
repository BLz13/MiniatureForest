import "./Home.css"

import { HeroText } from "../../Utils/homeData"
import ImageGallery from "../../Components/ImageGallery/ImageGallery"

export default function Home() {

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