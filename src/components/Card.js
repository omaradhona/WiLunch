import "./card.css";

export function Card(props){
    return (
        <>
            <div className="card col-sm-5 col-md-3">
                
                <img src={props.image} />
                
                
                <div className="card-body border">
                    <h5 className="card-title">{props.name}</h5>
                    <h4 className="card-text text-end fw-bold">
                        {props.price + " DA"}
                    </h4>
                </div>
            </div>
        </>
    )
}