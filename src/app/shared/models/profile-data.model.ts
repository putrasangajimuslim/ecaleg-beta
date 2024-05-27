import { KabupatenResp } from "../../modules/masters/kabupaten/models/kabupaten-resp.model";
import { KecamatannResp } from "../../modules/masters/kecamatan/models/kecamatan-resp.model";
import { KelurahannResp } from "../../modules/masters/kelurahan/models/kelurahan-resp.model";

export interface ProfileData {
    id: string,
    panitiaId?: string,
    nama_panitia?: string,
    nik?: number,
    kabupatenId?: string,
    kecamatanId?: string,
    kelurahanId?: string,
    tpsId?: string,
    no_telp?: number,
    role?: string,
    createdAt?: string,
    updatedAt?: string,
    kabupaten?: KabupatenResp
    kecamatan?: KecamatannResp
    kelurahan?: KelurahannResp
}