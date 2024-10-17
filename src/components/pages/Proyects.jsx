export function Proyects({ object }) {
  return (
    <section className="port-main-container">
      <div className="proyect-main-container">
        {object.map((item, index) => (
          <div key={index} className="big-pryct-info-container">
            <div className="pryct-info-container">
              <h2 id="lit-tittle">{item.name}</h2>
              <p>{item.info}</p>
              <section className="pics-container">
                {item.href ? (
                  <a href={item.href} target="_blank">
                    Visitar sitio
                  </a>
                ) : (
                  ""                  
                  )}
                  <div className="hide-pics">
                    {item.pics.map((item, index) => (
                      <img key={index} src={item} alt="proyect-pic" />
                    ))}
                  </div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
