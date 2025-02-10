import React from "react"
import { Link } from "gatsby"

console.log("✅ Navbar component loaded!")  // Debugging log

const Navbar = () => {
  return (
    <nav style={{
      background: "blue",  // ✅ Temporary background to check visibility
      padding: "10px",
      textAlign: "center"
    }}>
      <ul style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
