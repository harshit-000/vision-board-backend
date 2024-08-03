import Joi from "joi";

// String
const stringValidation = Joi.string().trim();
export const stringOptionalValidation = stringValidation.optional();
export const stringNullValidation = stringOptionalValidation.allow(null);
export const stringRequiredValidation = stringValidation.required();
