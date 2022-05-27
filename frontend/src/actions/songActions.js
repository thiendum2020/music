import {
    GET_ALL_SONGS_PUBLISHED_REQUEST,
    GET_ALL_SONGS_PUBLISHED_SUCCESS,
    GET_ALL_SONGS_PUBLISHED_FAIL,
} from "../constants/songConstants";

import axios from "axios";
const url = "http://localhost:8080/api";

export const getAllSongsPublished = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_SONGS_PUBLISHED_REQUEST });
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": userLogin && userLogin.token,
            },
        };

        const { data } = await axios.get(url + "/songs/published/get", config);

        dispatch({
            type: GET_ALL_SONGS_PUBLISHED_SUCCESS,
            payload: data.data,
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_SONGS_PUBLISHED_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
