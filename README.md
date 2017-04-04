Example task.

The resulting application should be a JavaScript / React web application querying a REST api with 1 parameter, a date.
The REST api retrieves the data from a small database (sqlite or csv file based).

Please provide your code on a git (github, gitlab, bitbucket) repository that we can download and install to test.
The application should have npm commands that we can use to run a test server, and spin up the UI.

- Please write a React web application using the following packages:
* react-bootstrap https://react-bootstrap.github.io/
* redux http://redux.js.org/   (Please note that you could use other libs such as MobX if you prefer. Please explain!)
* ismorphic-fetch  (Open for suggestions)

Any other package is up to you to decide.

- The layout of the application is the following:
__________________________
Menu: Enovos logo + date picker input

| timestamp | name | status |
| timestamp | name | status |
| timestamp | name | status |
etc ...

Footer: copyright, contact
__________________________

- The rest api is defined in the Swagger file provided with this text file.
Please create a REST api using Express (open for suggestions, please specify and explain!) which will display a table of timestamps, a name and a status.
The REST api call will be limited to a time range of 1 day (provided by the date input)

- Read the values from a database (SQLITE for example) that you created. 
Please fill the database with random values for 1 week before and 1 week after so we can test the application by changing the dates.
Query the database based on a time range of 1 day and feed the rest API with this data.
