import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../constants/authConstants.js';

import axios from "axios";
const url = "http://localhost:8080/api";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(url + '/login', { email, password }, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });

        //Gửi data (khi đăng nhập thành công api trả về thông tin của tài khoản đó) lên localstorage để lưu trữ lâu dài - sử dụng cho nhiều component 
        localStorage.setItem('userLogin', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Loi",
        });
    }
};