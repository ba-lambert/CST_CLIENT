import {useAuthContext} from './useAuthContext'
import {useBlogContext} from './useBlogContext'
export const useLogout = ()=>{
    const {dispatch} = useAuthContext()
    const {dispatch : blogDispatch} = useBlogContext()
    const logout =()=>{
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        blogDispatch({type:'SET_BLOGS',payload:null})
    }
    return {logout}
}