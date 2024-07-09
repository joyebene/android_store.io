import th from "../img/th.jpg";
import spark from "../img/spark.jpg";
import Redmi from "../img/Redmi.png";
import vivo from "../img/vivo.jpg";
import "../index.css";

const TopSales = () => {
  return (
    <div className="color2" id="top-sale">
      <div className="container">
        <div className="text-center pt-5">
          <h2 className="fw-bold text-decoration-underline">Top Sales</h2>
        </div>
      
        <div className="pt-3 con">
          <div className=" m-3 movie">
            <div className=" text-center px-5">
              <img src={th} alt={th} className="img-fluid" /></div>
              <div className="pt-3">
                <h6 className="px-5">OPPO A17</h6>
              </div>
              <div className="px-5">Price: 150k</div>
            
          </div>

          <div className=" m-3 movie">
            <div className=" text-center">
              <img
                src={spark}
                alt={spark}
                className="img-fluid"
                style={{ width: "250px" }}
              /></div>
              <div className="pt-3">
                <h6 className="px-5 pt-1">Spark 20</h6>
              </div>
              <div className="px-5">Price: 145k</div>
            
          </div>

          <div className="m-3 movie">
            <div className=" text-center p-5 py-2">
              <img src={Redmi} alt={Redmi} className="img-fluid pt-2" /></div>
              <div className="pt-3">
                <h6 className="px-5 pt-1">Redmi 13c</h6>
              </div>
              <div className="px-5">Price: 145k</div>
            </div>
          

          <div className="m-3 movie">
            <div className="text-center p-5 py-3">
              <img src={vivo} alt={vivo} className="img-fluid " /></div>
              <div className="pt-3">
                <h6 className="px-5 pt-1">vivo Y22</h6>
            </div>
            <div className="px-5">Price: 150k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSales;
