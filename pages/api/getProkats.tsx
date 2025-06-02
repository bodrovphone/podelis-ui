import { getData } from "../../db";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest | any, res: NextApiResponse | any) {
  const { method, query } = req;
  if (method === "GET") {
    // hard coded 4 prokats for now...
    const response = await getData("prokats", {}, false, 4);
    response
      ? res.status(200).json(response)
      : res.status(404).json({ message: "Error getting prokats data" });
  } else {
    res
      .status(400)
      .json({ message: "Unsupported request method or parameters" });
  }
}
