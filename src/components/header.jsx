import { Link } from "react-router-dom"

const Header =()=>{
    return(
        <div classNmae="App-header">
        <Link to={`/`}> 
       <h1>NC News</h1></Link>
       </div>
    
    )
}
export default Header;