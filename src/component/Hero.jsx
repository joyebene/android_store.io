import image from "../img/image.png";
import image2 from "../img/image2.png";

const Hero = () => {
  return (
    <div className="color">
      <div className="container">
        {/* for large screen size */}

        <div className="d-none d-sm-block">
          <div className="d-flex  justify-content-end">
            <div className="py-5">
              <h1 className="px-5 text-primary fs-1 py-2">New Age</h1>
              <p className="lead fw-bold text-white">
                smart, portable and reliable
              </p>
              <p className="px-5 text-white">Place Your Order Now!</p>
              <button className="btn-start">shop now</button>{" "}
              <a
                href="#about-us"
                style={{ textDecoration: "none" }}
                className="px-5 fs-5"
              >
                learn more...
              </a>
            </div>

            <img src={image} alt={image} className="img-size  " />
          </div>
        </div>

        {/* for small screen size */}

        <div className="d-sm-none">
          <div className="text-center">
            <div className="py-5">
              <h1 className="px-5 text-primary fs-1 py-2">New Age</h1>
              <p className="lead fw-bold text-white">
                smart, portable and reliable
              </p>
              <p className="px-5 text-white">Place Your Order Now!</p>
              <button className="btn-start">shop now</button>{" "}
              <a
                href="#about-us"
                style={{ textDecoration: "none" }}
                className="px-5 fs-5"
              >
                learn more...
              </a>
            </div>
            <img src={image2} alt={image2} className="img-size2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
