import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Caesar Wrap',
    description: 'Grilled chicken, romaine lettuce, parmesan and Caesar dressing',
    price: 19.99,
  },
  {
    id: 'm2',
    name: 'Beef BBQ Wrap',
    description: 'Slow-cooked beef, barbecue sauce, cheddar cheese and onions',
    price: 21.5,
  },
  {
    id: 'm3',
    name: 'Falafel Veggie Wrap',
    description: 'Crispy falafel, fresh vegetables and tahini sauce',
    price: 17.99,
  },
  {
    id: 'm4',
    name: 'Salmon Avocado Wrap',
    description: 'Smoked salmon, avocado, cream cheese and arugula',
    price: 23.99,
  },
  {
    id: 'm5',
    name: 'Spicy Chicken Wrap',
    description: 'Spicy grilled chicken, jalapeños, lettuce and chipotle sauce',
    price: 20.99,
  },
  {
    id: 'm6',
    name: 'Turkey Bacon Wrap',
    description: 'Sliced turkey, crispy bacon, tomato and ranch dressing',
    price: 18.5,
  },
  {
    id: 'm7',
    name: 'Caprese Wrap',
    description: 'Fresh mozzarella, tomato, basil and balsamic glaze',
    price: 16.99,
  },
  {
    id: 'm8',
    name: 'Shrimp Garlic Wrap',
    description: 'Garlic shrimp, mixed greens and creamy herb sauce',
    price: 24.5,
  },
  {
    id: 'm9',
    name: 'Steak & Cheese Wrap',
    description: 'Grilled steak strips, melted cheese and caramelized onions',
    price: 22.75,
  },
  {
    id: 'm10',
    name: 'Vegan Hummus Wrap',
    description: 'Hummus, roasted vegetables and spinach in a whole wheat tortilla',
    price: 17.5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
