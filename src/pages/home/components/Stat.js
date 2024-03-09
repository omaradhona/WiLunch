export function Stat(props){
    return (
        <>
            <div className="d-flex flex-column justify-content-start align-items-center">
                <h2>{props.number}</h2><br />
                <h4 className=" text-center">
                    {props.infoOne}<br />
                    {props.infoTwo}
                </h4>
            </div>
        </>
    )
}