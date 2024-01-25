import { Dispatch } from "redux";
import axios from "axios";
import { GetPhotoActionType, GetPhotoInfoFailure, PHOTO_INFO_FAILURE, PHOTO_INFO_REQUEST, PHOTO_INFO_SUCCESS } from "../types/get-photos-action-types";
import { Photo } from "../types/photos";

const fetchPhotoInfoRequest = (): GetPhotoActionType => {
  return {
    type: PHOTO_INFO_REQUEST
  }
}

const fetchPhotoInfoSuccess =  (response: Photo[]): GetPhotoActionType => {
  return {
    type: PHOTO_INFO_SUCCESS,
    payload: response
  }
}

const fetchPhotoInfoFailure = (response: GetPhotoInfoFailure): GetPhotoActionType => {
  return {
    type: PHOTO_INFO_FAILURE,
    payload: response
  }
}

export const fetchPhotoInfo = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPhotoInfoRequest());
    axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
      dispatch(fetchPhotoInfoSuccess(response.data.slice(0,5)));
    }).catch(error => dispatch(fetchPhotoInfoFailure(error.message)))
  }
}