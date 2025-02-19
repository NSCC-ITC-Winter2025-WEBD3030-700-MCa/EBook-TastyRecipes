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
