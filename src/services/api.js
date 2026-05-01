import axios from "axios";

/**
 * withCredentials in Axios is a flag that tells the browser to 
 * include cookies and authentication information (like session cookies) in cross‑site HTTP requests.
 * 
 * Session cookies → must use withCredentials: true so the browser attaches them.
 * JWT tokens → usually stored in headers (Authorization), so withCredentials isn’t needed.
 */

export const ApiClient = () => {
    let client = null
    if (!client) {
        client = axios.create({
            baseURL: "https://69ecc232af4ff533142b5653.mockapi.io/api/v1/",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    return client
}

export const apiClientInstance = ApiClient()

apiClientInstance.interceptors.request.use(
    (config) => {
        let token =''
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

apiClientInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("error", error.response)
        return Promise.reject(error.response)
    }
)