import { BlogContext } from "../context/BlogContext";
import { useContext } from "react";
export const useBlogContext = ()=>{
    const context = useContext(BlogContext)
    if(!context){
        throw Error('context must be used')
    }
    return context
}