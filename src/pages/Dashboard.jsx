import React from 'react'

const Dashboard = () => {
  return (
    <div>

        
              
                  <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
                  <p className="text-gray-600 mt-2">Welcome to our dashboard</p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"> 
                      <div className="p-6 bg-white shadow rounded-xl">
                        <h2 className="font-semibold text-gray-700">Users</h2>
                        <p className="text-3xl font-bold text-blue-600">1250</p>
                      </div>

                      <div className="p-6 bg-white shadow rounded-xl">
                        <h2 className="font-semibold text-gray-700">Total Income</h2>
                        <p className="text-3xl font-bold text-blue-600">1.2Cr</p>
                      </div>

                      <div className="p-6 bg-white shadow rounded-xl">
                        <h2 className="font-semibold text-gray-700">Total Expense</h2>
                        <p className="text-3xl font-bold text-blue-600">1Cr</p>
                      </div>
                  </div>
           
            
      
    </div>
  )
}

export default Dashboard