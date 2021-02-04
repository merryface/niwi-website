import React from 'react';

let Category = ({ label, handleClick }) => (
    <>
        <button className="categories_button" onClick={ handleClick }>{ label }</button>
    </>
)

export default Category;