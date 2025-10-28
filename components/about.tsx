"use client";

import { motion } from "framer-motion";
import { Award, Heart, Users, Truck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with passion and authentic recipes",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in street food innovation",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Supporting local farmers and building connections",
  },
  {
    icon: Truck,
    title: "Always Mobile",
    description: "Bringing gourmet food to your neighborhood",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&q=80"
                alt="Food truck"
                fill
                className="object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-8 right-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl"
              >
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2014, Sabor en Ruedas began as a dream to bring
              authentic, high-quality street food to communities across the
              city. What started as a single food truck has grown into a beloved
              culinary destination.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that great food should be accessible to everyone. Our
              chefs combine traditional recipes with modern techniques, using
              only the freshest locally-sourced ingredients to create dishes
              that tell a story with every bite.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
