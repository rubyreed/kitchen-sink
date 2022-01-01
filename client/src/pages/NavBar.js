import React, {useContext} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";
import { Container, Menu } from "semantic-ui-react";



const NavBar = () => {
  let nav = useNavigate();

  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return <button onClick={() => handleLogout(nav)}>Logout</button>;
    }
  return (
    <Menu>
      <Menu.Item>
         <Link to="/register">Register</Link>
      </Menu.Item>
      <Menu.Item>
       <Link to="/login">Login</Link>
       </Menu.Item>
    </Menu>
    )
  }
    return(
      <Menu>
        <Menu.Item>
        <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/public">Public</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/protected">Protected</Link>
        {renderAuthLinks()}
        </Menu.Item>
      <Container>
        <Outlet/>
      </Container>
    </Menu>
  )
};


export default NavBar;