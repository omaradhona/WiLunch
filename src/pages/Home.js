import { Button } from "../components/Button";
import { Card } from "../components/Card";
import pizza from "./home/images/pizza.jpeg";
import food from "./home/images/hero-img-pizza.webp";
import mushroomBurger from "./menu/mushroom_burger.webp";
import { Stat } from "./home/components/Stat";
import { Slider } from "./home/components/Slider";
import galleryImage1 from "./home/images/gallery1.jpg";
import "./home.css";

export function Home(){
    return (
        <>
            <div className="container-fluid d-flex border hero-section">
                <div className="col-sm-10 col-md-6 offset-md-2 align-self-center p-5">
                    <h2>Heading Text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button buttonText="RESERVE NOW" />
                </div>
            </div>
            <div className="container py-5 mt-5">
                <h2 className="text-center">Most Purchased Items</h2>
                <div className="d-flex justify-content-around popular-items py-5 my-5">
                    <Card
                        name="Veggie Pizza"
                        image={pizza}
                        price="300"
                    />
                    <Card
                        name="Lorem Ipsum"
                        image={food}
                        price="500"    
                    />
                    <Card
                        name="Mushroom Burger"
                        image={mushroomBurger}
                        price="400"
                    />
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-around p-5 mt-5 stats-section">
                <Stat
                    number="+100"
                    infoOne="Clients"
                    infoTwo="Daily"
                />
                <Stat
                    number="+70"
                    infoOne="Foods"
                    infoTwo="to sell"
                />
                <Stat
                    number="+85%"
                    infoOne="Happy"
                    infoTwo="Clients"
                />
                <Stat
                    number="15"
                    infoOne="4-Seats"
                    infoTwo="Tables"
                />
            </div>
            <div className="container-fluid reviews-section pt-5">
                <h2 className="text-white text-center">Reviews</h2>
                <Slider />
            </div>

            <div className="container gallery-section d-flex flex-column">
                <div className="col-sm-12 d-flex">
                    <div className="col-sm-4">
                        <img src={galleryImage1} alt="" />
                    </div>
                    <div className="col-sm-8 gallery-description">
                        <div className="p-5">
                            <h1>WE OFFER HIGH QUALITY FOOD.</h1><br />
                            <h5>Clean, Organized, Relaxing atmosphere.</h5>
                            <h5>Our professional team will make sure you have the best experience.</h5>
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 offset-sm-2 image2">
                    <img src={food} alt="" />
                </div>
            </div>

            <div className="container-fluid footer d-flex justify-content-around px-5">
                <div className="col-sm-3 h-100 d-flex justify-content-center">
                    <div className="align-self-center d-flex justify-content-center flex-column timing p-3 w-100">
                        <div className="d-flex justify-content-between">
                            <h5>Saturday</h5>
                            <h5 className="times">10:00 - 00:00</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Sunday</h5>
                            <h5 className="times">10:00 - 00:00</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Monday</h5>
                            <h5 className="times">10:00 - 00:00</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Tuesday</h5>
                            <h5 className="times">10:00 - 00:00</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Wednesday</h5>
                            <h5 className="times">10:00 - 00:00</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Thursday</h5>
                            <h5 className="times">10:00 - 00:00</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Friday</h5>
                            <h5 className="times">14:00 - 00:00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 d-flex flex-column justify-content-center contact my-auto">
                    <h3 className="text-white ms-3 mb-4">Contact</h3>
                    <div className="align-self-center px-3">
                        <i className="fa-solid fa-location-dot">
                            <span className="ps-3 h5">5 Maisons, Mohammadia</span>
                        </i>
                        <i className="fa-solid fa-phone">
                            <span className="ps-3 h5">0562 63 73 97</span>
                        </i>
                        <div className="d-flex justify-content-around social">
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-square-google-plus"></i>
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </div>
                    </div> 
                </div>

                <div className="col-sm-3 d-flex flex-column">
                    <div className="map my-auto"></div>
                </div>
            </div>
        </>
    )
}