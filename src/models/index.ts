export interface IAPIResponse<T> {
    data: T;
    errors: Array<string>;
}

export interface IUserData {
    id: string;
    email: string;
    name: string;
}

export interface ILoginData {
    id: string;
}

export interface IUserBody {
    name: string;
    email: string; 
    password: string;
}
