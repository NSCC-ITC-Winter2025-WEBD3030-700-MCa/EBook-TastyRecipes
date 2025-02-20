import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  // Sample data for the card (you can replace this with dynamic data if needed)
  const cardData = {
    title: 'Delicious Spaghetti',
    description: 'Indulge in foreign flavours',
    link: '/recipes/spaghetti', // Link to the detailed recipe page
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      
      {/* ✅ Animated Navbar with Welcome Message */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <h1 style={styles.logo}>🍽️ RecipeSite</h1>
          <h2 style={styles.welcomeText}>Welcome to My Recipe Site</h2>
          <div style={styles.navLinks}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/recipes" style={styles.navLink}>Recipes</Link>
            <Link to="/about" style={styles.navLink}>About</Link>
          </div>
        </div>
      </nav>

      {/* ✅ Animated Recipe Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>{cardData.title}</h2>
        <p style={styles.cardDescription}>{cardData.description}</p>
        <Link to={cardData.link} style={styles.cardButton}>
          View Recipe
        </Link>
      </div>

      {/* ✅ Footer with Social Media Links */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} RecipeSite. All Rights Reserved.</p>
        <div style={styles.footerLinks}>
          <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
          <Link to="/terms" style={styles.footerLink}>Terms of Service</Link>
        </div>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" style={styles.socialLink}>📘</a>
          <a href="https://twitter.com" style={styles.socialLink}>🐦</a>
          <a href="https://instagram.com" style={styles.socialLink}>📷</a>
        </div>
      </footer>

    </div>
  );
};

/* ✅ Updated Styles with Animations */
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '15px 20px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  logo: {
    color: 'white',
    fontSize: '1.8em',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease-in-out',
  },
  welcomeText: {
    color: 'white',
    fontSize: '1.3em',
    fontWeight: 'bold',
    textAlign: 'center',
    animation: 'fadeIn 1.5s ease-in-out',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.1em',
    padding: '10px',
    transition: 'color 0.3s ease, transform 0.2s',
  },
  navLinkHover: {
    color: '#f39c12',
    transform: 'scale(1.1)',
  },

  /* ✅ Animated Card Styles */
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    animation: 'slideUp 1s ease-in-out',
  },
  cardTitle: {
    fontSize: '1.8em',
    margin: '10px 0',
  },
  cardDescription: {
    color: '#555',
    fontSize: '1.1em',
    marginBottom: '15px',
  },
  cardButton: {
    textDecoration: 'none',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    display: 'inline-block',
    transition: 'background 0.3s ease, transform 0.2s',
  },
  cardButtonHover: {
    backgroundColor: '#2980b9',
    transform: 'scale(1.05)',
  },

  /* ✅ Footer with Social Media Links */
  footer: {
    backgroundColor: '#222',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
  },
  footerLinks: {
    marginTop: '10px',
  },
  footerLink: {
    color: '#f39c12',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '0.9em',
    transition: 'color 0.3s ease',
  },
  socialIcons: {
    marginTop: '15px',
    fontSize: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  socialLink: {
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
  socialLinkHover: {
    transform: 'scale(1.2)',
  },

  /* ✅ Animations */
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  '@keyframes slideUp': {
    '0%': { transform: 'translateY(20px)', opacity: 0 },
    '100%': { transform: 'translateY(0)', opacity: 1 },
  },
};

export default IndexPage;
