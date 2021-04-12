// import {BASE_URL} from '../../../env.json'

import axios from "axios"

export const LoginApiService = async (args) => {
    
    console.log("args in service", args)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        data: JSON.stringify(args),
        url: 'http://localhost:1010/api/v1/login'
    }
    return axios(options)
            .then(res=>res)
}

export const SignupApiService = async (args) => {
    
    console.log("args in service", args)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        data: JSON.stringify(args),
        url: 'http://localhost:1010/api/v1/user-signup'
    }
    return axios(options)
            .then(res=>res)
}