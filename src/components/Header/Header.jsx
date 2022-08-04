import { logo, logo2, search } from "../../constants/images";
import "./Header.scss";

function Header() {
   return (
      <div className="wrapper">
         <header className="header">
            <div className="header__logo">
               <img src={logo} alt="" />
               <img src={logo2} alt="" />
            </div>
            <nav className="header__nav">
               <ul className="header__nav-links">
                  <li className="header__nav-links-link">
                     <a href="#"> Product </a>
                  </li>
                  <li className="header__nav-links-link">
                     <a href="#"> Resources </a>
                  </li>
                  <li className="header__nav-links-link">
                     <a href="#"> Support </a>
                  </li>
                  <li className="header__nav-links-link">
                     <a href="#"> About </a>
                  </li>
               </ul>
            </nav>
            <div className="header__info">
               <img src={search} alt="" />
               <button className="btn">Schedule Demo</button>
            </div>
         </header>
      </div>
   );
}

export default Header;
