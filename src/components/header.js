import * as React from "react"
import { Link } from "gatsby"
import tastyIcon from "../images/tasty.jpg";

const Header = ({ siteTitle }) => (
  <header
     style={{
      width: "100%",
      padding: "0px 20px",
      backgroundColor: "#333", // Dark background for contrast
      display: "flex",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    }}
  >
    
    <Link
    
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <img src={tastyIcon} alt="Tasty Logo" style={{height: "70px", width: "70px"}} />
      </div>
    </Link>
    <Link
    to="/"
    style={{
      fontSize: `var(--font-sm)`,
      textDecoration: `none`,
    }}
  >
    <div style={{position: "absolute", top: "55px", left: "50%", transform: "translate(-50%, -50%)",
    }}>

    {siteTitle}
    </div>
    </Link>

  </header>
  
)

export default Header
