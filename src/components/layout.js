/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    
        <main style={{ flex: 1 }}>{children}</main>
        <footer
          style={{
            marginTop: "auto",
            fontSize: "var(--font-sm)",
            padding: "1rem",
            background: "#f8f8f8",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Kyle Stevens; Tonnette Cunningham; Bhavya Mungra; Josh Runas</a>
        </footer>
      </div>
    
  )
}

export default Layout
