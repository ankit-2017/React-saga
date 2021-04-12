import { call, takeLatest, takeEvery, put, race, take, all } from "@redux-saga/core/effects";
import {LoginInit, LoginSuccess, LoginError, SignUpInit, SignUpError} from '../redux/actions'
import {LoginApiService, SignupApiService} from '../redux/Service/ApiService'

function* LoginRequest(action) {
    try {
        console.log("action in saga", action.payload)
        const result = yield race({
            success : call(LoginApiService, action.payload),
            cancel: take('CANCEL_TASK')
        }
        )
        // const result = yield call(LoginApiService, action.payload )
        console.log("response", result)
        yield put(LoginSuccess(result.success))
        window.localStorage.setItem("user", JSON.stringify(result.success.data.data))
    } catch (error) {
        console.log("error in saga", error.response.data)
        yield put(LoginError())
        yield put({type: 'ERROR_NOTIFICATION', payload: error.response.data})
    }
} 



function* SignupWorker(action) {
    try {
        console.log("action in saga", action.payload)
        const result = yield race({
            success : call(SignupApiService, action.payload),
            cancel: take('CANCEL_TASK')
        }
        )
        console.log("response", result)
        yield put({type: 'SUCCESS_NOTIFICATION', payload: result.success.data})
        window.localStorage.setItem("user", result.success.data.data)
        // const result = yield call(LoginApiService, action.payload )
        
        // yield put(LoginSuccess(result.success))
    } catch (error) {
        console.log("error in saga", error.response.data)
        yield put({type: 'ERROR_NOTIFICATION', payload: error.response.data})
    }
} 

export function* AuthSaga() {
    console.log("LoginSaga called")
    yield all([
        takeLatest(LoginInit().type, LoginRequest),
        takeLatest(SignUpInit().type, SignupWorker)
    ])
}