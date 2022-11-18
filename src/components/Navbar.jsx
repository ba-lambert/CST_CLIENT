import React from 'react'
import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'
function Navbar() {
  const {logout} = useLogout()
  const {user} = useAuthContext()
  const handleClick = ()=>{
    logout()
  }
  return (
    <header>
      <div className="nav">
      <Link to="/">
          <h1>Cst</h1>
        </Link>
        {user &&(
        <div>
          <span>{user.email}</span>
          <button onClick={handleClick}>Log Out</button>
        </div>
        )}
        {(!user &&
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">SignUp</Link>
        </div>
        )}
        
      </div>
    </header>
  )
}

export default Navbar