import { server } from "../store";
import axios from "axios";

export const updateProfile = (name, email) => async dispatch => {
    try {
        dispatch({ type: "updateProfileRequest" });

        const { data } = await axios.put(`${server}/updateprofile`, {
            name, email
        }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        })
        dispatch({ type: "updateProfileSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "updateProfileFail",
            payload: error.response.data.message,
        });
    }
};

export const updateProfilePicture = formdata => async dispatch => {
    try {
        dispatch({ type: "updateProfilePictureRequest" });

        const { data } = await axios.put(`${server}/updateprofilepicture`,
            formdata
            , {
                headers: {
                    "Content-type": "multipart/form-data"
                },
                withCredentials: true,
            })
        dispatch({ type: "updateProfilePictureSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "updateProfilePictureFail",
            payload: error.response.data.message,
        });
    }
};

export const changePassword = (oldPassword, newPassword) => async dispatch => {
    try {
        dispatch({ type: "changePasswordRequest" });

        const { data } = await axios.put(`${server}/changepassword`, {
            oldPassword, newPassword,
        }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        })
        dispatch({ type: "changePasswordSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "changePasswordFail",
            payload: error.response.data.message,
        });
    }
};

export const forgerPassword = (email) => async dispatch => {
    try {
        dispatch({ type: "forgerPasswordRequest" });

        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        }

        const { data } = await axios.post(`${server}/forgetpassword`, {
            email,
        },
            config
        );
        dispatch({ type: "forgerPasswordSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "forgerPasswordFail",
            payload: error.response.data.message,
        });
    }
};

export const resetPassword = (token, password) => async dispatch => {
    try {
        dispatch({ type: "resetPasswordRequest" });

        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        }

        const { data } = await axios.put(`${server}/resetpassword/${token}`, {
            password,
        },
            config
        );
        dispatch({ type: "resetPasswordSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "resetPasswordFail",
            payload: error.response.data.message,
        });
    }
};

export const addToPlaylist = (id) => async dispatch => {
    try {
        dispatch({ type: "addToPlaylistRequest" });

        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        }

        const { data } = await axios.post(`${server}/addtoplaylist`, {
            id,
        },
            config
        );
        dispatch({ type: "addToPlaylistSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "addToPlaylistFail",
            payload: error.response.data.message,
        });
    }
};

export const removeFromPlaylist = (id) => async dispatch => {
    try {
        dispatch({ type: "removeFromPlaylsitRequest" });

        const config = {
            withCredentials: true,
        }

        const { data } = await axios.delete(`${server}/removefromplaylist?id=${id}`,
            config
        );
        dispatch({ type: "removeFromPlaylsitSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "removeFromPlaylsitFail",
            payload: error.response.data.message,
        });
    }
};