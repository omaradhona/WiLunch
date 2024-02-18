import { CategoryDiv } from "./CategoryDiv";
import "./categorySection.css";

export function CategorySection(props){
    return (
        <div className="container-fluid d-flex justify-content-around categories-section flex-wrap py-2">
            <CategoryDiv
                isActive={props.activeIndex===0}
                category="Pizza"
                icon="fa-solid fa-pizza-slice"
                toggle={() => props.toggle(0)}
            />
            <CategoryDiv
                isActive={props.activeIndex===1}
                category="Sandwich"
                icon="fa-solid fa-hotdog"
                toggle={() => props.toggle(1)}
            />
            <CategoryDiv
                isActive={props.activeIndex===2}
                category="Humberger"
                icon="fa-solid fa-burger"
                toggle={() => props.toggle(2)}
            />
            <CategoryDiv
                isActive={props.activeIndex===3}
                category="Dishes"
                icon="fa-solid fa-bowl-food"
                toggle={() => props.toggle(3)}
            />
        </div>
    )
}