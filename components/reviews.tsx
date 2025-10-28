"use client";

import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp, MessageCircle } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    date: "2 weeks ago",
    platform: "Google",
    text: "Best food truck in the city! The tacos are absolutely incredible and the service is always friendly. Can't wait to come back!",
    likes: 24,
    helpful: true,
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    date: "1 month ago",
    platform: "Yelp",
    text: "The burgers here are life-changing! Fresh ingredients, perfect seasoning, and that special sauce is to die for. 10/10!",
    likes: 18,
    helpful: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4,
    date: "3 weeks ago",
    platform: "Facebook",
    text: "Great food and atmosphere! The only reason for 4 stars is the wait time during peak hours, but it's worth it!",
    likes: 12,
    helpful: true,
  },
  {
    id: 4,
    name: "David Park",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    date: "1 week ago",
    platform: "Instagram",
    text: "Instagram brought me here and I'm so glad it did! The presentation is beautiful and the taste is even better. #FoodTruckGems",
    likes: 31,
    helpful: true,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    date: "4 days ago",
    platform: "TripAdvisor",
    text: "We hired them for our corporate event and everyone was raving about the food! Professional, punctual, and delicious.",
    likes: 15,
    helpful: true,
  },
  {
    id: 6,
    name: "Carlos Martinez",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    rating: 5,
    date: "2 months ago",
    platform: "Google",
    text: "Authentic flavors that remind me of my grandmother's cooking. This is what street food should be!",
    likes: 28,
    helpful: true,
  },
];

const stats = {
  average: 4.8,
  total: 1247,
  distribution: [
    { stars: 5, count: 892 },
    { stars: 4, count: 287 },
    { stars: 3, count: 52 },
    { stars: 2, count: 12 },
    { stars: 1, count: 4 },
  ],
};

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-secondary/30">
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
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers
            across all platforms.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 mb-12 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Overall Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <span className="text-5xl font-bold">{stats.average}</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(stats.average)
                            ? "fill-primary text-primary"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stats.total.toLocaleString()} reviews
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Rated on Google, Yelp, Facebook, and more
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {stats.distribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm w-3">{item.stars}</span>
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.count / stats.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * (6 - item.stars) }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {review.platform} • {review.date}
                    </p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {review.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.likes}</span>
                </button>
                <span className="text-xs text-muted-foreground">
                  {review.helpful && "Helpful"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Follow us on social media for updates and special offers!
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Leave a Review
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-secondary text-foreground font-semibold rounded-full hover:bg-secondary/80 transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
