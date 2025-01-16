import { Hobbies, Others, VidaLab } from "../info/AboutMeInfo";
import { Chamba } from "./Chamba";

export function Me(){
    return(
        <section className="about-me-page">
            <div className="me-container">
                <div className="me-info">
                    <h2 id="lit-tittle">Vida Laboral</h2>
                    <Chamba object={VidaLab}></Chamba>
                </div>
                <div className="me-info">
                    <h2 id="lit-tittle">Mis Hobbies</h2>
                    <Chamba object={Hobbies}></Chamba>
                </div>
                <div className="me-info">
                    <h2 id="lit-tittle">Otras cosas sobre mi</h2>
                    <Chamba object={Others}></Chamba>
                </div>

            {/*             <h2 className="">Esta ruta esta siendo actualizada actualmente, discupa las molestias.</h2>
             */}
            </div>
        </section>
    )
}