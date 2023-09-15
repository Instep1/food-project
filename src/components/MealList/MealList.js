import { useNavigate } from 'react-router-dom';
import React from 'react';
import Meal from '../Meal/Meal';
import './mealList.scss';

const MealList = ({meals}) => {

    const navigate = useNavigate();

    return (
        <>
        <button className='btn' onClick={() => navigate(-1)}>Go back</button>
        <div className='mealList'>
            {meals.map(el => {
                return <Meal key={el.idMeal} {...el}/>
            })}
        </div>
        </>
    );
};

export default MealList;