import React from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import './categoriesList.scss';

const CategoriesList = ({catalog}) => {
    return (
        <div className='categoriesList'>
            {catalog.map(el => {
                return <CategoriesItem key={el.idCategory} {...el}/>
            })}
        </div>
    );
};

export default CategoriesList;