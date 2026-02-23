import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_ITEMS = [
  // WRAPS
  {
    id: 'm1',
    category: 'wraps',
    name: 'Chicken Caesar Wrap',
    description: 'Grilled chicken, romaine lettuce, parmesan and Caesar dressing',
    price: 19.99,
  },
  {
    id: 'm2',
    category: 'wraps',
    name: 'Beef BBQ Wrap',
    description: 'Slow-cooked beef, barbecue sauce, cheddar cheese and onions',
    price: 21.5,
  },
  {
    id: 'm3',
    category: 'wraps',
    name: 'Falafel Veggie Wrap',
    description: 'Crispy falafel, fresh vegetables and tahini sauce',
    price: 17.99,
  },
  {
    id: 'm4',
    category: 'wraps',
    name: 'Salmon Avocado Wrap',
    description: 'Smoked salmon, avocado, cream cheese and arugula',
    price: 23.99,
  },
  {
    id: 'm5',
    category: 'wraps',
    name: 'Spicy Chicken Wrap',
    description: 'Spicy grilled chicken, jalapeños, lettuce and chipotle sauce',
    price: 20.99,
  },

  // DRINKS
  {
    id: 'm6',
    category: 'drinks',
    name: 'Iced Lemon Tea',
    description: 'Refreshing iced tea with lemon',
    price: 6.5,
  },
  {
    id: 'm7',
    category: 'drinks',
    name: 'Sparkling Water',
    description: 'Chilled sparkling water (350ml)',
    price: 4.5,
  },
  {
    id: 'm8',
    category: 'drinks',
    name: 'Orange Juice',
    description: 'Fresh orange juice (300ml)',
    price: 7.99,
  },
  {
    id: 'm9',
    category: 'drinks',
    name: 'Coca-Cola',
    description: 'Classic Coke (350ml)',
    price: 6.99,
  },
  {
    id: 'm10',
    category: 'drinks',
    name: 'Chocolate Milkshake',
    description: 'Creamy chocolate shake (400ml)',
    price: 12.5,
  },


// Desserts
{
  id: 'm11',
  category: 'desserts',
  name: 'Chocolate Brownie',
  description: 'Warm brownie with chocolate chips',
  price: 14.99,
},
{
  id: 'm12',
  category: 'desserts',
  name: 'Cheesecake',
  description: 'Classic creamy cheesecake',
  price: 16.5,
},
{
  id: 'm13',
  category: 'desserts',
  name: 'Ice Cream Sundae',
  description: 'Vanilla ice cream with chocolate syrup',
  price: 13.99,
},
//Coffee
  {
    id: 'c1',
    name: 'Espresso',
    description: 'Strong and bold single-shot coffee',
    price: 6.5,
    category: 'coffee',
  },
  {
    id: 'c2',
    name: 'Double Espresso',
    description: 'Two shots of rich espresso',
    price: 8.0,
    category: 'coffee',
  },
  {
    id: 'c3',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and milk foam',
    price: 12.0,
    category: 'coffee',
  },
  {
    id: 'c4',
    name: 'Latte',
    description: 'Smooth espresso with creamy steamed milk',
    price: 13.0,
    category: 'coffee',
  },
  {
    id: 'c5',
    name: 'Mocha',
    description: 'Chocolate-flavored latte with whipped cream',
    price: 14.5,
    category: 'coffee',
  },
  {
    id: 'c6',
    name: 'Iced Coffee',
    description: 'Chilled brewed coffee served over ice',
    price: 11.0,
    category: 'coffee',
  },
//alcoholic  Drinks
  {
    id: 'a1',
    name: 'Draft Beer',
    description: 'Freshly poured local draft beer',
    price: 15.0,
    category: 'alcoholic drinks',
  },
  {
    id: 'a2',
    name: 'Craft IPA',
    description: 'Hoppy and aromatic craft beer',
    price: 18.0,
    category: 'alcoholic drinks',
  },
  {
    id: 'a3',
    name: 'Red Wine (Glass)',
    description: 'Dry red wine served by the glass',
    price: 22.0,
    category: 'alcoholic drinks',
  },
  {
    id: 'a4',
    name: 'White Wine (Glass)',
    description: 'Chilled white wine with fruity notes',
    price: 22.0,
    category: 'alcoholic drinks',
  },
  {
    id: 'a5',
    name: 'Whiskey',
    description: 'Premium aged whiskey served neat',
    price: 28.0,
    category: 'alcoholic drinks',
  },
  {
    id: 'a6',
    name: 'Vodka Shot',
    description: 'Classic vodka served chilled',
    price: 16.0,
    category: 'alcoholic drinks',
  },

];

const AvailableMeals = (props) => {
  const filteredItems = DUMMY_ITEMS.filter(
    (item) => item.category === props.category
  );

  const mealsList = filteredItems.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
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