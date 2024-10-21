import { Link } from "react-router-dom"

export function Footer(){
    return(
        <footer className="da-footah">
            <div className="ftr-dad">
                <a href="/"><button className="nav-btn">Home</button></a>
                <p>Este website ha sido creado por Antonio Martínez Lluesma&copy;</p>
                <a href="/me"><button className="nav-btn">+ Sobre mi</button></a>
            </div>
        </footer>
    )
}