import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
  <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-500 text-white h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1400/0*B_g3mqFXuBO59gBq.gif')" }}></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
            Take Control of Your Financial Journey with FinTrack
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Streamline your financial goals, track progress, and manage budgets with ease. Let us help you build a more secure future.
          </p>
          <Link
            to="/services"
            className="px-10 py-4 bg-yellow-400 text-black font-medium rounded-full text-lg transition duration-300 hover:bg-yellow-500 hover:shadow-lg inline-block"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </section>

  {/* About Us Section */}
  <section className="py-16 bg-white h-full">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-indigo-800 mb-8">ABOUT US</h1>
          <p className="text-lg text-gray-700 mx-auto max-w-3xl mb-20">
            At Savify, our mission is simple: help you achieve your financial goals through effective tracking, insightful visualizations, and intelligent budgeting tools. 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 pt-10">
            <div className="flex flex-col items-center border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Currency Dollar Icon as SVG */}
              <svg className="h-12 w-12 text-indigo-800 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0a1 1 0 011 1v2h1a1 1 0 110 2H9a1 1 0 110-2h1V1a1 1 0 011-1zM2 5a1 1 0 011-1h4a1 1 0 110 2H3a1 1 0 01-1-1zM14 4a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1zM6 9a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zM10 8a1 1 0 01-1-1v6a1 1 0 012 0V7a1 1 0 01-1 1z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-semibold">Track Your Expenses</h3>
              <p className="text-gray-600 text-center">Monitor spending and track your savings in real time.</p>
            </div>
            <div className="flex flex-col items-center border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Chart Bar Icon as SVG */}
              <svg className="h-12 w-12 text-indigo-800 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM14 7a1 1 0 011 1v6a1 1 0 11-2 0V8a1 1 0 011-1zM4 3a1 1 0 011 1v10a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-semibold">Visualize Progress</h3>
              <p className="text-gray-600 text-center">Get beautiful graphs to see how your financial health is growing.</p>
            </div>
            <div className="flex flex-col items-center border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* User Group Icon as SVG */}
              <svg className="h-12 w-12 text-indigo-800 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12 4a4 4 0 11-8 0 4 4 0 018 0zM2 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-semibold">Collaborate Together</h3>
              <p className="text-gray-600 text-center">Create joint goals and track progress with your team or family.</p>
            </div>
          </div>
         
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-500 text-white text-center mt-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-8">
            Let us help you manage your finances effectively. Take the first step towards securing your financial future today.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-white text-emerald-600 font-medium rounded-full text-lg transition duration-300 hover:bg-gray-200"
          >
            Start Now
            <svg className="h-5 w-5 inline ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v6a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M5.293 8.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
