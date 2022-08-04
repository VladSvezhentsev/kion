import { auto } from "../../constants/images";
import "./Product.scss";

function Product() {
   return (
      <div className="product">
         <div className="product__text">
            <h1>The Product</h1>
            <p>
               Kion offers the only single platform approach to <br />
               <b> cloud enablement</b>, transcending cloud management and cloud
               governance by offering all three pillars necessary for total
               cloud control.
            </p>
            <button className="btn">More About the Product</button>
         </div>
         <div className="product__info">
            <img src={auto} alt="" />
            <h2>
               Automation & <br /> Orchestration
            </h2>
            <p>
               Provision accounts, get enterprise-wide visibility, and fully
               integrate the cloud with your tech stack to automate the full
               cloud lifecycle.
            </p>
            <div className="product__info-link">
               <a href="#">Learn More</a>
            </div>
         </div>
      </div>
   );
}

export default Product;
