[![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](http://www.repostatus.org/badges/latest/concept.svg)](http://www.repostatus.org/#concept)


apistatus
=========

api status dashboard


1. apiinfo.json is consumed by a php class (apistatus)

2. each 'eg_call' is curled and returned true or false then appended to the json object and written to statuses.json

3. statuses.json is consumed by status.js and the table #status in index.php is appended accordingly


Based on http://articlemetrics.github.io/status/ by @mfenner.

**Running the app**

Start up a server in your shell by doing 

```
php -S localhost:8000
```

Then navigate to http://localhost:8000/
