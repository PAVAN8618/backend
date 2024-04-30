const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://pnttiwari99:pnttiwari99@cluster0.lboljle.mongodb.net/"; // Replace this with your actual connection string

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to MongoDB Atlas
async function connectToMongoDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

// Call the connectToMongoDB function when your application starts
connectToMongoDB();
