import { GetPhotoActionType, PHOTO_INFO_FAILURE, PHOTO_INFO_REQUEST, PHOTO_INFO_SUCCESS } from "../types/get-photos-action-types";
import { Photo } from "../types/photos";

interface PhotoInfoResponse {
    loading: boolean;
    data: Photo [];
    error: string;
}

const initialState: PhotoInfoResponse = {
  loading: false,
  data: [],
  error: ""
}

const photoReducer = (state = initialState, action: GetPhotoActionType): PhotoInfoResponse => {
  switch(action.type) {
    case PHOTO_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      }
    case PHOTO_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case PHOTO_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      }
    default:
        return state
  }
}

export default photoReducer;