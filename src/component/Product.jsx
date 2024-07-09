import oppo2 from '../img/oppo2.jpg';
import iTel from '../img/iTel.jpg';
import Infinix from '../img/Infinix.webp';
import Techno from '../img/Techno.jpg';
import Samsung from '../img/Samsung.jpg';
import Vivo from '../img/Vivo.png';
import Techno2 from '../img/Techno2.webp';
import "../index.css";


const Product = () => {
  return (
    <div id="product" className='color3'>
        <div className="container">
          <div className='pt-5 text-center'>
            <h1>Recommended For You</h1></div>
            <div className="pt-3 con">

              <div className='m-3 movie' style={{backgroundColor: "#00A272"}}>
                <div className='movie2 text-center px-3'>
              <img src={oppo2} alt={oppo2} className='img-fluid'/></div>
              <div className='bg-white'><h6 className='px-5 my-2'>oppo a16s</h6></div>
              <div><h3 className='px-1'>oppo-a16s-smartphone-5000mah-long-lasting-battery-ram-4gb-rom-64gb</h3></div>
              </div>
              <div className='m-3 movie' style={{backgroundColor: "#00A272"}}>
                <div className='movie2 text-center px-3'>
              <img src={iTel} alt={iTel} className='img-fluid'/></div>
              <div className='bg-white'><h6 className='px-5 my-2 pt-3'>iTel A60</h6></div>
              <div><h3 className='px-1'>iTel-A60s-5000mah-4gb-32gb</h3></div>
              </div>
              <div className='m-3 movie' style={{backgroundColor: "#00A272"}}>
                <div className='movie2 text-center px-3'>
              <img src={Infinix} alt={Infinix} className='img-fluid'/></div>
              <div className='bg-white'><h6 className='px-5 my-2 pt-2'>Infinix Smart 7</h6></div>
              <div><h3 className='px-1'>Infinix-Smart-7-HD</h3></div>
              </div>
              <div className='m-3 movie' style={{backgroundColor: "#00A272"}}>
                <div className='movie2 text-center px-3'>
              <img src={Techno} alt={Techno} className='img-fluid'/></div>
              <div className='bg-white'><h6 className='px-5 my-2 pt-3 fs-1'>Techno Camon 20 pro</h6></div>
              <div><h3 className='px-1'>Tecno-Camon-20-Pro</h3></div>
              </div>
              <div className='m-3 movie' style={{backgroundColor: "#00A272"}}>
                <div className='movie2 text-center px-3'>
              <img src={Samsung} alt={Samsung} className='img-fluid'/></div>
              <div className='bg-white'><h6 className='px-5 my-2 pt-3'>Samsung Galaxy S14</h6></div>
              <div><h3 className='px-1'>Samsung-Galaxy-S14</h3></div>
              </div>
              <div className='m-3 movie' style={{backgroundColor: "#00A272"}}>
                <div className='movie2 text-center px-3'>
              <img src={Techno2} alt={Techno2} className='img-fluid'/></div>
              <div className='bg-white'><h6 className='px-5 my-2 pt-3'>Techno Camon 20</h6></div>
              <div><h3 className='px-1'>Techno Camon-20-Premier-5G</h3></div>
              </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Product