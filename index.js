// Import Mongoose
const mongoose = require("mongoose");
// Import dotenv to load environment variables
const dotenv = require("dotenv");

dotenv.config();

// Connect to the MongoDB database using the URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define the Person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

// Create the Person model from the schema
const Person = mongoose.model("Person", personSchema);

// Function to create and save a single person document
const createAndSavePerson = async () => {
  try {
    const person = new Person({
      name: "Kaffy Akuah",
      age: 30,
      favoriteFoods: ["Pizza", "Pasta"],
    });

    const savedPerson = await person.save();
    console.log("Person saved:", savedPerson);
  } catch (err) {
    console.error(err);
  }
};
// createAndSavePerson();

// Function to create multiple people documents at once
const createManyPeople = async (arrayOfPeople) => {
  try {
    const people = await Person.create(arrayOfPeople);
    console.log("People created:", people);
  } catch (err) {
    console.error(err);
  }
};
// createManyPeople([
//   { name: "Mary", age: 25, favoriteFoods: ["Burger"] },
//   { name: "Jane", age: 22, favoriteFoods: ["Salad"] },
// ]);


// Function to find all people with a given name
const findPeopleByName = async (name) => {
  try {
    const people = await Person.find({ name }); 
    console.log('People found:', people);
  } catch (err) {
    console.error(err); 
  }
};
// findPeopleByName('Kaffy Akuah');

// Function to find one person by a favorite food
const findOneByFood = async (food) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food }); 
    console.log('Person found:', person);
  } catch (err) {
    console.error(err); 
  }
};
// findOneByFood('Pizza');

// Function to find a person by their ID
const findPersonById = async (personId) => {
  try {
    const person = await Person.findById(personId); 
    console.log('Person found by ID:', person);
  } catch (err) {
    console.error(err); 
  }
};
// findPersonById("66c6da5ed15e6717f746dc7e");

// Function to find a person by ID, update their favoriteFoods, and save the document
const findEditThenSave = async (personId) => {
  try {
    const person = await Person.findById(personId); 
    person.favoriteFoods.push('Turkey'); 
    const updatedPerson = await person.save(); 
    console.log('Person updated:', updatedPerson);
  } catch (err) {
    console.error(err); 
  }
};
// findEditThenSave("66c6da5ed15e6717f746dc7e");

// Function to find a person by name and update their age to 20
const findAndUpdate = async (personName) => {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      // Find by name
      { name: personName }, 
      // Update age to 20
      { age: 20 }, 
      // Return the updated document
      { new: true } 
    );
    console.log('Person updated:', updatedPerson);
  } catch (err) {
    console.error(err); 
  }
};
// findAndUpdate("Jane");

// Function to delete a person by their ID
const removeById = async (personId) => {
  try {
    const removedPerson = await Person.findByIdAndDelete(personId); 
    console.log('Person removed:', removedPerson);
  } catch (err) {
    console.error(err); 
  }
};
// removeById("66c6da986c27b2f51400972c");

// Function to delete all people with the name "Mary"
const removeManyPeople = async () => {
  try {
    const result = await Person.deleteMany({ name: 'Mary' }); 
    console.log('People removed:', result);
  } catch (err) {
    console.error(err); 
  }
};
// removeManyPeople();

// Function to find people who like burritos, sort by name, limit results, and hide their age
const queryChain = async () => {
  try {
    const data = await Person.find({ favoriteFoods: 'Pizza' }) // Find people who like burritos
      .sort({ name: 1 }) // Sort by name (ascending)
      .limit(2) // Limit to 2 results
      .select('-age') // Exclude the age field
      .exec(); // Execute the query

    console.log('People found:', data);
  } catch (err) {
    console.error(err); 
  }
};
queryChain();

