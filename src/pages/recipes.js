import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const recipes = [
  { id: 1, title: 'Delicious Spaghetti', imageurl: "/images/spaghetti.jpg", category: 'Pasta', description: 'Indulge in foreign flavors', link: '/recipes/spaghetti' },
  { id: 2, title: 'Vegetable Stir-Fry', imageurl: "/images/vegStirFry.jpg", category: 'Vegetarian', description: 'Healthy and delicious', link: '/recipes/vegetarian-stir-fry' },
  { id: 3, title: 'Chocolate Cake', imageurl: "/images/chocolatecake.jpg", category: 'Desserts', description: 'Sweet and rich dessert', link: '/recipes/chocolate-cake' },
  { id: 4, title: 'Classic Lasagna', imageurl: "/images/lasagna.jpg", category: 'Pasta', description: 'Layered with cheese and sauce', link: '/recipes/lasagna' },
  { id: 5, title: "Breanna's Loaded Mashed Potatoes", imageurl: "/images/potatoes.jpg", category: 'Sides', description: 'Loaded with cheese and bacon bits', link: '/recipes/potatoes' },
];

const SecondPage = () => (
  <Layout>
    <h1>Recipes</h1>

    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={recipe.link}>
            <h3>{recipe.title}</h3>
          </Link>
        </li>
      ))}
    </ul>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Recipes" />

export default SecondPage
