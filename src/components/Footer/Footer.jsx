import {
   facebook,
   instagram,
   linkedin,
   logo,
   twitter,
} from "../../constants/images";
import "./Footer.scss";

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__main">
            <div className="footer__main-product">
               <p>Our Product</p>
               <ul className="list__top">
                  <li>Product Overview</li>
                  <li>Automation & Orchestration</li>
                  <li>Financial Management</li>
                  <li>Continuous Compliance</li>
               </ul>
               <ul className="list__bottom">
                  <li>Integrations</li>
                  <li>Request a Demo</li>
                  <li>Try Kion For Free</li>
               </ul>
               <button className="btn">Schedule Demo</button>
            </div>
            <div className="footer__main-info">
               <div className="footer__main-info__text">
                  <div className="footer__main-info__text-block">
                     <p>Resources</p>
                     <ul className="list__top">
                        <li>All Resources</li>
                        <li>Blog</li>
                        <li>Case Studies</li>
                     </ul>
                  </div>
                  <div className="footer__main-info__text-block">
                     <p>Support</p>
                     <ul className="list__top">
                        <li>Support Overview</li>
                        <li>FAQs</li>
                     </ul>
                  </div>
                  <div className="footer__main-info__text-block">
                     <p>About</p>
                     <ul className="list__top">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                     </ul>
                  </div>
                  <div className="footer__main-info__text-block">
                     <img width={60} height={60} src={logo} alt="" />
                  </div>
               </div>
               <div className="footer__main-info__newsletter">
                  <div className="footer__main-info__newsletter-heading">
                     <p>Sign up for our monthly newsletter</p>
                  </div>
                  <div className="footer__main-info__newsletter-input">
                     <input type="email" placeholder="Email*" />
                     <button className="btn">Subscribe</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer__bottom">
            <div className="footer__bottom-links">
               <img src={twitter} alt="" />
               <img src={facebook} alt="" />
               <img src={linkedin} alt="" />
               <img src={instagram} alt="" />
            </div>
            <div className="footer__bottom-license">
               <span>License Agreement</span>
               <span>Privacy Policy</span>
            </div>
            <div className="footer__bottom-copy">
               <span>Copyright © 2022 Nor Labs, Inc. All rights reserved.</span>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
