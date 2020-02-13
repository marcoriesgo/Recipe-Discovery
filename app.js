console.log("linked")
// let urlString = 'https://api.edamam.com/search?q=steak&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182&calories=' + calorieRange

$(()=>{



  $("form").on("submit", () => {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();
    $.ajax({
      url:
        "https://api.edamam.com/search?q=steak&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182&calories=" +
        $(event.target).text(),
    }).then(
      data => {
        console.log(data);
        createList(data);
      },
      () => {
        console.log("bad");
      }
    );
  });



})
