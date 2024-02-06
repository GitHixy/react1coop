import "./main.css";
import Btn from "../btn/Btn"
import InputText from "./inputText/InputText";

const Main = () => {
    return (
        <main>
            <Btn className="mainBtn" text="Explore The World"/>
            <h1>Experience all <br /> the delights of <br /><span>the Alps</span></h1>
            <p>Find the best spots in the Alps</p>
            <InputText />
        </main>
    )
}

export default Main;