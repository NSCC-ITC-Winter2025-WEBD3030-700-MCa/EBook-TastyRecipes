import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1>About Us</h1>
        <p>Welcome to Tasty E-Books! We are passionate about sharing delicious recipes from around the world.</p>
        <p>Our mission is to bring you easy-to-follow, tasty recipes that you can try at home.</p>
        <p>Stay tuned for more amazing food ideas!</p>
      </div>
    </Layout>
  );
};

export default AboutPage;