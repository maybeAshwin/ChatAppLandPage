import './Navbar.css';


const Navbar = () => {
  return (

    <nav className='container'>
    <div className='nav'>
      
        <div className='nav-logo'>chat</div>

        <ul className='nav-menu'>
          <li className='home'>Home</li>
          <li className='feature' >Features</li>
          <li className='about'>About</li>
          <li className='contact'>Contact</li>
          <li><button className='sign-btn'>SignUp</button></li>
        </ul>
      
    </div>
    </nav>
  )
}

export default Navbar

