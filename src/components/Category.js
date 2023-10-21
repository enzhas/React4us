import React from 'react';
import { useParams } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams();
  return (
    <div>
      <h1>{categoryName}</h1>
      {/* Add category-specific content here */}
    </div>
  );
}

export default Category;