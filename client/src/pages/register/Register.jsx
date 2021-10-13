import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username..."/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email..."/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your Password"/>
                <button className="registerButton">
                <Link to="/register" className="link">Register</Link>
                    </button>
            </form>

            <button className="registerLoginButton">
                <Link to="/login" className="link">Login</Link>
                </button>
        </div>
    )
}
