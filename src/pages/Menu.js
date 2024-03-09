import { CategorySection } from "../components/CategorySection";
import { Card } from "../components/Card";
import { useState } from "react";

import turkeyBurger from "./menu/Turkey_burger.webp";
import mushroomBurger from "./menu/mushroom_burger.webp";
import cheeseburger from "./menu/cheeseburger.webp";
import burgerVeggie from "./menu/burgerVeggie.webp";
import burgerChickpea from "./menu/burgerChickpea.webp";

import pizza from "./menu/pizza.jpeg";
import stlouisPizza from "./menu/stlouisPizza.jpg";
import greekPizza from "./menu/greekPizza.jpg";
import californiaPizza from "./menu/californiaPizza.jpg";

import food from "./home/images/hero-img-pizza.webp";
import tofu from "./menu/tofu.webp";
import somTam from "./menu/somTam.webp";
import hummus from "./menu/hummus.webp";
import chiliCrab from "./menu/chiliCrab.webp";
import chickenRice from "./menu/chickenRice.webp";
import chickenParm from "./menu/chickenParm.webp";

import sandwich from "./menu/sandwich.jpeg";
import meatballSandwich from "./menu/meatballSandwich.jpg";
import seafoodSandwich from "./menu/seafoodSandwich.jpg";
import roastBeefSandwich from "./menu/roastBeefSandwich.jpg";

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
            name: "St Louis Pizza",
            category: "pizza",
            price: 400,
            image: stlouisPizza,
        },
        {
            name: "Greek Pizza",
            category: "pizza",
            price: 400,
            image: greekPizza,
        },
        {
            name: "California Pizza",
            category: "pizza",
            price: 500,
            image: californiaPizza,
        },

        {
            name: "Veggie Sandwich",
            category: "sandwich",
            price: 350,
            image: sandwich,
        },
        
        {
            name: "Meatball Sandwich",
            category: "sandwich",
            price: 350,
            image: meatballSandwich,
        },
        {
            name: "Seafood Sandwich",
            category: "sandwich",
            price: 350,
            image: seafoodSandwich,
        },
        {
            name: "Roast Beef Sandwich",
            category: "sandwich",
            price: 350,
            image: roastBeefSandwich,
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
            name: "Cheese Pizza",
            category: "pizza",
            price: 300,
            image: pizza,
        },

        {
            name: "Tofu",
            category: "dishes",
            price: 200,
            image: tofu,
        },
        {
            name: "Som Tam",
            category: "dishes",
            price: 200,
            image: somTam,
        },
        {
            name: "Hummus",
            category: "dishes",
            price: 200,
            image: hummus,
        },
        {
            name: "Chili Crab",
            category: "dishes",
            price: 200,
            image: chiliCrab,
        },
        {
            name: "Chicken Rice",
            category: "dishes",
            price: 200,
            image: chickenRice,
        },
        {
            name: "Chicken Parm",
            category: "dishes",
            price: 200,
            image: chickenParm,
        },
    ]

    return (
        <>
            <CategorySection activeIndex={activeIndex} toggle={toggle} />
            <div className="container d-flex justify-content-center my-4 gap-5 flex-wrap items">
                {items.filter(e => e.category === activeCategory).map((item, i) => 
                    <Card
                        key={i}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                )}
            </div>
        </>
    )
}