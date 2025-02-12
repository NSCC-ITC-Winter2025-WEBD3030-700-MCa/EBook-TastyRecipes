import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold mb-4">Oops! Page Not Found</h1>
      {/* StaticImage component is used to display the 404 error image */}
      <StaticImage
        src="../images/404-error-page.png"
        alt="404 Page Not Found"
        placeholder="blurred"
        className="w-96 mx-auto"
      />
      <p className="text-xl mb-6">
        The page you're looking for doesn't exist. It might have been removed, or the URL could be incorrect.
      </p>
      <a href="/" className="text-blue-500 underline">
        Go back to the homepage
      </a>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Page Not Found" />

export default NotFoundPage