import Auth from '../pages/Auth'
import { AuthProps } from '../interfaces'


export const AuthWrapper =(props : AuthProps)=> {
    if(props.user){
        return props.children; 
    }
    return <Auth />
}