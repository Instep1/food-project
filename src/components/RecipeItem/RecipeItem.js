import React from 'react';
import './recipeItem.scss';

const RecipeItem = (props) => {
    return (
        <div className='recipe'>
            <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal} />
            <h1>{props.recipe.strMeal}</h1>
            <h6>Category: {props.recipe.strCategory}</h6>
            {props.recipe.strArea ? <h6>Area: {props.recipe.strArea}</h6> : null}
            <p>Recipe: {props.recipe.strInstructions}</p>

            <table className='centered'>
                <thead>
                    <tr><th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(props.recipe).map(key => {
                            if(key.includes('Ingredient') && props.recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{props.recipe[key]}</td>
                                        <td>{
                                            props.recipe[`strMeasure${key.slice(13)}`]
                                            }</td>
                                    </tr>
                                )
                            }
                            return null;
                        })
                    }
                </tbody>
            </table>

            {props.recipe.strYoutube ?
            <div className="row">
                <h5 style={{margin: '2rem 0 1.5rem'}}>Video Recipe:</h5>
                <iframe title={props.recipe.idMeal} src={`https://www.youtube.com/watch?v=${props.recipe.strYoutube.slice(-11)}`} allowFullScreen/> 
            </div>
            : null}
        </div>
    );
};

export default RecipeItem;