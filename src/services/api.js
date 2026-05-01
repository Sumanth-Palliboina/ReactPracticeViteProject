import axios from "axios";

export const apiInstance = () => {
    let instance = null
    if (instance) return instance
    instance = axios.create({
        baseURL: "https://69ecc232af4ff533142b5653.mockapi.io/api/v1/",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return instance
}