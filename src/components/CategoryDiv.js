export function CategoryDiv(props){
    return (
        <>
            <div className={props.isActive ? "fs-3 py-2 px-4" : "fs-3 py-2 px-4 non-active-divs"}
                style={{
                    color: props.isActive ? "#13ad7b" : "white",
                    backgroundColor: props.isActive ? "white" : "",
                    cursor: "pointer",
                }}
                onClick={props.toggle}>
                <i className={props.icon + " pe-3"}></i>
                <span>{props.category}</span>
            </div>
        </>
    )
}