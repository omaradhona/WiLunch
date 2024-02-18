import "./button.css";

export function Button(props){
    return (
        <>
            <button className="custom-button">{props.buttonText}</button>
        </>
    )
}