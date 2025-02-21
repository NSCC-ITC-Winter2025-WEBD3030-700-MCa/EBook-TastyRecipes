import * as React from "react";
import './recipes.css'; // Import the CSS file (make sure you create this)

export default function Component() {
  return (
    <div className="recipe-container">
      <h1 className="title">How to Make Spaghetti With Meat Sauce</h1>
      <h4 className="author"><b>By: Marc Matsumoto</b> <a href="https://www.w3schools.com/">Read more!</a></h4>
      
      <img
        src="/images/spaghetti.jpg"
        alt="Spaghetti"
        />

      <p className="content-section">
        <u>The Spaghetti</u>
        <p>
          Water takes a while to boil, so I always start by putting a large pot of salted water on to boil. I usually add 1 tablespoon of table salt for every gallon of water. This ensures each strand of pasta is well seasoned.
        </p>
        <p>
          Any kind of spaghetti will work, but spaghetti noodles come in thicknesses ranging from 1.4mm to 2.2mm thick. While any thickness will work for this best spaghetti recipe, thicker noodles take longer to cook, while thinner noodles will take less time, so check the package to figure out the right amount of time to boil the pasta. I usually boil it for 1 minute less than what the package says and then finish cooking it in the sauce.
        </p>
      </p>
      
      <p className="content-section">
        <u>The Sauce</u>
        <p>
          The first step to making any great sauce is to caramelize the aromatics. This is a process that can normally take up to an hour to do properly, but by cutting the aromatics small, adding some baking soda, and steaming them covered with a lid, we can reduce this down to around 13 minutes.
        </p>
        <p>
          Amongst its many superpowers, baking soda has the ability to break down the aromatics, which makes them cook faster and eventually dissolve into the sauce as if they'd been cooked for hours. It also raises the pH of the mixture, which speeds up both caramelization and the Maillard reaction. Both of these browning reactions lead to the creation of new flavor compounds, which take pungent, spicy onions and turn them into mellow, sweet flavor bombs.
        </p>
        <p>
          After about 10 minutes of steaming, you can remove the lid and boil off any remaining liquid, while allowing the aromatics to caramelize in a matter of minutes.
        </p>
        <p>
          Then, I add the beef and pork and crumble them up a bit with a spatula before adding the wine. You want to add the wine to the meat before it's fully cooked as the liquid keeps the ground meat from getting tough, which would require a lot of time to tenderize.
        </p>
        <p>
          Finally, the tomato puree, ketchup, oregano, salt, and pepper get added, and I cook this together over medium heat to get it to reduce quickly. You should be able to get the sauce to the right consistency in under 10 minutes. Still, it's important to stir it continuously, which not only prevents the sauce from burning, it also speeds up the evaporation of excess liquid. You can tell when the sauce is done when you can scrape a spatula along the bottom of the pan, and the sauce takes a moment to fill in the gap.
        </p>
      </p>

      <p className="content-section">
        <u>Put Them Together</u>
        <p>
        This is perhaps the most important step because it marries the two components of my best spaghetti recipe together. Once your meat sauce is nice and thick and your pasta is about a minute from being fully cooked, transfer the spaghetti straight into the pan with the sauce using tongs. Don't worry about the starchy pasta water that hitches a ride because this extra liquid allows you to finish cooking the pasta in the sauce. If your spaghetti starts to clump up, just add more pasta water one ladleful at a time as you mix. When the pasta is cooked to your liking, and each strand is coated in a glistening layer of meat sauce, it's done! You may have trouble believing that this amazing spaghetti recipe only took about half an hour to cook. At this point you can serve it, or you can grate in your favorite dry cheese such as Parmigiano-Reggiano a.k.a. Parmesan, or Pecorino Romano and stir it in.
        </p>
      </p>

      <p className="content-section">
        <u>Ingredients</u>
        <ul><b>

        <li>255 grams ground beef</li>
        <li>100 grams ground pork</li>
        <li>⅛ teaspoon of baking soda</li>
        <li>180 grams onion, or 1 small onion, finely minced</li>
        <li>50 grams carrot, or ⅓ carrot, peeled, grated</li>
        <li>14 grams garlic, minced</li>
        <li>2 tablespoons of olive oil</li>
        <li>½ cup of red wine</li>
        <li>500 grams tomato puree</li>
        <li>2 tablespoons of olive oil</li>
        <li>2 tablespoons of ketchup</li>
        <li>1 teaspoon of dried oregano</li> 
        <li>1 teaspoon of salt</li>
        <li>¼ teaspoon of ground black pepper</li>
        <li>225 grams spaghetti</li>
        <li>Flat-leaf parsley, chopped for garnish</li>
        <li>Parmesan cheese, for garnish</li>
        <li>500 grams tomato puree</li>
        
        </b></ul>
      </p>

      <p className="content-section">
        <u>Steps</u>
        <ol>
            
        <li>Bring a large pot of well-salted water to a boil.</li>
        <li>Dissolve the baking soda in a tablespoon of water and add it to a frying pan, along with the minced onions, grated carrot, minced garlic, and olive oil. Stir the mixture to evenly combine and cover this with a lid. Put it on the stove over medium heat, and set the timer for 10 minutes.</li>
        <li>Once you see steam escaping from between the lid and the pan, turn down the heat to low, and continue steaming the onion mixture until the timer goes off.</li>
        <li>When the timer goes off, remove the lid and turn up the heat to medium-high. Saute the mixture for about 3-minute or until all the liquid has evaporated and the onions start to brown.</li>
        <li>Add the ground beef and ground pork and break up the clumps with a spatula.</li>
        <li>Once there are no large lumps of meat left, add the wine, and continue breaking the clumps up until the mixture no longer smells like alcohol.</li>
        <li>Add the tomato puree, ketchup, dried oregano, salt, and black pepper and vigorously simmer the sauce while stirring it constantly for about 10 minutes.</li>
        <li>While the sauce is reducing, add the spaghetti to the boiling water, submerge it under the water as quickly as possible and cook for 1 minute less than what the package directions say.</li>
        <li>The sauce is done when you can pass a spatula through it, and it takes a second for the sauce to fill in the gap.</li>
        <li>When the pasta is done, use tongs to transfer the spaghetti directly to the pan with the sauce. It's okay if some of the boiling liquid goes into the sauce. Stir the noodles into the sauce and add additional boiling liquid if the pasta starts looking dry.</li>
        <li>Serve the pasta garnished with chopped parsley and parmesan cheese to taste.</li>
        
        </ol>
      </p>

    </div>
  );
}
