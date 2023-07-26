import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return (
        <>
            <h3>Navbar</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </>
    )
}

export default Navbar