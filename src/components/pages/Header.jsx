import { Git } from "../../../public/assets/git";
import { Linked } from "../../../public/assets/lnkin";

export function Header(){

    return(
        <header className="port-header">
            <div className="header-left">
                <a href="/"><img src="assets/flowbacano.png" alt="mi foto" aria-label="Back to home" width={"120px"} className=""/></a>
                <div className="hdr-name-job">
                <h2>Antonio Martínez Lluesma</h2> 
                <h3>Junior Full-Stack Web Developer</h3>
                </div>
                <div className="hdr-contact">
                    <h4>Número: <span>+34 692594647</span></h4>
                    <h4>Email: <span>tonimartinezlluesma@gmail.com</span></h4>
                </div>
            </div>
            <div className="header-right">
                <h4>Redes</h4>
                <div className="hdr-buttons-cont">
                <a href="https://www.linkedin.com/in/antonio-martinez-developer/" target="_blank" aria-label="Mira mi perfil en linkedin" className="social"><Linked/></a>
                <a href="https://github.com/tonimtnz" target="_blank" aria-label="Mira mi Github" className="social"><Git/></a>
                </div>
            </div>
        </header>
    )
}