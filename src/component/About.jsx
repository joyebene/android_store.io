import image3 from '../img/image3.png';

const About = () => {
  return (
    <div className='pt-5 bg-primary' id='about-us'>
        <div className="container">
           
            <div className='text-center'>
                <h2 className='py-2 fw-bold'>About us</h2>
                <p>Our store comprises of any kind of android devices that is best for our customers. We offer only quality product with <span className='fw-bold text-warning'> 6 months guarantee</span></p><p>What are you waiting for place your order now to experience the <span className='fw-bold' style={{color:"#4A4453"}}> new age!</span></p>
            </div>
            <div>
                <img src={image3} alt={image3} className='img-fluid'/>
            </div>
        </div>
    </div>
  )
}

export default About;