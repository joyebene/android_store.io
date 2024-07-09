import blob from '../img/blob.jpg';



const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-color pt-3 fixed-top">
        <div className="container">
            <a href="#" className="navbar-brand"><img src={blob} alt={blob} className='logo' /><span className='text-secondary p-3'>Android Store</span></a>

            <button 
            className='navbar-toggler'
            type='button'
            data-bs-toggle="collapse"
            data-bs-target="#navItems"
            ><span className='navbar-toggler-icon'></span></button>

            <div id='navItems' className='navbar-collapse collapse'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'><a href="#about-us" className='nav-link text-secondary'>About</a></li>
                    <li className='nav-item'><a href="#top-sale" className='nav-link text-secondary'>Top Sale</a></li>
                    <li className="nav-item"><a href="#product" className="nav-link text-secondary">Product</a></li>
                  <li className="nav-item"><a href="#FAQ" className="nav-link text-secondary">FAQ</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link text-secondary">Contact</a></li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Nav