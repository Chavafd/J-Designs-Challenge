"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import map to avoid SSR issues
const MapComponent = dynamic(() => import("./map"), { ssr: false });

const locations = [
  {
    day: "Monday - Wednesday",
    location: "Downtown Plaza",
    address: "123 Main Street",
    time: "11:00 AM - 8:00 PM",
  },
  {
    day: "Thursday - Friday",
    location: "Tech Park",
    address: "456 Innovation Drive",
    time: "11:00 AM - 9:00 PM",
  },
  {
    day: "Saturday - Sunday",
    location: "Riverside Market",
    address: "789 River Road",
    time: "10:00 AM - 10:00 PM",
  },
];

export function FindUs() {
  return (
    <section id="find-us" className="py-20 bg-background">
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
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Where to <span className="text-primary">Find Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're always on the move! Check out our weekly schedule to find us
            in your neighborhood.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-lg border border-border"
              >
                <h3 className="text-xl font-display font-bold mb-3 text-primary">
                  {location.day}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{location.location}</p>
                      <p className="text-sm text-muted-foreground">
                        {location.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm">{location.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary/10 p-6 rounded-xl border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Call Us for Catering</h3>
              </div>
              <p className="text-2xl font-bold text-primary">(555) 123-4567</p>
              <p className="text-sm text-muted-foreground mt-2">
                Available for private events, parties, and corporate catering
              </p>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[600px] rounded-xl overflow-hidden shadow-lg relative z-10"
          >
            <MapComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
