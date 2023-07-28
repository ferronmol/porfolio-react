import { Link, NavLink  } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className="nav-bar">
       <Link className="logo" to='/'>
         <img src={LogoS} alt="logo" />
         <span className='text-logo'>J F Design</span>
        
       </Link>
       <nav>
          <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#8FBC8B" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
              <FontAwesomeIcon icon={faUser} color="#8FBC8B" />
          </NavLink>
          <NavLink exact="true" activeclassname="active"className="contact-link" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#8FBC8B" />
          </NavLink>

       </nav>
       <ul>
         <li>
           <a href="https://www.linkedin.com/in/juan-ferron-paterna-76063869/" 
           target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faLinkedin} color="#8FBC8B" /> 
           </a>
         </li>
         <li>
           <a href="http://github.com/ferronmol" 
           target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faGithub} color="#8FBC8B" /> 
           </a>
         </li>
       </ul>
    </div>
)

export default Sidebar