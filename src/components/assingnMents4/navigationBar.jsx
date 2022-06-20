import {Link} from 'react-router-dom';
import "./style.css"


const NavigationBar = ()=>{
    return(
        <div className='Link_Nav'>
            <Link to='/home'>Home</Link>
            <Link to ='/student'>Student</Link>
            <Link to='/contact'>Contact</Link>

        </div>
    )
}

export default NavigationBar;