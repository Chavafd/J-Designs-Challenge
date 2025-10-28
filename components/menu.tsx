"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Flame, Leaf, Star } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Tacos", "Burgers", "Bowls", "Desserts", "Drinks"];

const menuItems = [
  {
    id: 1,
    name: "Carne Asada Taco",
    category: "Tacos",
    description: "Grilled marinated steak with cilantro, onions, and lime",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80",
    spicy: true,
    featured: true,
  },
  {
    id: 2,
    name: "Al Pastor Taco",
    category: "Tacos",
    description: "Marinated pork with pineapple, cilantro, and onions",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80",
    spicy: true,
    featured: false,
  },
  {
    id: 3,
    name: "Fish Taco",
    category: "Tacos",
    description: "Beer-battered fish with cabbage slaw and chipotle mayo",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400&q=80",
    spicy: false,
    featured: false,
  },
  {
    id: 4,
    name: "Veggie Taco",
    category: "Tacos",
    description: "Grilled vegetables with black beans and avocado",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
    spicy: false,
    featured: false,
    vegetarian: true,
  },
  {
    id: 5,
    name: "Gourmet Beef Burger",
    category: "Burgers",
    description: "Angus beef patty with aged cheddar, bacon, and special sauce",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    spicy: false,
    featured: true,
  },
  {
    id: 6,
    name: "Spicy Chicken Burger",
    category: "Burgers",
    description: "Crispy chicken with jalapeños, pepper jack, and chipotle aioli",
    price: "$10.50",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80",
    spicy: true,
    featured: false,
  },
  {
    id: 7,
    name: "Mushroom Swiss Burger",
    category: "Burgers",
    description: "Sautéed mushrooms, Swiss cheese, and truffle mayo",
    price: "$11.00",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
    spicy: false,
    featured: false,
  },
  {
    id: 8,
    name: "Veggie Burger",
    category: "Burgers",
    description: "House-made black bean patty with avocado and sprouts",
    price: "$9.50",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80",
    spicy: false,
    featured: false,
    vegetarian: true,
  },
  {
    id: 9,
    name: "Burrito Bowl",
    category: "Bowls",
    description: "Rice, beans, protein of choice, and all the toppings",
    price: "$11.50",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    spicy: false,
    featured: true,
  },
  {
    id: 10,
    name: "Poke Bowl",
    category: "Bowls",
    description: "Fresh tuna, rice, edamame, avocado, and sesame dressing",
    price: "$13.00",
    image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=400&q=80",
    spicy: false,
    featured: false,
  },
  {
    id: 11,
    name: "Buddha Bowl",
    category: "Bowls",
    description: "Quinoa, roasted vegetables, chickpeas, and tahini",
    price: "$10.00",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    spicy: false,
    featured: false,
    vegetarian: true,
  },
  {
    id: 12,
    name: "Tres Leches Cake",
    category: "Desserts",
    description: "Traditional Latin American sponge cake soaked in three milks",
    price: "$7.00",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&q=80",
    spicy: false,
    featured: false,
  },
  {
    id: 13,
    name: "Crepes",
    category: "Desserts",
    description: "Thin French pancakes with Nutella, strawberries, and whipped cream",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80",
    spicy: false,
    featured: false,
  },
  {
    id: 14,
    name: "Jamaica",
    category: "Drinks",
    description: "Refreshing hibiscus tea served over ice",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    spicy: false,
    featured: false,
  },
  {
    id: 15,
    name: "Fresh Lemonade",
    category: "Drinks",
    description: "House-made lemonade with fresh mint",
    price: "$3.00",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80",
    spicy: false,
    featured: false,
  },
];

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Culinary <span className="text-primary">Masterpieces</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every dish is crafted with passion, using the freshest ingredients
            and authentic recipes passed down through generations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/50"
                  : "bg-background hover:bg-secondary border border-border"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-display font-bold">{item.name}</h3>
                  <span className="text-2xl font-bold text-primary">
                    {item.price}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{item.description}</p>

                {/* Icons */}
                <div className="flex items-center gap-2">
                  {item.spicy && (
                    <span className="flex items-center gap-1 text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded-full">
                      <Flame className="w-3 h-3" />
                      Spicy
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="flex items-center gap-1 text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full">
                      <Leaf className="w-3 h-3" />
                      Veggie
                    </span>
                  )}
                </div>

                {/* Add to Order Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Add to Order
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
