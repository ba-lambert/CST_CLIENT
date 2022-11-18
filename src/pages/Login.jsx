import React from 'react'
import {useState} from 'react'
import {useLogin} from '../hooks/useLogin'
function Login() {
  const[email,setEmail] = useState('')
  const [password,setPassword]=useState('')
  const{login,isLoading,error} = useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault()
     login(email,password)
  }
  return (
    <div className="login">
        <div className="card">
            <div className="lef"t>
                <form action="post" onSubmit={handleSubmit}>
                    <input type="text" placeholder='username' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <button disabled={isLoading}>Login</button>
                    {error && <div className='error'>{error}</div>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login