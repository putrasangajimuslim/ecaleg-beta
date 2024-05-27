import { ProfileData } from "./profile-data.model";

export interface UserData {
    id: string,
    email: string,
    isActive: boolean,
    profileId: string,
    profile: ProfileData,
    fullname: string,
}