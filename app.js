console.log("linked")
// let urlString = 'https://api.edamam.com/search?q=steak&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182&calories=' + calorieRange

$(()=>{

// Write function that will delete the previous content on the page
  const deletePreviousContent = () => {
    $(".recipe").contents().remove();
  };

//Write a function that will generate a list baseed on the user input
  const showRecipe = data => {
    deletePreviousContent();

    let $recipeIntroduction =  $("<h1>").text("Bon Appétit").attr("id", "recipeIntro")
    $(".recipe").append($recipeIntroduction);

    let integer = (Math.floor(Math.random() * data.hits.length));

    let loadedRecipe = data.hits[integer].recipe;

    let calories = Math.floor(loadedRecipe.calories);

    let recipeLink = loadedRecipe.url;
    
    let $recipeName = $("<h2>").text(loadedRecipe.label).attr("id", "recipeName")
    $(".recipe").append($recipeName);

    let $recipePicture = $(`<img src="${loadedRecipe.image}" class="recipeImage"/>`)
    $(".recipe").append($recipePicture);

    let $recipeCalories = $("<h2>").text("Total Recipe Calories").attr("id", "recipeCalories")
    $(".recipe").append($recipeCalories);

    let $recipeCaloriesValue = $("<p>").text(calories).attr("id", "recipeCaloriesValue")
    $(".recipe").append($recipeCaloriesValue);

    let $recipeYield = $("<h2>").text("Yield").attr("id", "recipeYield")
    $(".recipe").append($recipeYield);

    let $recipeYieldValue = $("<p>").text(loadedRecipe.yield +  " persons").attr("id", "recipeYieldValue")
    $(".recipe").append($recipeYieldValue);

    let $recipeCooktime = $("<h2>").text("Cooking Time").attr("id", "recipeCooktime")
    $(".recipe").append($recipeCooktime);

    let $recipeCooktimeValue = $("<p>").text(loadedRecipe.totalTime + " minutes").attr("id", "recipeCooktimeValue")
    $(".recipe").append($recipeCooktimeValue);

    let $recipeLink = $("<h2>").text("Recipe Link").attr("id", "recipeLink")
    $(".recipe").append($recipeLink);

    let $recipeLinkValue = $(`<a href="${recipeLink}">${loadedRecipe.label}</a>`).attr("id", "recipeLinkValue").css("color", "#44c0d8")
    $(".recipe").append($recipeLinkValue);

    let $notHappyQuestion = $("<h3>").text("Not happy with the recipe you got?").attr("id", "searchAgainPrompt")
    $(".recipe").append($notHappyQuestion);

    let $generateAgainButton = $("<button>").attr("class", "regenerateButton").attr("type", "submit").text("Find a Random Recipe")
    $(".recipe").append($generateAgainButton);

    $(".recipe").css("background-color", "black")

  }


// Build ajax call for the calories box recipes
  $("form").on("submit", () => {
    event.preventDefault();
    const calorieInput = $('input[id="calories"]').val();
    $.ajax({url: "https://api.edamam.com/search?q=random&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182&calories=" + calorieInput}).then(
      data => {
        console.log(data);
        showRecipe(data);
      }
    );
  });


//Build ajax call for the food types buttons
  $(".food").on("click", () => {
    event.preventDefault(); 
    $.ajax({url: "https://api.edamam.com/search?q=" + $(event.target).text() + "&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182"}).then(
      data => {
        console.log(data);
        showRecipe(data);
      }
    );
  });

//Build ajax call for button where the user does not like their current recipe:
$(document).on("click", ".regenerateButton", () => {
  event.preventDefault(); 
  $.ajax({url: "https://api.edamam.com/search?q=random&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182"}).then(
    data => {
      console.log(data);
      showRecipe(data);
    }
  );
});
  

})
