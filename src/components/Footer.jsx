import './Footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
    <footer>
        <div className="container">
        <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                <span className="logo">StreamingFEX</span>
                </div> 
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="menu">
                        <span>Menu</span>    
                        <li>
                        <Link to="/home">Home</Link>
                        </li>    
                        <li>
                            <Link to="/category/Streaming">Streaming</Link>
                        </li>    
                        <li>
                            <Link to="/category/Apple">Editables</Link>
                        </li>   
                        <li>
                            <Link to="/category/Xiaomi">Google Sheets</Link>
                        </li>
                    </ul>
                </div>
        
                <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="address">
                    <span>Contacto</span>       
                    <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>   
                    </li>
                    <li>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </li> 
                    <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i> 
                    </li> 
                </ul>
                </div>
            </div> 
        </div>
    </footer>
    )
}
export default Footer;