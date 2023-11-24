import React from 'react'
import './User.css'

interface User {
  id: number;
  name: string;
  age: string;
  email: string;
  phone: string;


}

const Users  = async () => {

  const res = await  fetch('https://4c0f-103-207-1-157.ngrok-free.app/data', {cache: 'no-store'})
  const data: User [] = await res.json()
  return (
    <div className="container">
      <div className="intro">
        <h1>Form Data</h1>
        <p>This page is rendered server side where it fetch the data from the database</p>
        <p>Whenever an User Enter the Details in the Form it get Displayed Here at realtime</p>
           <br></br>
           <p>Rendered On: {new Date().toLocaleTimeString()}</p>
      </div>
      
      <div className="information">
        <ul className="card-grid">
          {data.map((user) => (
            <li className="card" key={user.id}>
              <h1>Name: {user.name}</h1>
              <h2>User Name: {user.name}</h2>
              <h3>Email: {user.email}</h3>
              <h4>Phone: {user.phone}</h4>         
            </li>
          ))}
        </ul>
      </div>

    
    </div>
  )
}

export default Users