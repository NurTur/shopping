import axios from "axios";
export default async (userId) => {
    const result = await axios.get(`http://localhost:5000/api/user/${userId}`);
    return result.data;
};