import { Link } from "react-router-dom"
import logo from '../utils/logo.png'
const Header =()=>{
    return(
        <Link to={`/articles`}> 
        <img src ={logo}  alt="logo"></img> </Link>

    
    )
}
export default Header;