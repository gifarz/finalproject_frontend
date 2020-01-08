import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const Token = sessionStorage.getItem("token")
  const Roles = sessionStorage.getItem("roles")

  const handleSignOut = () => {
    sessionStorage.clear("token")
    window.location.replace('/login')
  }

  const handleRegister = () => {
    window.location.replace('/register')
  }

  const handleLogin = () => {
    window.location.replace('/login')
  }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" style={{backgroundColor: "#0d0c0c"}}>
        <NavbarBrand href="/" style={{color: "white"}}>@YourLibrary</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {Token ? 
            <>
              {Roles === "2" ? (
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/dashboard" style={{color: "white"}}>Dashboard</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/addbook" style={{color: "white"}}>Add Book</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/users" style={{color: "white"}}>Manage User</NavLink>
                  </NavItem>
                </Nav>
              )
              :
              (
                <>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/dashboard" style={{color: "white"}}>Dashboard</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/book" style={{color: "white"}}>List of Book</NavLink>
                  </NavItem>
                </Nav>
                </>
              )
              }
                <>
                  <NavbarText className="ml-auto" navbar> 
                    <button className="btn btn-danger" onClick={handleSignOut}>
                      Logout
                    </button> 
                  </NavbarText>
                </>
            </>
                  :
                <div className="ml-auto"> 
                  <NavbarText style={{marginRight: "10px"}}> 
                    <button className="btn btn-primary" onClick={handleRegister}> 
                      Register
                    </button> 
                  </NavbarText>
                  <NavbarText> 
                    <button className="btn btn-danger" onClick={handleLogin}>
                      Login
                    </button> 
                  </NavbarText>
                </div>
          }
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;


// import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// const NavBar = (props) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <Navbar color="light" light>
//         <NavbarBrand href="/" className="mr-auto">React-Challenge</NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!collapsed} navbar>
//           <Nav navbar>
//             <NavItem>
//               <NavLink href="/about">About</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/profile">Profile</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/signup">Signup</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/signin">Signin</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/register">Register</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/login">Login</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/book">Book</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default NavBar;
