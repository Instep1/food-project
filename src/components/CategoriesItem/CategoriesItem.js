import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesItem = ({idCategory, strCategory, strCategoryThumb, strCategoryDescription}) => {
    return (
        <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt='img-food'/>
        </div>
        <div className="card-content">
        <span className="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className="card-action">
            <Link to={`/category/${idCategory}`} className='btn'>Watch category</Link>
        </div>
      </div>
    );
};

export default CategoriesItem;