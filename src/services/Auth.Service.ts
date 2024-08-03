import db from "../prisma/index";
import bcrypt from "bcryptjs";
import JWT from '../utils/jwt'
import dotenv from "dotenv";
import createError from "http-errors";
import {TUserLogin, TUserRegister} from "../types/auth";

dotenv.config();

class AuthService {
    static async registerUser(data: TUserRegister) {
        data.password = await bcrypt.hash(data.password, 10);
        const alreadyCreatedUser = await db.user.findUnique({
            where: { email: data.email }
        });
        if(alreadyCreatedUser) {
            throw createError.InternalServerError('User already exists with same email');
        }
        const user = await db.user.create({
            data
        });
        const accessToken = await JWT.signAccessToken(user);
        delete user.password;
        return { ...user, accessToken };
    }

    static async loginUser(data: TUserLogin) {
        const { email, password } = data;
        const user = await db.user.findUnique({
            where: { email }
        });

        if (!user) {
            throw createError.NotFound('User not registered');
        }
        const checkPassword = bcrypt.compareSync(password, user.password);
        if (!checkPassword) throw createError.Unauthorized('Email address or password not valid');

        delete user.password

        const accessToken = await JWT.signAccessToken(user)
        return { ...user, accessToken }

    }
}

export default AuthService;
