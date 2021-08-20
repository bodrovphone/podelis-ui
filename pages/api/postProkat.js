import { postProkat } from "../../db";

import initMiddleware from "../../utils/init-middleware";
import validateMiddleware from "../../utils/validate-middleware";
import { check, validationResult } from "express-validator";

const validateBody = initMiddleware(
  // other checkers
  // https://github.com/validatorjs/validator.js#validators
  validateMiddleware(
    [
      check("title").isLength({ min: 4, max: 40 }),
      check("description").isLength({ min: 10, max: 800 }),
      check("price").isInt({ min: 1, max: 1000000 }),
      check("period").isInt({ min: 1, max: 365 }),
      check("units").isBoolean(),
      check("conditions").isArray(),
      check("deposit").isInt({ min: 0, max: 100000000 }),
      check("pledge").isLength({ min: 0, max: 300 }),
      check("imagesId").isUUID(),
      check("imagesCounter").isInt({ min: 0, max: 4 }),
      check("dateCreated").isDate(),
      check("imgExt").isIn(["png", "jpeg"]),
      check("city").isLength({ min: 1, max: 50 }),
    ],
    validationResult
  )
);

export default async function handler(req, res) {
  if (req.method === "POST" && req.body) {
    try {
      await validateBody(req, res);

      const response = await postProkat(req.body);
      res.status(200).json(response);
    } catch (error) {
      res
        .status(501)
        .json({ message: "was not unable to create post on DB", error });
    }
  } else {
    res
      .status(401)
      .json({ message: "wrong request type or missing required fields" });
  }
}
