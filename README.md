# Palindrome product search prototype

This prototype implements a functionality that applies a 50% discounts on all the products found trough a search done with a palindrome.

## Solution composition

The solution is composed by the following elements:
* Web server built with NodeJS and Express
* A web application built in React with the help of Redux
* A MongoDB to store the products

## Run locally

### Dockerized
To run locally the whole solution with Docker containers, use the following command:
```shell script
$ make solution-up
```

If you want to run just the database container use this command:
```shell script
$ make database-up
```

To reset the containers that compose the solution, use this command:
```shell script
$ make solution-reset
``` 

To remove stop and remove the containers, use this command:
```shell script
$ make solution-down
```

## Deployment on Heroku
This solution can be deployed on Heroku having the following considerations:
* Heroku will host the web server and within the web application.
* The database must be provided by a third party MongoDB such as MongoDB Atlas

### Database deployment
Consider using the MongoDB Atlas (https://www.mongodb.com/cloud/atlas) service to store the database (it offers a free tier).
* Create a cluster, a database called `"promotions"`, and a collection called `"products"`.
* Create a user for this cluster and take note of the user and password.
* On the "Network Access" menu, whitelist all the IPs that need acces to the database (your computer and the heroku instance). If you are brave, you can whitelist all the IPs form the Internet.
* Import the file `./products-db/database/01-products.json` using `mongoimport`. 

### Webapp deployment
To deploy the webapp in Heroku using the Docker file included run the following commands:
````shell script
$ cd webapp
$ heroku container:push web -a <APP_NAME>
$ heroku container:release web -a <APP_NAME>
````
Details on this procedure can be found at:
https://devcenter.heroku.com/articles/container-registry-and-runtime


