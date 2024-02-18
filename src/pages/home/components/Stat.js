export function Stat(props){
    return (
        <>
            <div>
                <h2>{props.number}</h2><br />
                <h4 className="text-center">
                    {props.infoOne}<br />
                    {props.infoTwo}
                </h4>
            </div>
        </>
    )
}