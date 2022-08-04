import { com6, com7, com8, logoBig, play } from "../../constants/images";
import "./Info.scss";

function Info() {
   return (
      <div className="info ">
         <div className="info__difference wrapper">
            <div className="info__difference-text">
               <h1>The Kion Difference</h1>
               <p>
                  We deliver more than just the features to manage and govern
                  your cloud. Kion gives you a comprehensive solution for your
                  cloud to enable your organization to achieve more.
               </p>
               <p className="diff">Our differences</p>
               <ul>
                  <li>Cloud-native access</li>
                  <li>A private, self-hosted architecture</li>
                  <li>Multi-cloud control</li>
                  <li>A single, intuitive interface</li>
               </ul>
               <a href="#">Learn More</a>
            </div>
            <div className="info__difference-video">
               <img className="kion" src={logoBig} alt="" />
               <img className="play" src={play} alt="" />
            </div>
         </div>
         <div className="info__built">
            <h1>Built For</h1>
            <div className="info__built-comp">
               <img src={com6} alt="" />
               <img src={com7} alt="" />
               <img src={com8} alt="" />
            </div>
         </div>
         <div className="info__start">
            <h1>
               Start your cloud <br /> enablement journey.
            </h1>
            <p>Request a demo today</p>
            <button className="btn">Request Demo</button>
         </div>
      </div>
   );
}

export default Info;
