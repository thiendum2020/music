import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {publishedSongsReducer} from './reducers/songReducers.js'
import logger from 'redux-logger'
import {authReducer} from './reducers/authReducers.js'


const rootReducer = combineReducers({
    publishedSongsReducer,
    authReducer
});

// lấy user login tử localstorage 
const userLoginFromStorage = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : null

const preloadedState = {
    authReducer: {
        isAuthenticated: userLoginFromStorage ? true : false,
        userLogin: userLoginFromStorage ? userLoginFromStorage.user : null
    }
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'


// const reducer = combineReducers({
    
// })

// //lấy user login tử localstorage 
// const userLoginFromStorage = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : null

// //lấy giỏ hàng từ localstorage về tương ứng vs id của user login
// const cartItemsFromStorage = userLoginFromStorage && localStorage.getItem(userLoginFromStorage.user._id) ? JSON.parse(localStorage.getItem(userLoginFromStorage.user._id)) : []

// const shippingInfoFromStorage = localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}


// //khởi tạo giá trị, kiểm tra đã có user đăng nhập hay chưa
// const initialState = {
//     authReducer: {
//         isAuthenticated: userLoginFromStorage ? true : false,
//         userLogin: userLoginFromStorage ? userLoginFromStorage.user : null

//     },
//     cartReducer: {
//         cartItems: cartItemsFromStorage,
//         shippingInfo: shippingInfoFromStorage
//     }
// }

// const middleware = [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// export default store