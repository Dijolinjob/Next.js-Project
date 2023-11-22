import React from 'react'
import './DynamicRendering.css'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;


}

const DynamicRendering  = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
  const data: User [] = await res.json()
  return (
    <div className="container">
      <div className="intro">
        <h1>Dynamic Server Side Rendering</h1>
        <p>This page is rendered server side where it fetch the data public api 
          <a className='link' href='https://jsonplaceholder.typicode.com/'> jsonplaceholder</a></p>
           <p>where the api send Dummy data for 10 users where we call them and display it here.</p>
           <br></br>
           <p>Rendered On: {new Date().toLocaleTimeString()}</p>
      </div>
      
      <div className="information">
        <ul className="card-grid">
          {data.map((user) => (
            <li className="card" key={user.id}>
              <h1>Name: {user.name}</h1>
              <h2>User Name: {user.username}</h2>
              <h3>Email: {user.email}</h3>         
            </li>
          ))}
        </ul>
      </div>

    
    </div>
  )
}

export default DynamicRendering