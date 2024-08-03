import AuthService from "../services/Auth.Service";
import { Request, Response } from 'express'

class AuthController {
    static register = async (req: Request, res: Response) => {
        try {
            const user = await AuthService.registerUser({
                ...req.body,
            });
            res.status(200).json({
                status: true,
                message: 'Successfully Registered',
                user
            })
        }
        catch (error) {
            console.log("Register Controller Error: ", error);
            res.status(error.status).json({
                status: false,
                message: error.message,
            })
        }
    }

    static login = async (req: Request, res: Response) => {
        try {
            const user = await AuthService.loginUser(req.body);
            res.status(200).json({
                status: true,
                message: "Account login successful",
                user
            });
        }
        catch (error) {
            console.log("Login Controller Error: ", error);
            res.status(error.status).json({
                status: false,
                message: error.message,
            })
        }
    }
}

export default AuthController;
