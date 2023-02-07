import {configureStore} from "@reduxjs/toolkit";
import { courseReducer } from "./reducers/courseReducer";
import {adminReducer} from "./reducers/adminReducer"
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";



const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer,
        subscription:subscriptionReducer,
        admin:adminReducer,
        other:otherReducer
    },
});

export default store;

export const server = "https://coursebundlerserver-o5fy.onrender.com/api/v1";