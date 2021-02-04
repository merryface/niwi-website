import React from 'react';

let Category = ({ label, handleClick }) => (
    <>
        <button onClick={ handleClick }>{ label }</button>
    </>
)

export default Category;