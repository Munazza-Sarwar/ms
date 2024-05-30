import { useNavigate } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const navigate = useNavigate();

    function showmenu(){
        document.getElementById("navLinks").style.right = "0";
      }
  
      function hidemenu(){
        document.getElementById("navLinks").style.right = "-200px";
      }
    return(
        <div>
            <section className="header">
            <nav>
            <img src="media/logo_man.png" onClick={() => {navigate("/")}}/>
            <div className="company">
                <h1>SumUp</h1>
            </div>
            <div className="nav-links" id="navLinks">
                <i className="fa fa-times" onClick={hidemenu}></i>
                <ul>
                    <li onClick={() => {navigate("/")}}>HOME</li>
                    <li onClick={() => {navigate("/about")}}>ABOUT</li>
                    <li onClick={() => {navigate("/videos")}}>VIDEOS</li>
                    <li onClick={() => {navigate("/reviews")}}>REVIEWS</li>
                </ul>
            </div>
            <i className="fa fa-bars" onClick={showmenu}></i>
            </nav>
        </section>

        </div>
    )
}

export default Header;