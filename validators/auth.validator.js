import { body } from "express-validator";
import { createValidatorMiddleware } from "../middlewares/validator.middleware.js";

const name = body("name")
  .exists()
  .withMessage("The 'name' field is required")
  .isLength({ min: 2 })
  .withMessage("The 'name' field must be at least 2 characters long");

const email = body("email")
  .exists()
  .withMessage("The 'email' field is required")
  .isString()
  .withMessage("The 'email' field must be a string")
  .isEmail()
  .withMessage("The 'email' field must be a valid email address of form user@example.com");

const password = body("password")
  .exists()
  .withMessage("The 'password' field is required")
  .isStrongPassword()
  .withMessage(
    "The 'password' field must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
  );

export const registerValidator = createValidatorMiddleware([name, email, password]);
export const loginValidator = createValidatorMiddleware([email, password]);
