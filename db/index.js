const MongoClient = require("mongodb").MongoClient;

export default async function getData(collection, query = {}) {
  const client = await MongoClient.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let db = client.db("zadelis");

  let data = await db
    .collection(collection)
    .find(query)
    .project({ _id: 0 })
    .toArray();

  client.close();

  return data;
}
