function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

$(()=>{
    console.log("linked")
    



    $.ajax({
        url: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian",
        type: "GET",
        data: {
          "$limit" : 3
        }
    }).done(function(data) {
      alert("Retrieved " + data.length + " records from the dataset!");
      console.log(data);
    });
    
  })