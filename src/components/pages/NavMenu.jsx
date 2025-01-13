import { use } from "react";
import { Arrow } from "../../../public/assets/Arrow";

export function NavMenu(){

    return(
        <section className="nav-father">
            <Arrow></Arrow>
            <div className="nav-cont">
                <a href="/">Home</a>
                <a href="/projects">Mis Proyectos</a>
                <a href="/me">Sobre mi</a>
            </div>
        </section>
    )
}