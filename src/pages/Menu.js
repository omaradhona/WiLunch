import { CategorySection } from "../components/CategorySection";
import { Card } from "../components/Card";
import { useState } from "react";
import turkeyBurger from "./menu/Turkey_burger.webp";
import mushroomBurger from "./menu/mushroom_burger.webp";
import cheeseburger from "./menu/cheeseburger.webp";
import pizza from "./menu/pizza.jpeg";
import food from "./home/images/hero-img-pizza.webp";
import ssandwich from "./menu/sandwich.jpeg";

export function Menu(){
    
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ["pizza", "sandwich", "humberger", "dishes"];
    const [activeCategory, setActiveCategory] = useState(categories[activeIndex]);

    function toggle(i){
        setActiveIndex(i);
        setActiveCategory(categories[i]);
    }

    const items = [
        {
            name: "Pizza",
            category: "pizza",
            price: 300,
            image: pizza,
        },
        {
            name: "Sandwich",
            category: "sandwich",
            price: 350,
            image: ssandwich,
        },
        
        {
            name: "Turkey Burger",
            category: "humberger",
            price: 500,
            image: turkeyBurger,
        },
        {
            name: "Mushroom Burger",
            category: "humberger",
            price: 400,
            image: mushroomBurger,
        },
        {
            name: "Cheeseburger",
            category: "humberger",
            price: 300,
            image: cheeseburger,
        },
        {
            name: "Pizza",
            category: "pizza",
            price: 300,
            image: pizza,
        },
        {
            name: "Salad",
            category: "dishes",
            price: 200,
            image: food,
        },
        
        
    ]

    return (
        <>
            <CategorySection activeIndex={activeIndex} toggle={toggle} />
            <div className="container d-flex justify-content-center my-4 gap-5 flex-wrap">
                {items.map(item => 
                    <Card
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                )}
            </div>
        </>
    )
}