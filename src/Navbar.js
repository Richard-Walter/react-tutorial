import { Link } from "react-router-dom";

//Arrow function or function - it doesnt matter
const Navbar = () => {
    return (

        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <Link to="/">Home</Link>
                {/* even styles can be dynamic  */}
                <Link to="/create"
                 style={
                    {
                        color: " white",
                        backgroundColor:'#f1356d',
                        borderRadius: '8px'

                    }
                }>New blog</Link> 
            </div>
        </nav>

    );
}

export default Navbar;