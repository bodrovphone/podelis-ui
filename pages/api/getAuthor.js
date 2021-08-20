import { getAuthor } from "../../db";

export default async function handler({ method, query }, res) {
  if (method === "GET" && query?.user) {
    const response = await getAuthor(query.user);
    response
      ? res.status(200).json(response)
      : res.status(404).json({ message: "Not found" });
  } else {
    res
      .status(400)
      .json({ message: "Unsupported request method or parameters" });
  }
}
