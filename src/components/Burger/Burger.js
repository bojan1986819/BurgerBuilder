import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props.ingredients);
    console.log(Object.keys(props.ingredients));
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey=>{
            console.log(igKey);
            console.log(props.ingredients[igKey]);
            console.log([...Array(props.ingredients[igKey])]);
            return [...Array(props.ingredients[igKey])].map((_, i)=>{
                console.log(igKey);
                console.log( <BurgerIngredient key={igKey+i} type={igKey} />);
                return <BurgerIngredient key={igKey+i} type={igKey} />;
            });
        });

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;