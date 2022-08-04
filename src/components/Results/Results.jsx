import "./Results.scss";

function Results() {
   return (
      <div className="results">
         <h1>Our Results</h1>
         <div className="results__numbers">
            <div className="results__numbers-block">
               <p className="number">10x</p>
               <p>Faster cloud account setup and provisioning</p>
            </div>
            <div className="results__numbers-block">
               <p className="number">30%</p>
               <p>Savings, on average, in cloud bills</p>
            </div>
            <div className="results__numbers-block">
               <p className="number">4,000+</p>
               <p>One-click resources to automate compliance and security</p>
            </div>
         </div>
      </div>
   );
}

export default Results;
