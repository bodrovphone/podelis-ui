export default function validateMiddleware(validations, validationResult) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res
      .status(401)
      .json({
        message: "error validating prokat data",
        errors: errors.array(),
      });
  };
}
