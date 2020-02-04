const recipe = "";
const calories = 0;
const fat = 0;
const protein = 0;


$(()=>{
    console.log("linked")




    $.ajax({
        url: "https://api.edamam.com/search?q=steak&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182",
        type: "GET",
        data: {
          "$limit" : 4
        },
    }).done(function(data) {
      alert("We found your dinner!");
      console.log(data);
    });
    
  })