import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

export default function AppNavbar() {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <Navbar
      bg={dark ? "dark" : "light"}
      variant={dark ? "dark" : "light"}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Expense Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/summary">
              Monthly Summary
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
          </Nav>

          {/* Dark‑mode button */}
          <Button size="sm" variant={dark ? "light" : "dark"} onClick={toggle}>
            {dark ? "Light mode" : "Dark mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
