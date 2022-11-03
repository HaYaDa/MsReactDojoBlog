import logo from '../logo.svg';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    let logoV = <img src={logo} className="App-logo" alt="logo" />; 
    let logoV2 = <img src={logo} className=" App-logo App-logo2" alt="logo" />;

    return ( 
        <nav className="navbar">
            <div>
            
            <h1>{logoV}The Dojo Blog{logoV2}</h1>
            </div>
            
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/" style={{
                    // color: 'white',
                    backgroundColor: '#f2f2f2',
                    borderRadius: "0.5rem" 
                }}>InlineStyle</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;