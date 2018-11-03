
## Angular Universal

This course repository is updated to Angular v7, and there is a  package-lock.json file available, for avoiding semantic versioning installation issues.


# Installation pre-requisites

IMPORTANT: Please use NPM 5 or above, to make sure the package-lock.json is used.


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200, but you need to use HTTPS - [https://localhost:4200](https://localhost:4200)

This application uses a self-signed certificate, so you will need to accept it using the browser. If you are using Chrome, you will need to click Advanced and then choose "Proceed to localhost".

