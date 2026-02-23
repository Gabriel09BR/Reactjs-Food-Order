import { Fragment, useState } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import classes from './Meals.module.css';

const Meals = () => {
  const [activeCategory, setActiveCategory] = useState('wraps');

  // 👇 Coloque aqui
  const categories = ['wraps', 'drinks', 'desserts', 'alcoholic drinks', 'coffee'];

  return (
    <Fragment>
      <MealsSummary />

      {/* Tabs */}
      <div className={classes.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? classes.active : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <AvailableMeals category={activeCategory} />
    </Fragment>
  );
};

export default Meals;