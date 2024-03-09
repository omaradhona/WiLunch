import "./slider.css";

export function Slider(){
    return (
        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner container-fluid">
                    <div className="carousel-item active py-5">
                        <div className="col-6 offset-3 text-center">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <h3>John Doe</h3>
                        </div>
                    </div>
                    <div className="carousel-item py-5">
                        <div className="col-6 offset-3 text-center">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <h3>Farah Nawal</h3>
                        </div>
                    </div>
                    <div className="carousel-item py-5">
                        <div className="col-6 offset-3 text-center">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <h3>Michael Hulse</h3>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}