if (Recipes.find().count() === 0)
{
   Recipes.insert({
   	recipe_title: "Warming Chickpea Stew",
	recipe_author: "Live Lighter",
	recipe_image:
	"http://livelighter.org/wp-content/uploads/2008/11/chickpea-stew.jpg",
	ingredients: [
			{amount: "4 cups", name: "vegetable stock or water"},
			{amount: "1-2", name: "onions, chopped"},
			{amount: "4", name: "cloves of garlic, minced"},
			{amount: "2", name: "med sized yams, diced"},
			{amount: "2 cups", name: "green kale, chopped"},
			{amount: "1 cup", name: "chickpeas, cooked"},
			{amount: "½ cups", name: "brown rice, cooked"},
			{amount: "¼ tsp", name: "sea salt"},
			{amount: "¼ cup", name: "cashew or almond butter"},
			{amount: "2 tbsp", name: "lemon juice, freshly squeezed"},
			{amount: "¼ cup", name: "tamari"},
			{amount: "1/8 tbsp", name: "chilli powder"},
			{amount: "1 tbsp", name: "olive oil"},
			
		     ],
	directions: [
	 	      {direction: "In a large soup pot, sautÃ© onion and garlic in olive oil for 3-5 minutes." },
	 	      {direction: "Add vegetable stock/water, yam, additional vegetables (not kale), chickpea, brown rice, and sea salt." },
	 	      {direction: "Bring to a boil, reduce heat, and simmer covered for 30-45 minutes." },
	 	      {direction: "In a small bowl, mix nut butter with Â½ cup liquid from stew." },
	 	      {direction: "Stir mixture back into stew, along with kale, and cook for 5 minutes." },
	 	      {direction: "Add lemon juice, tamari, and chili powder and cook for 5 more minutes." }
		    ],
		 
   });
}
