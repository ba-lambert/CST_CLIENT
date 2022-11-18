import { useEffect } from 'react'
import Announcements from '../components/NotificationDetails'
import Notificationform from '../components/Notificationform'
import { useBlogContext } from '../hooks/useBlogContext'
import {useAuthContext} from "../hooks/useAuthContext"
function Home() {
  const {notification,dispatch}  = useBlogContext()
  const {user} = useAuthContext() 
  useEffect(()=>{
    const fetchNotification = async()=>{
      const response =await fetch('/api/getNotifications',{
      headers:{
        'authorization':`Bearer ${user.token}`
      }
      }
      )
      const json =await response.json()
      if(response.ok){
        dispatch({type:'SET_BLOGS',payload:json})
      }
    }
    if(user){
      fetchNotification()
    }
  },[dispatch,user])
  return (
    <div className='home'>
        <div className="notification">
          {notification && notification.map((notific)=>(
            <Announcements key={notific._id} notific={notific}/>
          ))}
        </div>
        <Notificationform />
    </div>
  )
}

export default Home