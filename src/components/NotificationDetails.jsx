import { useBlogContext } from '../hooks/useBlogContext'
import {useAuthContext} from "../hooks/useAuthContext"
const Announcements = ({notific})=> {
  const {dispatch} = useBlogContext()
  const {user} = useAuthContext()
  const handleClick = async(e)=>{
    e.preventDefault()
    if(!user){
      
      return
    }
    const response = await fetch('/api/'+notific._id,{
      method:'DELETE',
      headers:{
        'authorization':`Bearer ${user.token}`
      }
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type:'DELETE_NOTIFICATION', payload:json})
    }
  }
  return (
    <div className="anouncements-details">
      <h4>{notific.title}</h4>
      <p><strong>⚠️⚠️</strong>{notific.body}</p>
      <p>{notific.createdBy}</p>
      <p>{notific.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default Announcements