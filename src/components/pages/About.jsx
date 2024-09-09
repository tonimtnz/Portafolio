import { Css } from "../../assets/Css";
import { Html5 } from "../../assets/Html5";
import { Js } from "../../assets/Js";
import { VS } from "../../assets/VS";
import { Vs2 } from "../../assets/Vs2"
import { Post } from "../../assets/Post"
import { ReactLogo } from "../../assets/ReactLogo";
import { Vite } from "../../assets/Vite";
import { Next } from "../../assets/Next";
import { Angular } from "../../assets/Angular";
import { Mongo } from "../../assets/Mongo";
import { Java } from "../../assets/Java";


export function About (){

    return(
        <section className="port-main-container">
            <div className="content-cont">
                <div className="about-me-cont">
                    <h2 id="lit-tittle">Sobre Mi:</h2>
                    <p>Durante este último año he descubierto en la
                        programación un mundo que me apasiona. Empecé ese
                        camino de forma autodidacta hasta dar con un Bootcamp
                        de Full-Stack web Developer con DevelHope, y gracias
                        a eso hoy puedo decir que he aprendido
                        lo necesario para considerarme un programador
                        totalmente funcional, con un mayor desarrollo en el
                        FrontEnd a priori, pero con una pasión desarrollada durante
                        este curso por el BackEnd. Durante los primeros meses de mis estudios
                        aprendí sobre JavaScript, HTML y CSS, una gran base que con el paso de
                        las semanas fue cobrando sentido. Visual Studio Code ha sido el editor
                        de código donde he realizado todas mis prácticas y proyectos, destacando
                        entre estos proyectos los dos últimos, los cuales fueron desarrollados en
                        Vite y Next. 
                    </p>
                </div>
                <div className="form-cont">
                    <div className="tools-cont">
                        <h2 id="lit-tittle">Lenguajes de programación</h2>
                        <div className="logo-cont">
                            <a className="logo-info"><Html5/><p>HTML5</p></a>
                            <a className="logo-info"><Css/><p>CSS3</p></a>
                            <a className="logo-info"><Js/><p>JAVASCRIPT</p></a>
                        </div>
                    </div>
                    <div className="tools-cont">
                        <h2 id="lit-tittle">Mis editores de código</h2>
                        <div className="logo-cont">
                            <a className="logo-info"><VS/><p>VS CODE</p></a>
                            <a className="logo-info"><Vs2/><p>VISUAL STUDIO</p></a>
                            <a className="logo-info"><Post/><p>PGADMIN</p></a>
                        </div>
                    </div>
                    <div className="tools-cont">
                        <h2 id="lit-tittle">Mis frameworks favoritos</h2>
                        <div className="logo-cont">
                            <a className="logo-info"><ReactLogo/><p>REACT</p></a>
                            <a className="logo-info"><Vite/><p>VITE</p></a>
                            <a className="logo-info"><Next/><p>NEXT</p></a>
                        </div>
                    </div>
                    <div className="tools-cont">
                        <h2 id="lit-tittle">Intentando mejorar en</h2>
                        <div className="logo-cont">
                            <a className="logo-info"><Angular/><p>ANGULAR</p></a>
                            <a className="logo-info"><Java/><p>JAVA</p></a>
                            <a className="logo-info"><Mongo/><p>MONGODB</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}