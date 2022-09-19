import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className='nav'>
        <ul>
          <li><NavLink to='/users' >Users</NavLink></li>
          <li><NavLink to='/profile' >Profile</NavLink></li>
          <li><NavLink to='/chat' >Chat</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav