import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
export const TopBar = () => {
  return (
 <header className="flex justify-between items-center px-8 bg-white">
  <Link to="/">
  <img src={Logo} alt="Logo" className="w-20"/>
  </Link>
  <nav className="flex items-center gap-4">
    <ul className="flex gap-4" >
      
    <li><Link to="/" className="text-gray-500 hover:text-blue-500">Home</Link></li>
    <li><Link to="/" className="text-gray-500 hover:text-blue-500">Cart</Link></li>
    <li><Link to="/" className="text-gray-500 hover:text-blue-500">Whishlist</Link></li>
    
      
    </ul>
    <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Register</Link>
  </nav>
  {/* <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div> */}
        {/* </nav>
      </div>
    </div>
  </div> */}
 </header>
  );
  
  
}