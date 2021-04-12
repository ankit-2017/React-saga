import  {all, fork} from 'redux-saga/effects'
import {AuthSaga} from './authSaga'
import {NotificationWatcher} from '../views/Notification/saga'

export default function* rootSaga(){
    yield all([
        fork(AuthSaga),
        fork(NotificationWatcher)
    ])
}

