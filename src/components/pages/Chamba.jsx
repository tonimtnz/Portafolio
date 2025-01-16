export function Chamba({object}){
    return(
        <div className="me-info-cont">
            {object.map((item , index) => (
                <div key={index} className="me-each-info">
                    <div className="each-title">
                        {item.name ? (<h2 id="me-tittle">{item.name}</h2>) : ("")}
                        {item.chamba ? (<h3>{item.chamba}</h3>):("")}
                        {item.yrs ? (<h4>{item.yrs}</h4>) : ("")}
                    </div>
                    <p>{item.descript}</p>
                </div>
            ))}
        </div>
    )
}