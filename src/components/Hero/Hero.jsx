import {
   com1,
   com2,
   com3,
   com4,
   com5,
   hero,
   hero2,
   hero3,
   hero4,
} from "../../constants/images";
import "./Hero.scss";

function Hero() {
   return (
      <div className="hero">
         <div className="hero__main">
            <div className="hero__main-text">
               <h1>Complete cloud enablement has arrived.</h1>
               <p>Oversee, secure, and scale your cloud with one solution.</p>
               <button className="btn">Request Demo</button>
            </div>
            <div className="hero__main-images">
               <img className="relative" src={hero} alt="" />
               <img className="image1" src={hero2} alt="" />
               <img className="image2" src={hero3} alt="" />
               <img className="image3" src={hero4} alt="" />
            </div>
         </div>
         <div className="hero__company">
            <img src={com1} alt="" />
            <img src={com2} alt="" />
            <img src={com3} alt="" />
            <img src={com4} alt="" />
            <img src={com5} alt="" />
         </div>
      </div>
   );
}

export default Hero;
