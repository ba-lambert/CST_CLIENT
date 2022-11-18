import React from 'react'
import {useState} from 'react'
import {useSignup} from '../hooks/useSignup'
function Register() {
  const[email,setEmail] = useState('')
  const [password,setPassword]=useState('')
  const{signup,isLoading,error} = useSignup()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await signup(email,password)
  }
  return (
    <div className="Register">
        <div className="card">
            <div className="lef"t>
                <form action="post" onSubmit={handleSubmit}>
                    <input type="text" placeholder='username' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <button disabled={isLoading}>Register</button>
                    {error && <div className='error'>{error}</div>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register