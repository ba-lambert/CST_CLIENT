import { useState } from "react"
import { useBlogContext } from '../hooks/useBlogContext'
import {useAuthContext} from "../hooks/useAuthContext"
export default function Notificationform() {
    const { dispatch}  = useBlogContext()
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [createdBy,setCreatedBy] = useState('')
    const [err,setErr] = useState(null)
    const {user} =useAuthContext()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!user){
            setErr('you must be logged in')
            return
        }
        const notification = {title,body,createdBy}
        const response = await fetch('/api/post',{
            method:'POST',
            body: JSON.stringify(notification),
            headers: {
                'Content-Type':'application/json',
                'authorization':`Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(!response.ok){
            setErr(json.error)
        }
        if(response.ok){
            setBody('')
            setTitle('')
            setCreatedBy('')
            setErr(null)
            console.log('new Notification Added',json)
            dispatch({type:'CREATE_BLOG',payload:json})
        }
    }
  return (
    <form className="Notificationform" onSubmit={handleSubmit}>
        <h3>Add a notification</h3>
        <label>Title of a notification</label>
        <input
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
        />
        <label>Description</label>
        <input
            type="text"
            onChange={(e)=>setBody(e.target.value)}
            value={body}
        />
        <label>Posted By:</label>
        <input
            type="text"
            onChange={(e)=>setCreatedBy(e.target.value)}
            value={createdBy}
        />
        <button>Add a notification</button>
    </form>
  )
}
