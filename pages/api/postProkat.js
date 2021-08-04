import { postProkat } from "../../db";

function validatePostInput(payload) {
  // https://dev.to/meddlesome/nextjs-apis-validator-with-middleware-3njl
  // тут тоже самое вроде как - https://nextjs.org/docs/api-routes/api-middlewares
}

export default async function handler(req, res) {
  if (req.method === "POST" && req.body.payload) {
    // 1. validate payload
    // 2. check user
    // 3. post to mongo
    // 4. response with the satus (done)
    try {
      const response = await postProkat(req.body.payload);
      res.status(200).json(response);
    } catch (error) {
      res
        .status(501)
        .json({ message: "was not unable to create post on DB", error });
    }
  } else {
    res.status(401).json({ message: "wrong request type or no payload" });
  }
}
