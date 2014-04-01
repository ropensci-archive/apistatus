apistatus
=========

api status dashboard


1. apiinfo.json is consumed by a php class (apistatus)

2. each 'eg_call' is curled and returned true or false then appended to the json object and written to statuses.json

3. statuses.json is consumed by status.js and the table #status in index.php is appended accordingly

