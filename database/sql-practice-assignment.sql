-- Required Base Questions
-- Add the SQL that does what is asked in each question.

-- 1. Select all movies with the 'Adventure' genre? Use the id.

SELECT * 
FROM "movies"
JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
JOIN "genres" ON "genres".id = "movies_genres".genre_id
WHERE "genres".name = 'Adventure';

result:
1	Avatar	images/avatar.jpeg	Avatar (marketed as James Cameron's Avatar) is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron, and stars Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium, a room-temperature superconductor. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.	1	1	1	1	Adventure
2	Beauty and the Beast	images/beauty-and-the-beast.jpg	Beauty and the Beast is a 2017 American musical romantic fantasy film directed by Bill Condon from a screenplay written by Stephen Chbosky and Evan Spiliotopoulos. Co-produced by Walt Disney Pictures and Mandeville Films, it was filmed in the UK with predominantly British principal actors. The film is a live-action remake of Disney's 1991 animated film of the same name, itself an adaptation of Jeanne-Marie Leprince de Beaumont's 18th-century fairy tale. The film features an ensemble cast that includes Emma Watson and Dan Stevens as the eponymous characters with Luke Evans, Kevin Kline, Josh Gad, Ewan McGregor, Stanley Tucci, Audra McDonald, Gugu Mbatha-Raw, Ian McKellen, and Emma Thompson in supporting roles.	4	2	1	1	Adventure

-- 2. Get the count of movies that have each genre.  
--  Make sure you get back all the genres!

Example Result:
---------------------------------
| genre_name    | movie_count   |
---------------------------------
| Adventure     | 4             |
---------------------------------
| Comedy        | 1             |
---------------------------------
| Drama         | 5             |
---------------------------------
| Disaster      | 0             |
---------------------------------

SELECT "genres".name, COUNT("movies".title)
FROM "genres"
JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
JOIN "movies" ON "movies".id = "movies_genres".movie_id
GROUP BY "genres".name;

results:
Adventure	2
Musical	2
Romantic	1
Epic	1
Comedy	7
Animated	2
Biographical	4
Fantasy	1
Drama	2
Space-Opera	2
Science Fiction	2

-- 3. Add the genre "Superhero" to "Star Wars".
INSERT INTO "movies_genres" ("movie_id", "genre_id")
VALUES (10, 13);

SELECT * 
FROM "movies"
JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
JOIN "genres" ON "genres".id = "movies_genres".genre_id
WHERE "genres".name = 'Superhero';

result:
10	Star Wars: The Last Jedi	images/star-wars.jpg	Star Wars: The Last Jedi (also known as Star Wars: Episode VIII – The Last Jedi) is a 2017 American epic space-opera film written and directed by Rian Johnson. It is the second installment of the Star Wars sequel trilogy, following The Force Awakens (2015), and the eighth episode of the main Star Wars film franchise. It was produced by Lucasfilm and distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Andy Serkis, Lupita Nyong'o, Domhnall Gleeson, Anthony Daniels, Gwendoline Christie, and Frank Oz in returning roles, with Kelly Marie Tran, Laura Dern and Benicio del Toro joining the cast. It features the first posthumous film performance by Fisher, who died in December 2016, and the film is dedicated to her memory. The plot follows Rey as she receives Jedi training from Luke Skywalker, in hopes of turning the tide for the Resistance in the fight against Kylo Ren and the First Order, while General Leia Organa, Finn, and Poe Dameron attempt to escape a First Order attack on the dwindling Resistance fleet.	27	10	13	13	Superhero


-- 4. Remove the "Comedy" genre from "Titanic"
DELETE FROM "movies_genres"
WHERE ("movies_genres".movie_id = 13 AND "movies_genres".genre_id = 4);

SELECT * 
FROM "movies"
JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
JOIN "genres" ON "genres".id = "movies_genres".genre_id
WHERE "movies".title = 'Titanic';

result:
13	Titanic	images/titanic.jpg	Titanic is a 1997 American epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron. A fictionalized account of the sinking of the RMS Titanic, it stars Leonardo DiCaprio and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.	22	13	10	10	Romantic
13	Titanic	images/titanic.jpg	Titanic is a 1997 American epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron. A fictionalized account of the sinking of the RMS Titanic, it stars Leonardo DiCaprio and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.	23	13	6	6	Drama


-- Stretch

-- 1. How would you get all movies and all of their genres, but only one row per movie? (For example, on the list page we want to see all the movies and all of the movies' genres that apply)
-- There're a few ways to do this, research ARRAY_AGG or JSON_AGG


-- 2. Delete the movie "The Martian". It has associated genres data...
-- You may need to check out the ON DELETE CASCADE for the table columns...