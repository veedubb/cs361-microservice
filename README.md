# cs361-microservice
RUNNING THIS PROJECT:
  1. Download the latest release.
  2. Move the project to a desired location on your device.
  3. In a terminal session, move into the "microservice" directory.
  4. Once in this directory, use the command "npm start" in your terminal.
  5. There should be several lines of output regarding the startup of the express server.
  6. Upon seeing the output "Server listening on port 3001. . ." the server is ready to accept HTTP requests.


MAKING A REQUEST:
  1. The microservice accepts HTTP POST requests with a body containing the key "search" with the value to be queried as its value.
  2. The request needs to be made to localhost:3001/get-movie
     a. If you are making requests from the same device using a React app, add the following line to your package.json file
     immediately before your dependecies:
     ```
     "proxy": "http://localhost:3001",
     ```
     This line will prevent most errors related to CORS.
  3. EXAMPLE REQUEST (Python):
     ```
     # import requests to make HTTP POST request
     import requests
     
     ...

     # Set the url and the request body
     url = "http://localhost:3001"
     post_body = {'search' : 'Finding Nemo'}

     # Make the request and store response in response variable
     response = requests.post(url, json=post_body)

     ...
     
     ```

RECEIVING A REQUEST:
  1. The microservice will respond with HTTP and the values of the results of the API call will be in the .Search member.
  2. This means that if you store the HTTP response in a variable called "data", you would access the various movie objects
     by calling "data.Search".
  3. Additionally, the response needs to be converted from JSON in order to be properly utilized.
  4. EXAMPLE RECEIPT OF DATA (JavaScript)
     ```
     const url = 'http://localhost:3001/get-movie'
     const title = 'Finding Nemo'
     const opts = {
         method: 'POST',
         body: JSON.stringify({search: title})

     let response = await fetch(url, opts)
     let data = await resp.json()
     console.log(data.Search)
     ```

UML DIAGRAM:

![Blank diagram](https://github.com/veedubb/cs361-microservice/assets/25048392/537780d6-c018-41fd-b502-bc741231a47e)
