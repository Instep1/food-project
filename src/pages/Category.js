import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategories } from '../api';
import Preloader from '../components/Preloader/Preloader';
import MealList from '../components/MealList/MealList';

const Category = () => {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategories(name).then(data => {
            setMeals(data.meals)
        })
    }, [name])
    return (
        <div>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/> }
        </div>
    );
};

export default Category;