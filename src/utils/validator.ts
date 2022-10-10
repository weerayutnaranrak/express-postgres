import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
const resultsValidator = (req: Request) => {
  const messages = [];
  if (!validationResult(req).isEmpty()) {
    const errors = validationResult(req).array();
    for (const i of errors) {
      messages.push(i);
    }
  }
  return messages;
};

export const checkValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = resultsValidator(req);
  if (errors.length > 0) {
    return res.status(400).json({
      method: req.method,
      status: res.statusCode,
      error: errors
    });
  }
  next();
};
