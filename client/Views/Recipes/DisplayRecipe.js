Template.DisplayRecipe.helpers({
   recipe_title: function(){
      if(Recipes.findOne() != undefined)
      return Recipes.findOne().recipe_title;
   },
   recipe_author: function(){
      if(Recipes.findOne() != undefined)
      return Recipes.findOne().recipe_author;
   },
   recipe_image: function(){
      if(Recipes.findOne() != undefined)
      return Recipes.findOne().recipe_image;
   },
   ingredients: function(){
      if(Recipes.findOne() != undefined)
      return Recipes.findOne().ingredients;
   },
   directions: function(){
      if(Recipes.findOne() != undefined)
      return Recipes.findOne().directions;
   }
});
