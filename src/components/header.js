import * as React from "react"
import { Link } from "gatsby"
import RecipeLogo from "../images/recipe.png"

const Header = ({ siteTitle }) => (
  <header
     style={{
      width: "100%",
      padding: "20px 40px",
      backgroundColor: "#333", // Dark background for contrast
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
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
      {siteTitle}
    </Link>
    <img
      alt="Gatsby logo"
      height={20}
      style={{ margin: 0 }}
      src="./public/tasty.jpg"
    />
  </header>
)

export default Header
