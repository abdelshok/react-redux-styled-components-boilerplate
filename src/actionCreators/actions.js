import {
    AUTHENTICATE_USER,
    STORE_ACCESS_TOKEN,
    REMOVE_ACCESS_TOKEN,
    SIGN_OUT_USER,
} from './constants';

export const authenticateUser = (state) => ({
    type: AUTHENTICATE_USER,
    isAuthenticated: true
})

export const signOutUser = (state) => ({
    type: SIGN_OUT_USER,
    isAuthenticated: false
})


export const storeAccessToken = (state) => ({
    type: STORE_ACCESS_TOKEN,
    accessToken: state
})

export const removeAccessToken = (state) => ({
    type: REMOVE_ACCESS_TOKEN,
    accessToken: ''
})