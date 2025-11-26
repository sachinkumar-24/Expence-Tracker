import React, { useEffect, useState } from 'react'

const Manage = () => {
  //finace manage form and list another side


  const [expenses, setExpenses]=useState(JSON.parse(localStorage.getItem("expenses"))||[]);//state to hold and manipulate expense array

  const [form, setForm]=useState({ //state for form inputs handling and manipulation
    title:"",
    category:"",
    amount:"",
    date:"",
    desc:"",
  })

  

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses));
  },[expenses])


  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!form.title||!form.category||!form.date||!form.amount)
    {
      alert("Please check again and fill mandatory fields")
      return;
    }

    const newExpense={
      id:Date.now(),
      ...form
    }

    setExpenses([newExpense,...expenses]);

    setForm({
      title:"",
    category:"",
    amount:"",
    date:"",
    desc:"",
    })
  };


  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (
    <div className='flex gap-3 bg-gray-200 p-6 rounded-lg'>

      <div className='bg-white p-6 rounded-lg shadow-md flex-1  max-w-md'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <input type="text" name='title' value={form.title} onChange={handleChange}  placeholder="Enter title" className='p-2 border border-gray-300 rounded' />
              <input type="number" name='amount' value={form.amount} onChange={handleChange} placeholder="Enter amount" className='p-2 border border-gray-300 rounded' />
              <select className='p-2 border border-gray-300 rounded' name='category' value={form.category} onChange={handleChange}>
                <option>Select category</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="utilities">Utilities</option> 
                <option value="transport">Transport</option>
                <option value="utilities">Utilities</option>
              </select>
              <input type="date" name='date' value={form.date} onChange={handleChange} className='p-2 border border-gray-300 rounded'  />


             <textarea name="desc" value={form.desc} onChange={handleChange} className='p-2 border border-gray-300 rounded' placeholder="Enter description"></textarea>

              <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Submit</button>
          </form>


      </div>

      <div className='bg-white p-6 rounded-lg shadow-md flex-1'>
          <h2 className='text-2xl font-bold mb-4'>Expenses List</h2>

          {expenses.length===0?(
            <p>No expenses yet added. Kindly add one.</p>
          ):
          (
            <ul className='space-y-4 '>
              {expenses.map((exp)=>(
                <li key={exp.id}
                className='flex justify-between items-center p-4 border rounded-lg hover:shadow-md transition'>

                  <div>
                    <h3 className='font-semibold text-gray-800 mb-2'>{exp.title}</h3>
                    <p className='text-sm text-gray-500'><span className='bg-green-200 px-2 py-1 rounded-lg'>{exp.category}</span> | {exp.date}</p>
                    <p className='text-sm text-blue-500'>{exp.desc}</p>
                  </div>

                  <span className='font-bold text-blue-600'>₹{exp.amount}</span>
                  
                </li>
              ))}
            </ul>
          )}

      </div>

    </div>
  )
}

export default Manage