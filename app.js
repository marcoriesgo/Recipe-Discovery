const app_id = "cd8e8580";
const app_key = "f8d1fa2b821a6224e531e36c5b111182";



$(()=>{
    console.log("linked")


    function foodSearch(food){
      ajax_get(`https://api.edamam.com/search?q=${food}&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182`,
      function(data) {
          if (data.length == 0) {
            clearRecipe();
            $("#recipe").append("<tr><td>There is no image for that recipe.</td></tr>");
          } else {
            displayRecipe(data[0]);
          }
      });
  }

  function clearRecipe() {
    $('#recipeImage').attr('src', "");
    $("#recipeTable tr").remove();
  }

  function displayRecipe(image) {
    $('#recipeImage').attr('src', image.url);
    $("#recipeTable tr").remove();


  })