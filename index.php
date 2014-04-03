<?php
  include 'php/print_statuses.php';
?>

<!DOCTYPE html5>
<html>
  <head>
    <title>rOpenSci | Status</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
    <script src="/js/status.js"></script>
  </head>

  <div class="results"></div>

  <body>
    <p>Below is the live status information for the publicly available rOpenSci apis.</p>

    <table id="status" class="table">
      <thead>
        <tr>
          <th class="name">Name</th>
          <th class="name">API Docs</th>
          <th class="status">Status</th>
          <th class="status">Response Time (seconds)</th>
          <th class="status">Time of Request</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </body>

</html>
