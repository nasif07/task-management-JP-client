import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-server-myqaw7lyd-nasif07s-projects.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;