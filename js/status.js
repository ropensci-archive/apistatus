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









/*
var sites = [{ name: "Public Library of Science (PLOS)", url: "http://alm.plos.org", api_key: "3pezRBRXdyzYW6ztfwft" },
             { name: "Copernicus Publications", url: "http://metricus.copernicus.org", api_key: "Dxkwpz8FRe7JHw4EGC1v" },
             { name: "ALM Data Challenge<br/>(10,000 random CrossRef DOIs)", url: "http://almhack.crowdometer.org", api_key: "qzcE4ciMj438fLPqyRdE" },
             { name: "CrossRef Labs", url: "http://alm.labs.crossref.org", api_key: "64aJra4M7NPHVAWxxCZ5" }];

// queue requests, using queue.js library: https://github.com/mbostock/queue
var queue = queue();
for (var i = 0; i < sites.length; i++) {
  query = sites[i]["url"] + "/api/v5/status?api_key=" + sites[i]["api_key"];
  queue.defer(api_call, query);
}
queue.awaitAll(ready);

var formatFixed = d3.format(",.0f");

// extra error handling, otherwise an error from one API call will break the queue
function api_call(query, callback) {
  d3.json(query, function(error, data) {
  if (error) {
    console.log("there was an error loading the data: " + error);
    callback(null, { error: "An error occured.", data: null });
  } else {
    callback(error, data);
  }
});
}

function ready(error, data) {
  for (var i = 0; i < sites.length; i++) {
    var tr = d3.select("#status tbody").append("tr");

    var status = (data[i]["error"]) ? "Unknown" : "OK";
    label = (data[i]["error"]) ? "label-warning" : "label-success";
    version = (data[i]["data"] === null) ? "n/a" : data[i]["data"]["version"];
    articles_count = (data[i]["data"] === null) ? "n/a" : data[i]["data"]["articles_count"];

    var row = { name: sites[i]["name"], url: sites[i]["url"], status: status, label: label, version: version, articles_count: articles_count};

    tr.append("td")
      .html(function(d) { return row["name"]; });
    tr.append("td")
      .append("a").attr("href", function(d) { return row["url"] })
      .text(function(d) { return row["url"]; });
    tr.append("td")
      .append("span")
      .attr("class", "label " + row["label"])
      .text(function(d) { return row["status"]; });
    tr.append("td")
      .text(function(d) { return row["version"]; });
    tr.append("td")
      .attr("class", "number")
      .text(function(d) { return number_with_delimiter(row["articles_count"]); });
  }
}

function number_with_delimiter(number) {
  if(number !== "n/a") {
    return formatFixed(number);
  } else {
    return number;
  }
}

*/
