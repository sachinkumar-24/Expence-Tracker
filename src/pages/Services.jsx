import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { BarChart3, Wallet, Shield, PieChart } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Expense Tracking",
      description:
        "Easily add, edit, and delete your expenses with category and date filters.",
      icon: <Wallet className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Analytics & Reports",
      description:
        "Visualize your expenses with charts and graphs to track spending patterns.",
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Secure & Reliable",
      description:
        "Your data is protected with secure login and authentication features.",
      icon: <Shield className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Smart Insights",
      description:
        "Get budget alerts, saving tips, and reminders to stay on top of your finances.",
      icon: <PieChart className="w-10 h-10 text-orange-600" />,
    },
  ];

  return (
  <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-500 text-white py-16 px-6 sm:px-12 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Manage your money smarter with our expense tracking features, insights,
          and analytics.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition bg-white border-none">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to take control of your expenses?
        </h3>
        <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

export default Services;
