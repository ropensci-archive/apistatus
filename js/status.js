$(document).ready(function() {

  function apistatus() {
    var apis = $.getJSON("statuses.json", function(data) {
      console.log( "success" );

      for (var i = 0; i < data.length; i++) {
          var tr = d3.select("#status tbody").append("tr");

          tr.append("td").html(data[i]["name"]);
          tr.append("td").html("<a href=" + data[i]["api_docs"] + ">" + data[i]["api_docs"] + "</a>");

          var label = "label";
          var status = '';

          if(data[i]["status"] === true) {
            label += "-success";
            status = 'OK';
          }
          else {
            label += "-danger";
            status = 'NOT OK';
          }

          tr.append("td")
          .append("span")
          .attr("class", "label " + label)
          .text(status);



          //var s = checkUrl("http://www.antweb.org/api");

          //alert("second: " + s);

          //tr.append("td").html(s);

        }

    });
  }

  function checkUrl(url) {
    $.ajax({
      url: url,
      type: 'GET',
      //jsonp: "callback",
      dataType: 'jsonp',
      complete: function(e, xhr, settings){

        var status = e.status;

        alert('first: ' + status);

        // return status;
        /*
        if (status === 200) {

          alert('200');
          return '200';
        // ...
        }
        else {
          alert('not 200');
          return 'fail';
        }
        */
      }
    });
  }

  apistatus();

});
