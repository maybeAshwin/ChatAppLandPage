import './Navbar.css';


const Navbar = () => {
  return(

    <nav className='container'>
    <div className='nav'>
       
        <div className='nav-logo'>chat</div>
        <ul className='nav-menu'>
          <li className='home'><a href="#">Home</a></li>
          <li className='feature' ><a href="#Features">Features</a></li>
          <li className='about'>About</li>
          <li className='contact'>Contact</li>
          <li><button className='sign-btn'>SignUp</button></li>
        </ul>
      
    </div>
    </nav>
  )
}

export default Navbar

