"use strict";

const { MongoClient, ObjectID } = require("mongodb");

const client = new MongoClient(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clientPromise = client.connect();

// wrap this shit into wrapper to be able to make calls to API and don't make connection?
export async function getData(collection, query = {}, sortById = false) {
  let client = await clientPromise;
  let db = client.db("zadelis");

  let data = db.collection(collection).find(query);

  if (sortById) {
    data = await data.sort({ _id: -1 });
  }

  data = await data.toArray();

  return data;
}

export async function postProkat(payload) {
  let client = await clientPromise;
  let db = client.db("zadelis");

  let response = await db.collection("prokats").insertOne(payload);

  return response.insertedCount === 1 && response.insertedId;
}

export async function getAuthor(_id) {
  if (!ObjectID.isValid(_id)) {
    throw "invalid author _id";
  }

  let client = await clientPromise;
  let db = client.db("zadelis");

  try {
    let data = await db.collection("users").findOne(
      { _id: ObjectID(_id) },
      {
        projection: {
          name: 1,
          rating: 1,
          registered: 1,
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error({ message: "Error getting data from DB", error });
  }
}
