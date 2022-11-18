import { createContext, useReducer } from 'react'
export const BlogContext = createContext()
export const BlogReducer = (state,action)=>{
    switch(action.type){
        case 'SET_BLOGS':
            return{
                notification:action.payload
            }
        case 'CREATE_BLOG':
            return{
                notification : [action.payload, ...state.notification]
            }
        case 'DELETE_NOTIFICATION':
            return{
                notification : state.notification.filter((w) =>w._id !== action.payload._id)
            }
        default:
            return state
    }
} 
export const BlogContextProvider = ({ children })=>{
    const [state,dispatch] = useReducer(BlogReducer,{
        notification:null
    })
    return(
        <BlogContext.Provider value={{...state,dispatch}}>
            { children }
        </BlogContext.Provider>
    )
}