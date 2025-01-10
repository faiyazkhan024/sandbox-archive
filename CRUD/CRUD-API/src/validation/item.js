const { body } = require("express-validator");

const itemValidator = [
  body("name")
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Name should note be empty")
    .isString()
    .withMessage("Name should be a string")
    .isLength({ min: 6, max: 255 })
    .withMessage("Name should contain at least 6-255 characters")
    .matches(/[a-zA-Z\s]/)
    .withMessage("Name should conation a-z and A-Z characters only"),
  body("mobile")
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Phone Number should note be empty")
    .isString()
    .withMessage("Phone Number should be a string")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone Number should be exact 10 characters in length")
    .matches(/[0-9]/)
    .withMessage("Phone Number should only contain 0-9"),
  body("email")
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Email should note be empty")
    .isString()
    .withMessage("Email should be a string")
    .normalizeEmail()
    .isEmail()
    .withMessage("Email should contain @ and be in proper format"),
  body("hobbies")
    .not()
    .isEmpty()
    .withMessage("Hobbies cannot be empty")
    .exists({ checkNull: true, checkFalsy: true }),
  body("hobbies.*")
    .isString()
    .withMessage("Hobbies should be an array of string"),
];

module.exports = itemValidator;
