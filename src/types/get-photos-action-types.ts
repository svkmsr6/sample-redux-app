import { Photo } from "./photos";

export const PHOTO_INFO_REQUEST = 'PHOTO_INFO_REQUEST';
export const PHOTO_INFO_SUCCESS = 'PHOTO_INFO_SUCCESS';
export const PHOTO_INFO_FAILURE = 'PHOTO_INFO_FAILURE';

// export interface GetPhotoInfoSuccess {
//     data: Photo [];
// }

export interface GetPhotoInfoFailure {
    message: string;
    success?: boolean;
}

interface PhotoInfoRequest {
    type: typeof PHOTO_INFO_REQUEST;
  }
  
interface PhotoInfoSuccess {
    type: typeof PHOTO_INFO_SUCCESS;
    payload: Photo [];
}

interface PhotoInfoFailure {
    type: typeof PHOTO_INFO_FAILURE;
    payload: GetPhotoInfoFailure;
}

export type GetPhotoActionType = PhotoInfoRequest | PhotoInfoSuccess | PhotoInfoFailure;