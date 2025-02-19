import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  // Sample data for the card (you can replace this with dynamic data if needed)
  const cardData = {
    title: "Delicious Spaghetti",
    description: "Indulge in foreign flavours",
    link: "/recipes/spaghetti", // Link to the detailed recipe page
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      {/* Logo Image */}
      <img 
        src="tasty.jpg" 
        alt="Recipe Site Logo"
        style={{
          maxWidth: '200px',  
          marginBottom: '20px',
        }}
      />
      
      <h1>Welcome to My Recipe Site</h1>
      
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Welcome to My Recipe Site</h1>
        <h2 style={{ fontSize: "1.2em", color: "#555", marginBottom: "30px", textAlign: "center", width: "100%"}}>
          Discover delicious recipes from around the world. <br/> Whether you're a beginner or a seasoned chef, <br/> our collection of recipes will inspire your next meal.
        </h2>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "300px",
            margin: "20px auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h2 style={{ fontSize: "1.8em", margin: "10px 0" }}>
            {cardData.title}
          </h2>
          <p style={{ color: "#555", fontSize: "1.1em", marginBottom: "15px" }}>
            {cardData.description}
          </p>
          <Link
            to={cardData.link}
            style={{
              textDecoration: "none",
              backgroundColor: "#3498db",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            View Recipe
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;