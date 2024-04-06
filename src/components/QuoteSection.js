import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection(){
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Cooking is like love, it should be entered into with abandon or not at all</p>
            <p className="qoute-auther">- Harriet Van Horne</p>
        </div>
    )
}