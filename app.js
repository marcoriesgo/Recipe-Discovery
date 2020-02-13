console.log("linked")
$(()=>{


  $.ajax({
    url: "https://api.edamam.com/search?q=steak&app_id=cd8e8580&app_key=f8d1fa2b821a6224e531e36c5b111182",
    type: "GET",
}).done(function(data) {
  alert("We found your dinner!");
  console.log(data);
});


})
