import express from 'express';
import AuthController from "../controllers/Auth.Controller";
import {validateSchema} from "../services/joi.service";
import {loginScheme, registerScheme} from "../validations/auth.validation";

const router = express.Router();

router.post("/login", validateSchema(loginScheme), AuthController.login);
router.post("/register", validateSchema(registerScheme),AuthController.register);

export default router;
