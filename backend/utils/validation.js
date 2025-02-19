import { body } from "express-validator";

export const messageValidation = [
  body("message").isLength({ min: 5 }).withMessage("Minimum 5 characters"),
];
