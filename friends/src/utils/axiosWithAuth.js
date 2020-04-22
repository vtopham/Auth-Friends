import axios from "axios";

//This will be our centralized axios request, it has the token which is nice!
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "http://localhost:5000"
    })
}