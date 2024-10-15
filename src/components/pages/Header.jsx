import { Git } from "../../../public/assets/git";
import { Linked } from "../../../public/assets/lnkin";

export function Header(){

    return(
        <header className="port-header">
            <div className="header-left">
                <img src="assets/flowbacano.png" width={"120px"} className=""/>
                <div className="hdr-name-job">
                <h2>Antonio Martínez Lluesma</h2> 
                <h4>Junior Full-Stack Web Developer</h4>
                </div>
                <div className="hdr-contact">
                    <h4>Número: <span>+34 692594647</span></h4>
                    <h4>Email: <span>tonimartinezlluesma@gmail.com</span></h4>
                </div>
            </div>
            <div className="header-right">
                <h4>Redes</h4>
                <div className="hdr-buttons-cont">
                <a href="https://www.linkedin.com/in/antonio-martinez-developer/" target="_blank" className="social"><Linked/></a>
                <a href="https://github.com/tonimtnz" target="_blank" className="social"><Git/></a>
                </div>
            </div>
        </header>
    )
}