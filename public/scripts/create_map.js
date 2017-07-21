jQuery(document).ready(function(){
  $('#markerInfo');
  $('#saveMarkerInfo').on('click', function(event){
    $.ajax({
      type: 'POST',
      data: $('#markerInfo').serialize(),
      url: '/api/markers',
      success: function(data) {
        var markerInfo = $('#markerInfo').serialize();
        console.log(markerInfo)
      }
    })
  });
});

