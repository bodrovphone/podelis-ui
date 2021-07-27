import { getAuthor } from "../../db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await getAuthor(req.query.user);
      if (response) {
        res.status(200).json(response);
      } else {
        throw "no user with such _id";
      }
    } catch (error) {
      res.status(501).json({
        message: "Error getting the author from DB",
        error: error,
      });
    }
  } else {
    res.status(401).json({ message: "wrong request type, check method" });
  }
}
