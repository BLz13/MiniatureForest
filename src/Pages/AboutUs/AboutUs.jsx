import {ABOUTUSINFO} from "../../Utils/aboutUsData"

export default function AboutUs() {
    return(
        <>
            {ABOUTUSINFO.map( (info) => (                
                <div key={`paragraph-${info.id}`} className={`section${info.id}`} >
                    <h2 className="subtitle" >{info.title}</h2>
                    <p className="paragraph" >{info.paragraph}</p>
                </div>                
            ))}
        </>
    );
}
