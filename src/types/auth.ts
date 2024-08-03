export enum roles {
    USER = 'user',
    ADMIN = 'admin'
}

export type TUserRegister = {
    email: string;
    name: string;
    password: string;
}

export type TUserLogin = {
    email: string;
    password: string;
}

