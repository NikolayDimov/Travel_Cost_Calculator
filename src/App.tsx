import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div>
        <label htmlFor="starting_point">Starting Point</label>
        <input id="starting_point" placeholder="Madrid" name="starting_point"></input>
      </div>
      <div>
        <label htmlFor="destination_1">Destination</label>
        <input id="destination_1" placeholder="London" name="destination_1"></input>
      </div>
      <button>+ Add Destination</button>
      <select>
        <option>Car</option>
        <option>Train</option>
        <option>Bus</option>
      </select>
      <div>
        <label htmlFor="expense_name">Expense Name</label>
        <input id="expense_name" placeholder="" name="expense_name"></input>
      </div>
      <div>
        <p>Total Amount: $456</p>
        <button type="submit">Submit</button>
      </div>
    </>
  )
}

export default App
