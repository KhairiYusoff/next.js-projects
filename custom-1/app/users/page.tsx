import React from 'react'
import ProductCard from '../components/ProductCard'

interface User {
  id:number,
  name: string,
  email: string
}

const UsersPage = async () => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {revalidate:10}
  })
  const users: User[] = await res.json()
  console.log(users)

  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user=><tr key={user.id}>
        <td>{user.email}</td>
        <td>{user.name}</td>
      </tr>)}

      </tbody>
    </table>
    </>

  )
}

export default UsersPage