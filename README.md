# WEEKEND MOVIE SAGA CHALLENGE

## Description

_Duration: 30 hours_

This is a full-stack application designed to store and display movies. On the main page we see a list of all of the movie posters and their titles that we can scroll through on our leisure. When we click one, we are taken to a page where we can read details about the movie we selected. The main page is just a button click away. We can also navigate to a page to add additional movies to our collection through easy to use input fileds. If you change your mind, you can click cancel, or you can click save and include the movie in the database with the rest.

## Screen Shot

### Movie List View

![Movie List View](./wireframes/movie-saga-list.png)

### Add Movie View

![Add Movie View](./wireframes/movie-saga-add.png)

### Movie Details View

![Movie Details View](./wireframes/movie-saga-details.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- PostgreSQL/Postico
- React
- Redux
- Saga

## Installation

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Click any image on the main page
2. You'll be directed to a page with all of the details of that movie. A quick button click and you're back on the main page again.
3. You can add a movie of your own by clicking the "Add a Movie" button on the main page which will transport you to the Add Movie Page
4. On the Add Movie Page you can fill out the inputs on the form.
5. Click Save to add your movie to the list
6. Click Cancel and return to browse.


## Built With

- NodeJS
- React
- Redux
- Express
- Saga
- Material UI
- Postgres/Postico

## Acknowledgement
Thanks to Mark and Chris for spotchecking my code and helping me troubleshoot this project, thanks to Kevin for helping me grasp this subject matter this week. Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)
