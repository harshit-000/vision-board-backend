import Joi from "joi";
import {stringRequiredValidation} from "./general.validation";

export const registerScheme = Joi.object({
    email: stringRequiredValidation,
    password: stringRequiredValidation,
    name: stringRequiredValidation,
});

export const loginScheme = Joi.object({
    email: stringRequiredValidation,
    password: stringRequiredValidation,
})
