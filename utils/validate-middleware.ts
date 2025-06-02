export default function validateMiddleware(validations: any[], validationResult: any) {
  return async (req: any, res: any, next: any) => {
    await Promise.all(validations.map((validation: any) => validation.run(req)));

    const errors: any = validationResult(req);
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
