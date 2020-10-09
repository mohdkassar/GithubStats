# GithubStats

## Node.js RESTful API Example

A RESTful API using Express.js.
Two operations are provided. 
This server keeps an array of JSON objects in memory and runs the CRUD operations on it. 
If the server is restarted everything returns to the initial configuration (12 event objects).

### Installation

1.  Go to the project's root directory **cd /my/path/to/directory**
2.  Run **npm install**

### Running the software

* ```node server.js``` for simple setups.

# API Endpoints

```
GET http://localhost:8080/languages         //gets the languages used by the most popular repositeries with their corresponding repository names and description
GET http://localhost:8080/languages/Python // gets the most popular repositeries that use the language provided in the url
