const recipeDropdown = document.querySelector('#recipe-dropdown');
const recipeDetails = document.querySelector('#recipe-details');
const foodImage = document.querySelector('img');
const aside = document.querySelector('aside');
const link = document.querySelector('#recipe-link');

const buttonLasagna = document.querySelector('#recipe-button-lasagna');
const buttonPizza = document.querySelector('#recipe-button-pizza');
const recipes = {
    'Home': {
        title: 'Hey and welcome to my book of recipes',
        ingredients: [
          
         
        ],
        instructions: [
         
        
        ],
        image: 'food.jpg',
        link: 'https://www.google.com/'
      },





    'chocolate-cake': {
      title: 'Chocolate Cake Recipe',
      ingredients: [
        '2 cups all-purpose flour',
        '2 cups granulated sugar',
        '1 cup unsalted butter, at room temperature',
        '4 large eggs',
        '1 cup unsweetened cocoa powder',
        '1 teaspoon baking powder',
        '1/2 teaspoon baking soda',
        '1/2 teaspoon salt',
        '1 cup buttermilk',
        '2 teaspoons vanilla extract'
      ],
      instructions: [
        'Preheat the oven to 350°F.',
        'Grease and flour two 9-inch round cake pans.',
        'In a large mixing bowl, cream the butter and sugar until light and fluffy.',
        'Beat in the eggs, one at a time.',
        'In a separate bowl, whisk together the cocoa powder, flour, baking powder, baking soda, and salt.',
        'Add the dry ingredients to the butter mixture alternately with the buttermilk, starting and ending with the dry ingredients.',
        'Stir in the vanilla extract.',
        'Divide the batter evenly between the prepared pans.',
        'Bake for 35 to 40 minutes, or until a toothpick inserted into the center of the cakes comes out clean.',
        'Cool the cakes in the pans for 10 minutes, then remove from the pans and cool completely on wire racks.'
      ],
      image: 'cake.jpg'
    },
    'lasagna': {
      title: 'Lasagna Recipe',
      ingredients: [
        '1 lb. ground beef',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 (28 oz.) can crushed tomatoes',
        '2 (6 oz.) cans tomato paste',
        '1 (6 oz.) can tomato sauce',
        '2 tbsp. sugar',
        '1 tsp. dried basil leaves',
        '1 tsp. fennel seeds',
        '1 tsp. Italian seasoning',
        '1 tsp. salt',
        '1/4 tsp. black pepper',
        '12 lasagna noodles',
        '16 oz. ricotta cheese',
        '1 egg',
        '1/4 cup chopped fresh parsley',
        '1/2 tsp. salt',
        '1/4 tsp. black pepper',
        '4 cups shredded mozzarella cheese',
        '1/2 cup grated Parmesan cheese'
      ],
      instructions: [
        'Preheat oven to 375°F.',
        'In a large skillet, cook the ground beef, onion, and garlic over medium heat until the beef is browned.',
        'Stir in the crushed tomatoes, tomato paste, tomato sauce, sugar, basil, fennel seeds, Italian seasoning, 1 tsp. salt, and 1/4 tsp. pepper.',
        'Simmer for about 10 minutes, or until the flavors have blended.',
        'In a separate bowl, mix together the ricotta cheese, egg, parsley, 1/2 tsp. salt, and 1/4 tsp. pepper.',
        'Spread a thin layer of the meat sauce in the bottom of a 9x13 inch baking dish.',
        'Place 3 lasagna noodles on top of the sauce.',
        'Spread a layer of the ricotta mixture over the noodles.',
        'Sprinkle with 1 cup of mozzarella cheese.',
        'Repeat the layering with the sauce, noodles, ricotta mixture, and mozzarella cheese two more times.',
        'Top with the remaining meat sauce.',
        'Sprinkle with the Parmesan cheese and remaining mozzarella cheese.',
        'Cover with foil and bake for 25 minutes.',
        'Remove the foil and bake for an additional 25 minutes, or until the cheese is melted and bubbly.'
      ],
      image: 'lagsagne.jpg'
    },
    'pizza': {
        title: 'Pizza Recipe',
        ingredients: [
          '1/2 cup warm water (110-115°F)',
          '1 tsp. sugar',
          '1 package active dry yeast',
          '3 cups all-purpose flour',
          '1 tsp. salt',
          '2 tbsp. olive oil',
          '1 cup tomato sauce',
          '1 cup shredded mozzarella cheese',
          '1/4 cup grated Parmesan cheese',
          'Toppings of your choice (pepperoni, mushrooms, onions, peppers, etc.)'
        ],
        instructions: [
          'In a large mixing bowl, combine the warm water, sugar, and yeast. Stir to dissolve and let sit for 5 minutes, or until the mixture is frothy.',
          'Add in the flour, salt, and olive oil.',
          'Stir until the dough comes together into a ball.',
          'Turn the dough out onto a floured surface and knead for about 5 minutes, or until the dough is smooth and elastic.',
          'Place the dough in a greased bowl and cover with a clean towel. Let the dough rise in a warm, draft-free place for about 1 hour, or until it has doubled in size.',
          'Preheat oven to 450°F.',
          'Roll the dough out onto a lightly greased pizza pan or baking sheet.',
          'Spread the tomato sauce evenly over the dough, leaving a small border around the edges.',
          'Sprinkle the mozzarella cheese over the sauce.',
          'Add your desired toppings.',
          'Sprinkle the Parmesan cheese over the top.',
          'Bake for 10-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.'
        ],
        image: 'pizza.jpg'
      },

        'boller': {
    title: 'Boller Recipe 60+ MIN',
    ingredients: [
      'Smør: 150 g',
      'Mælk: 3 dl',
      'Gær: 25 g',
      'Sukker: 3 spsk',
      'Groft salt: 1 tsk',
      'Stødt kardemomme: 1 tsk',
      'Hvedemel: 500 g',
      'Æg - til pensling',
      'Konditorcreme:',
      'Mælk: 4 dl',
      'Æggeblommer: 4',
      'Maizena: 3 spsk',
      'Sukker: 2 spsk',
      'Vaniljestang (kornene heraf) eller vaniljepasta i tilsvarende mængde: 1',
      'Appelsinfyld og glasur:',
      'Appelsiner (usprøjtede): 6',
      'Sukker: 1 spsk',
      'Flormelis: 100 g',
      'Friskpresset appelsinsaft: 1½ spsk',
      'Karolines Køkken® Piskefløde 38%: 3 dl'
    ],
  instructions: [
'Melt the butter in a saucepan and pour it into a large bowl.',
'Add the milk and dissolve the yeast in it.',
'Add sugar, salt, and cardamom.',
'Add the flour (leave about 1/2 cup of flour), and stir the dough until it is smooth and releases the bowl.',
'Cover the bowl and let the dough rise in a warm place for about 45 minutes.',
'Take the dough out on a floured surface and form it into 12 buns.',
'Let the dough rise again, covered, for about 1 hour.',
'Brush with egg and bake the buns in the middle of the oven until they are golden.',
'Let the buns cool completely.',
'For the custard filling, beat the milk and egg yolks together in a saucepan.',
'Beat the cornstarch, sugar, and vanilla seeds and pod in the saucepan.',
'Bring the mixture to a boil while whisking and cook the cream over low heat, still stirring, for about 3 minutes or until the taste of cornstarch is gone.',
'Pour the cream into a bowl and cover it with plastic wrap, making sure it doesnt form a skin. Let the cream cool and remove the vanilla pod afterwards.',
'For the orange filling and glaze, thinly slice the peel from 1 orange and set aside for garnish.',
'Finely grate the peel of 2 of the oranges.',
'Peel all the oranges and cut orange slices. Put them in a bowl and toss with orange peel and sugar.',
'Stir the powdered sugar and orange juice together to form a thick glaze.',
'Fastelavnsbuns with custard and orange: Whip the cream into a relatively firm foam, but stop in time so the cream does not become over whipped. Then whip the vanilla cream gently and combine with the cream. Put the custard filling in a pastry bag with a round tip.',
'Cut the tops of all the buns and take a bit of the crumb out to make room for the filling.',
'Put a small spoonful of orange filling into each bun and then pipe dabs of custard filling on top.',
'Put the tops back on the filled buns.',
'Spread the glaze on top of the Fastelavnsbuns and decorate with strips of orange peel.',
'Bake for 15-20 minutes at 180°F (hot air).'
],

 image: 'pizza.jpg'
  },
    };
    
    const select = document.querySelector('select');
    const title = document.querySelector('#title');
    const ingredients = document.querySelector('#ingredients');
    const instructions = document.querySelector('#instructions');
    const image = document.querySelector('#images');
    




    select.addEventListener('change', function(event) {
        aside.style.display = 'none';
      const recipe = recipes[event.target.value];
      title.textContent = recipe.title;
      
      ingredients.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
  instructions.textContent = recipe.instructions;
  foodImage.src = recipe.image;



      recipe.ingredients.forEach(function(ingredient) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredients.appendChild(li);
      
      });


      

      select.addEventListener('change', function() {
        const selectedOption = this.value;
        if (selectedOption === 'lasagna') {
          buttonLasagna.style.display = 'block';
          buttonPizza.style.display = 'none';
        } else if (selectedOption === 'pizza') {
          buttonLasagna.style.display = 'none';
          buttonPizza.style.display = 'block';
        }else if (selectedOption === 'boller') {
          buttonLasagna.style.display = 'none';
          buttonPizza.style.display = 'block';
        }
      });



      instructions.innerHTML = '';
      recipe.instructions.forEach(function(instruction) {
        const p = document.createElement('p');
        p.textContent = instruction;
        instructions.appendChild(p);
      });
    });
  
