import React, { useState } from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  // Sample recipes data with categories
  const recipes = [
    { id: 1, title: 'Delicious Spaghetti', category: 'Pasta', description: 'Indulge in foreign flavors', link: '/recipes/spaghetti' },
    { id: 2, title: 'Vegetable Stir-Fry', category: 'Vegetarian', description: 'Healthy and delicious', link: '/recipes/vegetarian-stir-fry' },
    { id: 3, title: 'Chocolate Cake', category: 'Desserts', description: 'Sweet and rich dessert', link: '/recipes/chocolate-cake' },
    { id: 4, title: 'Classic Lasagna', category: 'Pasta', description: 'Layered with cheese and sauce', link: '/recipes/lasagna' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter recipes based on category selection
  const filteredRecipes = selectedCategory === 'All' ? recipes : recipes.filter(recipe => recipe.category === selectedCategory);

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

      {/* ✅ Categories Section */}
      <div style={styles.categories}>
        <h3>Select a Category:</h3>
        <div style={styles.categoryButtons}>
          {['All', 'Pasta', 'Vegetarian', 'Desserts'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={selectedCategory === category ? styles.activeCategory : styles.categoryButton}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Display Filtered Recipes */}
      <div style={styles.recipeList}>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} style={styles.card}>
            <h2 style={styles.cardTitle}>{recipe.title}</h2>
            <p style={styles.cardDescription}>{recipe.description}</p>
            <Link to={recipe.link} style={styles.cardButton}>
              View Recipe
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ Footer */}
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

/* ✅ Updated Styles */
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

  /* ✅ Categories Section */
  categories: {
    marginTop: '20px',
    textAlign: 'center',
  },
  categoryButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  categoryButton: {
    padding: '10px 15px',
    border: '1px solid #3498db',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: '#3498db',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background 0.3s ease, color 0.3s ease',
  },
  activeCategory: {
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background 0.3s ease, color 0.3s ease',
  },

  /* ✅ Recipe Cards */
  recipeList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.5em',
    margin: '10px 0',
  },
  cardDescription: {
    color: '#555',
    fontSize: '1em',
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
    transition: 'background 0.3s ease',
  },

  /* ✅ Footer */
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
};

export default IndexPage;
