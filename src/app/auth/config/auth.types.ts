import { ServerResponse } from "../../config/app.types";

export type LoginResponse = ServerResponse<{
    api_access_token: string;
}>;

export type LoginRequestData = {
    email: string;
    password: string;
}