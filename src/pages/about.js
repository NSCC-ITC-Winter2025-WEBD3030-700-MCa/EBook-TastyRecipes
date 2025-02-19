import React from "react"
import Layout from "../components/layout"
import foodImg from "../images/food.jpg"

const AboutPage = () => {
  return (
    <Layout>
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>About Us</h1>
      <img
        src={foodImg}
        alt="Delicious Recipes"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "auto",
            maxHeight: "400px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px",
        }}
      />
      <p
        style={{
          fontSize: "1.5em",
          color: "#555",
          lineHeight: "1.6",
          marginBottom: "30px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        Welcome to our recipe site! We are passionate about sharing delicious recipes from around the world. Our goal is to inspire you to try new dishes and enjoy cooking at home.
      </p>
    </div>
  </Layout>
  )
}

export default AboutPage