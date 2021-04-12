import {put, takeEvery, takeLatest} from 'redux-saga/effects'
import Swal from 'sweetalert2'



function* ErrorNotificationWorker(action) {
    try {
        console.log("action in saga watcher", action)
        const {message} = action.payload
        
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error'
        })
    } catch (error) {
        
    }
}

function* SuccessNotificationWorker(action) {
    try {

        console.log("action in saga watcher", action)
        const {message} = action.payload
        console.log("message", message)
        
        // Notification(action)
        Swal.fire({
            title: 'Success!',
            text: message,
            icon: 'success'
        }).then(()=>{
            console.log("navigate here")
            window.location.href = "/"
        })

    } catch (error) {
        
    }
}

export function* NotificationWatcher(){
    yield takeEvery('ERROR_NOTIFICATION', ErrorNotificationWorker)
    yield takeEvery('SUCCESS_NOTIFICATION', SuccessNotificationWorker)
}