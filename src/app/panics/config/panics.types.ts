import { ServerResponse } from "../../config/app.types";

export type UserModel = {
    id: number;
    name: string;
    email: string;
};

export type PanicModel = {
    id: number;
    longitude: string;
    latitude: string;
    panic_type: string;
    details: string;
    created_at: string;
    created_by: UserModel;
};

export type PanicsResponse = ServerResponse<{
    panics: PanicModel[];
}>;