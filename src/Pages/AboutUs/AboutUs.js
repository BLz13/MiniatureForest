import {ABOUTUSINFO} from "../../Services/aboutUsData"

export default function AboutUs() {
    return(
        <div>
            {ABOUTUSINFO.map( (info) => (                
                <div key={`paragraph-${info.id}`} className="section" >
                    <h2 className="subtitle" >{info.title}</h2>
                    <p className="paragraph" >{info.paragraph}</p>
                </div>                
            ))}
        </div>
    );
}
