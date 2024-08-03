import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateSchema = (
    validator: Joi.AnySchema
) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = validator.validate(req.body);
    if(error) {
        return res.status(403).json({
            status: false,
            title: error.name,
            message: error.message,
        })
    }
    next();
}
