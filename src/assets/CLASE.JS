const Nav = ({ type }) => {
    if (type == "header") {
      return (
        <nav>
          <NavLink to="/categoria/electronics">electronics</NavLink>
          <NavLink to="/categoria/jewelery">jewelery</NavLink>
          <CartWidget/>
        </nav>
      )
    } else {
      return (
        <nav>
          <NavLink to="/categoria/electronics">electronics</NavLink>
          <NavLink to="/categoria/jewelery">jewelery</NavLink>
        </nav>
      )
    }
  }
  
  export default Nav