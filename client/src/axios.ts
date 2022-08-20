import axios from "axios";
import {getToken} from "./admin/hooks/auth";

const instance = axios.create({
    baseURL:"http://localhost:8888",
});
export const getConfig = () => {
    const token = getToken();
    return {
        headers: {Authorization: `Bearer ${token}`}
    }
};
export default instance;