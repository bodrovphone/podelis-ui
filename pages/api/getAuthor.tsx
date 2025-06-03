import { getAuthor } from "../../db";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest | any, res: NextApiResponse | any) {
  const { method, query } = req;
  if (method === "GET" && query?.user) {
    const response = await getAuthor(query.user as string);
    response
      ? res.status(200).json(response)
      : res.status(404).json({ message: "Not found" });
  } else {
    res
      .status(400)
      .json({ message: "Unsupported request method or parameters" });
  }
}
