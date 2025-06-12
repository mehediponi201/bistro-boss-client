import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-f217.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;