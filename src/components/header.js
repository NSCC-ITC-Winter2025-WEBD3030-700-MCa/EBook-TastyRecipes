import * as React from "react"
import { Link } from "gatsby"
import RecipeLogo from "../images/recipe.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      width:"100%",
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <img
      alt="Recipe logo"
      style={{ margin: 0, maxWidth: "100%", height: "40px" }}
      src={RecipeLogo}
    />

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>Home</Link>
        
        <Link to="/about" style={{ color: "black", textDecoration: "none" }}>About</Link>
      </nav>
  </header>
)

export default Header
