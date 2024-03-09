import "./card.css";

export function Card(props){
    return (
        <>
            <div className="card col-sm-5 col-md-3 card">
                <div className="card-img">
                    <img src={props.image} alt="" />
                </div>
                
                <div className="card-body border d-flex flex-column justify-content-center">
                    <h5 className="card-title">{props.name}</h5>
                    <h4 className="card-text text-end fw-bold">{props.price + " DA"}</h4>
                </div>
            </div>
        </>
    )
}