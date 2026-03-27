// ── Menu items ────────────────────────────────────────────────────────
export const menuItems = [
    {
      id:          1,
      name:        'Rajma Chawal',
      price:       99,
      description: 'Slow-cooked rajma served with steamed rice and fresh salad. A classic North Indian comfort meal.',
      tag:         'Best Seller',
      tagColor:    'orange',
      image:       'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
      calories:    '480 kcal',
      prepTime:    '20 min',
    },
    {
      id:          2,
      name:        'Paneer Thali',
      price:       149,
      description: 'Rich paneer curry, 2 soft rotis, steamed rice, fresh salad, and house pickle — a complete meal.',
      tag:         'Protein Rich',
      tagColor:    'green',
      image:       'https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80',
      calories:    '620 kcal',
      prepTime:    '25 min',
    },
    {
      id:          3,
      name:        'Dal Roti Combo',
      price:       89,
      description: 'Classic comfort food — yellow dal tadka with 3 warm rotis and mint chutney on the side.',
      tag:         'Everyday Meal',
      tagColor:    'yellow',
      image:       'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80',
      calories:    '410 kcal',
      prepTime:    '15 min',
    },
    {
      id:          4,
      name:        'Kids Healthy Meal',
      price:       119,
      description: 'Mild-flavored paneer rice bowl loaded with colorful veggies, and a fresh seasonal fruit on the side.',
      tag:         'Kids Friendly',
      tagColor:    'pink',
      image:       'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
      calories:    '380 kcal',
      prepTime:    '20 min',
    },
    {
      id:          5,
      name:        'Veg Pulao Bowl',
      price:       109,
      description: 'Fragrant basmati veg pulao cooked with whole spices, served with cooling raita and crisp salad.',
      tag:         'Light Meal',
      tagColor:    'blue',
      image:       'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80',
      calories:    '440 kcal',
      prepTime:    '25 min',
    },
    {
      id:          6,
      name:        'Chole Rice Combo',
      price:       99,
      description: 'Bold, spicy chole cooked slow with jeera rice and a tangy onion salad. Flavors that feel like home.',
      tag:         'Popular',
      tagColor:    'orange',
      image:       'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80',
      calories:    '510 kcal',
      prepTime:    '20 min',
    },
  ]
  
  // ── Tag color styles (maps tagColor → Tailwind classes) ───────────────
  export const tagStyles = {
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500' },
    green:  { bg: 'bg-green-100',  text: 'text-green-700',  dot: 'bg-green-500'  },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-500' },
    pink:   { bg: 'bg-pink-100',   text: 'text-pink-700',   dot: 'bg-pink-500'   },
    blue:   { bg: 'bg-blue-100',   text: 'text-blue-700',   dot: 'bg-blue-500'   },
  }
  
  // ── Delivery time slot options ────────────────────────────────────────
  export const deliveryTimes = [
    '12:00 PM – 1:00 PM',
    '1:00 PM – 2:00 PM',
    '7:00 PM – 8:00 PM',
    '8:00 PM – 9:00 PM',
  ]