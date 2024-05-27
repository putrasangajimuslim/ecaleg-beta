import { UserData } from "../../shared/models/user-data.model";

export interface LoginResp {
    token: string;
    akun: UserData;
}