import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMealById } from '../../api';
import Preloader from '../Preloader/Preloader';
import RecipeItem from '../RecipeItem/RecipeItem';

const Recipe = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then(data => {
            setRecipe(data.meals[0])
        })
    }, [id]);

    return (
        <div>
            
            {
                !recipe ? <Preloader/> : <RecipeItem recipe={recipe}/>
            }
            <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default Recipe;