import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteAll = () => {
    setIsLoading(true);

    const token = JSON.parse(localStorage.getItem("token"));
    console.log("token:", token);

    axios
      .delete("https://notesbackend-ware.onrender.com/api/v1/notes", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("response:", response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error:", error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/homepage" className="navbar-brand">Home</Link>
          <Nav className="me-auto">
            <Link to="/addnote" className="nav-link">AddNote</Link>
            <Nav.Link href="#features" onClick={handleDeleteAll}>
              {isLoading ? "Deleting..." : "DeleteAll"}
            </Nav.Link>
            <Nav.Link href="#pricing">Export</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
