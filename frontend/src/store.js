import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { publishedSongsReducer } from "./reducers/songReducers.js";
import { authReducer } from "./reducers/authReducers.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga"

const rootReducer = combineReducers({
    publishedSongsReducer,
    authReducer,
});

// lấy user login tử localstorage
const userLoginFromStorage = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin")) : null;

const preloadedState = {
    authReducer: {
        isAuthenticated: userLoginFromStorage ? true : false,
        userLogin: userLoginFromStorage ? userLoginFromStorage.user : null,
    },
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

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
