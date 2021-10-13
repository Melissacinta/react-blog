import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                    {user && <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>}
                    {user && <li className="topListItem"> LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImage"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    ) :(
                        <ul className="topList">
                        <li className="topListItem"><Link to="/login" className="link">LOGIN</Link></li>
                        <li className="topListItem"><Link to="/register" className="link">REGISTER</Link></li>
                        
                        
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
