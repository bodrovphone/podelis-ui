"use strict";

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clientPromise = client.connect();

// wrap this shit into wrapper to be able to make calls to API and don't make connection?
export async function getData(collection, query = {}) {
  let client = await clientPromise;
  let db = client.db("zadelis");

  let data = await db
    .collection(collection)
    .find(query)
    .project({ _id: 0 })
    .toArray();

  // since Next Triggers this concurrently I need to find a way to close the connection only when it is not in use by other processes
  // await client.close();

  return data;
}

export async function postProkat(payload) {
  let client = await clientPromise;
  let db = client.db("zadelis");

  let response = await db.collection("prokats").insertOne(payload);

  return response.insertedCount === 1 && response.insertedId;
}
