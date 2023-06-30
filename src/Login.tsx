import React, { useState } from "react";
import { login, logout } from './store'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const dispatch = useDispatch()
  const [newUsername, setNewUsername] = useState<string>('')
  const username = useSelector((state: any) => state.user.value.username)
  
  return (
    <div>
      <h1>Login</h1>
       {username != '' && <span>Good to see you {username}!</span>}
      <input 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value)}
        type="text" 
        placeholder="Your username" 
      />
      <button onClick={() => dispatch(login({username: newUsername}))}>Login</button>
      <button onClick={() => dispatch(logout())} >Log out</button>
    </div>
  )
}

export default Login