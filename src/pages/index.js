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
      
      {/* ✅ Navbar with Welcome Message */}
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

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>{cardData.title}</h2>
        <p style={styles.cardDescription}>{cardData.description}</p>
        <Link to={cardData.link} style={styles.cardButton}>
          View Recipe
        </Link>
      </div>

      {/* ✅ Footer Added */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} RecipeSite. All Rights Reserved.</p>
        <div style={styles.footerLinks}>
          <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
          <Link to="/terms" style={styles.footerLink}>Terms of Service</Link>
        </div>
      </footer>

    </div>
  );
};

/* ✅ Styles with Footer */
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '15px 20px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
  },
  welcomeText: {
    color: 'white',
    fontSize: '1.3em',
    fontWeight: 'bold',
    textAlign: 'center',
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
    transition: 'color 0.3s ease',
  },

  /* ✅ Footer Styles */
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
  },

  /* ✅ Card Styles */
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
  }
};

export default IndexPage;