import React from 'react';
import Meal from '../Meal/Meal';
import './mealList.scss';

const MealList = ({meals}) => {
    return (
        <div className='mealList'>
            {meals.map(el => {
                return <Meal key={el.idMeal} {...el}/>
            })}
        </div>
    );
};

export default MealList;