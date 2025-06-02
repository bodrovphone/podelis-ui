'use strict';

const { MongoClient, ObjectID } = require('mongodb');

const client = new MongoClient(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clientPromise = client.connect();

// wrap this shit into wrapper to be able to make calls to API and don't make connection?
export async function getData(
  collection: string,
  query: any = {},
  sortById: boolean = false,
  limit: number = 0
): Promise<any[]> {
  let client: any = await clientPromise;
  let db: any = client.db('podelis');

  let data: any = db.collection(collection).find(query).limit(limit);

  if (sortById) {
    data = await data.sort({ _id: -1 });
  }

  data = await data.toArray();

  return data;
}

export async function postProkat(payload: any): Promise<any> {
  let client: any = await clientPromise;
  let db: any = client.db('podelis');

  let response: any = await db.collection('prokats').insertOne(payload);

  return response.insertedCount === 1 && response.insertedId;
}

export async function getAuthor(_id: any): Promise<any> {
  if (!ObjectID.isValid(_id)) {
    throw new Error('invalid author _id');
  }

  let client: any = await clientPromise;
  let db: any = client.db('podelis');

  try {
    let data: any = await db.collection('users').findOne(
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
  } catch (error: any) {
    throw new Error('Error getting data from DB');
  }
}

// this is dangerous. I should limit it to only update images and that's it. How else can I make it secure?
// Only authors of a post is suppose to update their data and nobody's elses
export async function updateProkat({ _id, ...payload }: { _id: any, [key: string]: any }): Promise<any> {
  if (!ObjectID.isValid(_id)) {
    throw 'invalid post _id';
  }

  let client: any = await clientPromise;
  let db: any = client.db('podelis');

  try {
    let data: any = await db
      .collection('prokats')
      .updateOne({ _id: ObjectID(_id) }, { $set: payload });

    return data;
  } catch (error: any) {
    throw new Error('Error updating data on DB');
  }
}
