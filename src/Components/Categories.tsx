import React from 'react';

type CategoriesProos = {
  value: number;
  onClickCategory: (idx: number) => void;
}

export const Categories: React.FC<CategoriesProos> = ({ value, onClickCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегитарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};