import axios from "axios";

export default async (obj) => {
    if (obj.username === "" || obj.email.indexOf('@') === -1 || obj.phone === "" || obj.password === "") { return { username: "", _id: "X" } }
    else {
        const result = await axios.post("http://localhost:5000/api/user/register", obj);
        return result.data;
    }
};
