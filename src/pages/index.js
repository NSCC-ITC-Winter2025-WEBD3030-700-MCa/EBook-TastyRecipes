import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  // Sample data for the card (you can replace this with dynamic data if needed)
  const cardData = {
    title: 'Delicious Spaghetti',
    description: 'Indulge in foreign flavours',
    link: '/recipes/spaghetti', // Link to the detailed recipe page
  };

  // Manage theme state locally
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Set the saved theme to the body
    document.body.classList.add(theme);

    // Add light or dark theme classes to the body
    if (theme === 'light') {
      document.body.style.backgroundColor = '#8abd98'; // Light background
      document.body.style.color = '#333'; // Light text color
    } else {
      document.body.style.backgroundColor = '#36593f'; // Dark background
      document.body.style.color = '#fff'; // Dark text color
    }
  }, [theme]);

  const toggleMode = () => {
    const newMode = theme === 'light' ? 'dark' : 'light';
    setTheme(newMode);

    // Remove the current theme class and add the new one
    document.body.classList.remove(theme);
    document.body.classList.add(newMode);

    // Save the new theme in localStorage
    localStorage.setItem('theme', newMode);
  };

  return (
    <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      {/* Mode Toggle Button */}
      <button
        id="mode-toggle"
        aria-label="Toggle dark/light mode"
        onClick={toggleMode}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          fontSize: '2rem',
          cursor: 'pointer',
          padding: '10px',
          zIndex: 9999,
        }}
      >
        {/* Show light mode icon when theme is 'light' */}
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
        )}
      </button>

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
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '300px',
          margin: '20px auto',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <h2 style={{ fontSize: '1.8em', margin: '10px 0' }}>{cardData.title}</h2>
        <p style={{ color: '', fontSize: '1.1em', marginBottom: '15px' }}>{cardData.description}</p>
        <Link
          to={cardData.link}
          style={{
            textDecoration: 'none',
            backgroundColor: '#3498db',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;