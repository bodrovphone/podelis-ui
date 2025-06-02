import { updateProkat } from "../../db";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest | any, res: NextApiResponse | any) {
  if (req.method === "POST" && req.body) {
    // 2. check user
    // 3. post to mongo
    // 4. response with the satus (done)
    try {
      const response = await updateProkat(req.body);
      res.status(200).json(response);
    } catch (error: any) {
      res
        .status(501)
        .json({ message: "was not unable to create post on DB", error });
    }
  } else {
    res.status(401).json({ message: "wrong request type, check method" });
  }
}
