import {
  // param, check, body,
  query
} from 'express-validator';

export default function registerEmailValidator() {
  return [query('limit').notEmpty().withMessage('Limit is required')];
}
