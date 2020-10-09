# GithubStats

## Node.js RESTful API Example

A RESTful API using Express.js.
Two operations are provided. 
This server keeps an array of JSON objects in memory and runs the CRUD operations on it. 
If the server is restarted everything returns to the initial configuration (12 event objects).

### Installation

1.  Go to the project's root directory
2.  Run **npm install**

### Running the software

* ```node server.js``` for simple setups.

### API Endpoints
Request Body Parameters:
<table class="humanColumnApiDescription markdown formalTheme">
<tr><td colspan="1"><strong>Name</strong><td colspan="1"><strong>Type</strong><td colspan="1"><strong>Description</strong></td></tr>
<tr><td style="padding-right: 40px; width: 140px;">date</td><td>DateTime</td> <td>Returns the repositories that were created after the date specified. </td></tr>
</table>

+ Request (application/json)

                {
                "date": "2020-10-01"
                }
```
GET http://localhost:8080/languages                 //gets the languages used by the most popular repositories with their corresponding repository names and description
GET http://localhost:8080/languages/:LanguageName  // gets the most popular repositories that use the language provided in the url
```

### Testing the API
Test your API using [Postman](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop)
