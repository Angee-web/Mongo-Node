In this project, I utilized MongoDB with Mongoose to perform various CRUD operations on a Person model. The project demonstrates how to connect to a MongoDB database, define a Mongoose schema, and implement common database operations.

Features
-Database Connection: Established a connection to MongoDB using Mongoose.
-Schema Definition: Defined a Person schema with fields like name, age, and favoriteFoods.
CRUD Operations:
-Create: Functions to create and save single or multiple documents.
-Read: Functions to find documents by name, ID, or specific field values.
-Update: Functions to update specific fields in a document.
-Delete: Functions to remove documents by ID or specific criteria.
-Advanced Queries: Implemented chaining of search query helpers like .sort(), .limit(), and .select().

Environment Setup:
-Create a .env file in the root directory.
-Add your MongoDB URI as MONGO_URI in the .env file.

File Structure:
index.js: Contains all the code related to database operations.

Key Dependencies:
-mongoose: For object data modeling (ODM).
-dotenv: For loading environment variables.
