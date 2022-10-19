import logo from '../logo.svg';

const Navbar = () => {
    let logoV = <img src={logo} className="App-logo" alt="logo" />; 
    let logoV2 = <img src={logo} className=" App-logo App-logo2" alt="logo" />;

    return ( 
        <nav className="navbar">
            <div>
            
            <h1>{logoV}The Dojo Blog{logoV2}</h1>
            </div>
            
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <a href="/" style={{
                    // color: 'white',
                    backgroundColor: '#f2f2f2',
                    borderRadius: "0.5rem" 
                }}>InlineStyle</a>
            </div>
        </nav>
     );
}
 
export default Navbar;