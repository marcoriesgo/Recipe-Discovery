console.log("linked")
// let urlString = 'https://api.edamam.com/search?q=steak&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182&calories=' + calorieRange

$(()=>{

  const showRecipe = data => {
    $(".recipe").contents().remove();

    let $recipeIntroduction =  $("<h1>").text("Bon Appétit")
    $(".recipe").append($recipeIntroduction);

    let loadedRecipe = data.hits[0].recipe;
    
    let $recipeName = $("<h2>").text(loadedRecipe.label).attr("id", "recipeName")
    $(".recipe").append($recipeName);

    let $recipePicture = $(`<img src="${loadedRecipe.image}" class="recipeImage"/>`)
    $(".recipe").append($recipePicture);

  }


  $("form").on("submit", () => {
    event.preventDefault();
    const calorieInput = $('input[id="calories"]').val();
    $.ajax({
      url: "https://api.edamam.com/search?q=random&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182&calories=" + calorieInput
    }).then(
      data => {
        console.log(data);
        showRecipe(data);
      }
    );
  });

  $(".food").on("click", () => {
    event.preventDefault(); 
    $.ajax({
      url: "https://api.edamam.com/search?q=" + $(event.target).text() + "&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182"
    }).then(
      data => {
        console.log(data);
        showRecipe(data);
      }
    );
  });
  

})
