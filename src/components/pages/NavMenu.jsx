import { use } from "react";
import { Arrow } from "../../../public/assets/Arrow";
import { Home } from "../../../public/assets/Home";
import { Folder } from "../../../public/assets/Folder";
import { MeIcon } from "../../../public/assets/MeIcon";

export function NavMenu(){

    return(
        <section className="nav-menu">
            <div className="nav-father">
                <div className="nav-arrow">
                    <Arrow></Arrow>
                </div>
                <div className="nav-cont">
                    <a href="/">Home</a>
                    <a href="/projects">Mis Proyectos</a>
                    <a href="/me">+ Sobre mi</a>
                </div>
            </div>
            <div className="nav-icons">
                <a href="/"><Home></Home></a>
                <a href="/projects"><Folder></Folder></a>
                <a href="/me"><MeIcon></MeIcon></a>
            </div>
        </section>
    )
}