jQuery(document).ready(function(){
  var mapId = $("#map-id").val();
  $.ajax({
    method: "GET",
    url: "/maps/" + mapId,
  }).done((maps) => {
    for(map of maps) {
      ($("#map-title").append($("<h2>").text(map.name))
        .append($("<p>").text(map.description))
        ).appendTo($("#map-greeting-info"));
    }
  }).fail((error) => {
    console.log(error)
    $("#map").empty().text(error.responseText);
  })

});
